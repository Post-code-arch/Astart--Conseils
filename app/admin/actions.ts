"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getWriteClient } from "@/lib/sanityWriteClient";
import { createSession, SESSION_COOKIE } from "@/lib/adminAuth";
import { adminCollections } from "@/lib/adminFields";

type Result = { ok: boolean; message: string };

// ---------- AUTH ----------
export async function login(_prev: unknown, formData: FormData): Promise<Result> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return { ok: false, message: "Configuration manquante (ADMIN_PASSWORD)." };
  if (password !== expected) return { ok: false, message: "Mot de passe incorrect." };
  const { value, maxAge } = await createSession(expected);
  (await cookies()).set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  const from = String(formData.get("from") ?? "/admin");
  redirect(from.startsWith("/admin") ? from : "/admin");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/admin/login");
}

// ---------- READS (server, fresh) ----------
export async function getSingletonValues(docId: string): Promise<Record<string, unknown>> {
  const client = getWriteClient();
  const doc = await client.getDocument(docId);
  return (doc as Record<string, unknown>) ?? {};
}

export async function getCollectionItems(docType: string): Promise<Record<string, unknown>[]> {
  const client = getWriteClient();
  return client.fetch(`*[_type==$t]|order(order asc, _createdAt asc)`, { t: docType });
}

// ---------- SINGLETON FIELD WRITES ----------
export async function saveFields(
  docId: string,
  values: Record<string, unknown>,
  required: string[] = [],
): Promise<Result> {
  try {
    for (const path of required) {
      const v = values[path];
      if (v == null || (typeof v === "string" && v.trim() === "")) {
        return { ok: false, message: `Le champ « ${path} » est obligatoire.` };
      }
    }
    const client = getWriteClient();
    await client
      .transaction()
      .createIfNotExists({ _id: docId, _type: docId })
      .patch(docId, (p) => p.set(values))
      .commit();
    return { ok: true, message: "Modifications enregistrées." };
  } catch (e) {
    return { ok: false, message: `Erreur lors de l'enregistrement : ${(e as Error).message}` };
  }
}

export async function uploadImage(docId: string, path: string, formData: FormData): Promise<Result & { url?: string }> {
  try {
    const file = formData.get("file") as File | null;
    if (!file || file.size === 0) return { ok: false, message: "Aucun fichier sélectionné." };
    const client = getWriteClient();
    const buffer = Buffer.from(await file.arrayBuffer());
    const asset = await client.assets.upload("image", buffer, { filename: file.name });
    await client
      .transaction()
      .createIfNotExists({ _id: docId, _type: docId })
      .patch(docId, (p) => p.set({ [path]: { _type: "image", asset: { _type: "reference", _ref: asset._id } } }))
      .commit();
    return { ok: true, message: "Image mise à jour.", url: asset.url };
  } catch (e) {
    return { ok: false, message: `Erreur d'upload : ${(e as Error).message}` };
  }
}

// ---------- COLLECTION CRUD ----------
function collection(docType: string) {
  const c = adminCollections.find((x) => x.docType === docType);
  if (!c) throw new Error(`Collection inconnue: ${docType}`);
  return c;
}

export async function createItem(docType: string, values: Record<string, unknown>): Promise<Result> {
  try {
    const c = collection(docType);
    for (const f of c.fields) {
      if (f.required && (values[f.path] == null || String(values[f.path]).trim() === "")) {
        return { ok: false, message: `Le champ « ${f.label} » est obligatoire.` };
      }
    }
    const client = getWriteClient();
    await client.create({ _type: docType, order: Date.now(), ...values });
    return { ok: true, message: "Élément ajouté." };
  } catch (e) {
    return { ok: false, message: `Erreur : ${(e as Error).message}` };
  }
}

export async function updateItem(docType: string, id: string, values: Record<string, unknown>): Promise<Result> {
  try {
    const c = collection(docType);
    for (const f of c.fields) {
      if (f.required && (values[f.path] == null || String(values[f.path]).trim() === "")) {
        return { ok: false, message: `Le champ « ${f.label} » est obligatoire.` };
      }
    }
    const client = getWriteClient();
    await client.patch(id).set(values).commit();
    return { ok: true, message: "Modifications enregistrées." };
  } catch (e) {
    return { ok: false, message: `Erreur : ${(e as Error).message}` };
  }
}

export async function deleteItem(id: string): Promise<Result> {
  try {
    await getWriteClient().delete(id);
    return { ok: true, message: "Élément supprimé." };
  } catch (e) {
    return { ok: false, message: `Erreur : ${(e as Error).message}` };
  }
}
