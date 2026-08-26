import Link from "next/link";
import { notFound } from "next/navigation";
import { adminGroups, fieldsForGroup, collectionsForGroup, type AdminField } from "@/lib/adminFields";
import { hasWriteAccess } from "@/lib/sanityWriteClient";
import { getSingletonValues, getCollectionItems } from "../actions";
import { urlFor } from "@/sanity/image";
import GroupForm from "@/components/admin/GroupForm";
import CollectionEditor from "@/components/admin/CollectionEditor";
import type { Image } from "sanity";

export const dynamic = "force-dynamic";

function getPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, k) => (acc == null ? undefined : (acc as Record<string, unknown>)[k]), obj);
}

export default async function AdminGroupPage({ params }: { params: Promise<{ group: string }> }) {
  const { group } = await params;
  const meta = adminGroups.find((g) => g.slug === group);
  if (!meta) notFound();

  const fields = fieldsForGroup(group);
  const collections = collectionsForGroup(group);

  return (
    <>
      <p><Link href="/admin" className="adm-back">← Toutes les sections</Link></p>
      <h1>{meta.label}</h1>
      <p className="adm-sub">{meta.description}</p>

      {!hasWriteAccess ? (
        <p className="adm-err">Sanity non configuré — édition indisponible pour l&apos;instant.</p>
      ) : (
        <>
          {await renderSingletonForms(fields)}
          {await Promise.all(
            collections.map(async (c) => {
              const items = await getCollectionItems(c.docType);
              return <CollectionEditor key={c.id} collection={c} items={items as Record<string, unknown>[]} />;
            }),
          )}
        </>
      )}
    </>
  );
}

async function renderSingletonForms(fields: AdminField[]) {
  if (fields.length === 0) return null;
  // group fields by docId
  const byDoc = new Map<string, AdminField[]>();
  for (const f of fields) {
    if (!byDoc.has(f.docId)) byDoc.set(f.docId, []);
    byDoc.get(f.docId)!.push(f);
  }
  const forms = [];
  for (const [docId, docFields] of byDoc) {
    const values = await getSingletonValues(docId);
    const initial: Record<string, string> = {};
    const imageUrls: Record<string, string> = {};
    for (const f of docFields) {
      const raw = getPath(values, f.path);
      if (f.type === "list") initial[f.path] = Array.isArray(raw) ? raw.join("\n") : "";
      else if (f.type === "image") imageUrls[f.path] = urlFor(raw as Image);
      else initial[f.path] = typeof raw === "string" ? raw : "";
    }
    forms.push(
      <GroupForm key={docId} docId={docId} fields={docFields} initial={initial} imageUrls={imageUrls} />,
    );
  }
  return forms;
}
