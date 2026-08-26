"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createItem, updateItem, deleteItem } from "@/app/admin/actions";
import type { AdminCollection, AdminItemField } from "@/lib/adminFields";

type Row = Record<string, unknown> & { _id?: string };
type Status = { ok: boolean; message: string } | null;

function toInput(field: AdminItemField, raw: unknown): string {
  if (field.type === "list") return Array.isArray(raw) ? raw.join("\n") : "";
  return typeof raw === "string" ? raw : "";
}
function fromInput(field: AdminItemField, v: string): unknown {
  if (field.type === "list") return v.split("\n").map((s) => s.trim()).filter(Boolean);
  return v;
}

function Fields({ collection, values, set }: { collection: AdminCollection; values: Record<string, string>; set: (p: string, v: string) => void }) {
  return (
    <>
      {collection.fields.map((f) => (
        <div className="adm-field" key={f.path}>
          <label>{f.label} {f.required && <span className="req">*</span>}</label>
          {f.type === "select" ? (
            <select value={values[f.path] ?? ""} onChange={(e) => set(f.path, e.target.value)}>
              <option value="">—</option>
              {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          ) : f.type === "textarea" ? (
            <textarea value={values[f.path] ?? ""} onChange={(e) => set(f.path, e.target.value)} rows={3} />
          ) : f.type === "list" ? (
            <textarea value={values[f.path] ?? ""} onChange={(e) => set(f.path, e.target.value)} rows={4} />
          ) : (
            <input type="text" value={values[f.path] ?? ""} onChange={(e) => set(f.path, e.target.value)} />
          )}
        </div>
      ))}
    </>
  );
}

function ItemRow({ collection, item }: { collection: AdminCollection; item: Row }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Record<string, string>>(() => {
    const v: Record<string, string> = {};
    for (const f of collection.fields) v[f.path] = toInput(f, item[f.path]);
    return v;
  });
  const [status, setStatus] = useState<Status>(null);
  const [pending, startTransition] = useTransition();
  const set = (p: string, val: string) => setValues((s) => ({ ...s, [p]: val }));

  const save = () => startTransition(async () => {
    const payload: Record<string, unknown> = {};
    for (const f of collection.fields) payload[f.path] = fromInput(f, values[f.path] ?? "");
    const res = await updateItem(collection.docType, item._id!, payload);
    setStatus(res);
    if (res.ok) router.refresh();
  });
  const remove = () => {
    if (!confirm("Supprimer cet élément ?")) return;
    startTransition(async () => {
      const res = await deleteItem(item._id!);
      setStatus(res);
      if (res.ok) router.refresh();
    });
  };

  return (
    <div className="adm-item">
      <div className="adm-item-head" onClick={() => setOpen((o) => !o)}>
        <strong>{String(item[collection.titleField] ?? "(sans titre)")}</strong>
        <span>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div style={{ marginTop: 14 }}>
          <Fields collection={collection} values={values} set={set} />
          <div className="adm-actions">
            <button className="adm-btn" onClick={save} disabled={pending}>{pending ? "…" : "Enregistrer"}</button>
            <button className="adm-btn danger" onClick={remove} disabled={pending}>Supprimer</button>
            {status && <span className={status.ok ? "adm-ok" : "adm-err"}>{status.message}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

function NewItem({ collection }: { collection: AdminCollection }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>(null);
  const [pending, startTransition] = useTransition();
  const set = (p: string, val: string) => setValues((s) => ({ ...s, [p]: val }));

  const create = () => startTransition(async () => {
    const payload: Record<string, unknown> = {};
    for (const f of collection.fields) payload[f.path] = fromInput(f, values[f.path] ?? "");
    const res = await createItem(collection.docType, payload);
    setStatus(res);
    if (res.ok) { setValues({}); setOpen(false); router.refresh(); }
  });

  if (!open) return <button className="adm-btn ghost" onClick={() => setOpen(true)}>+ Ajouter</button>;
  return (
    <div className="adm-item" style={{ borderStyle: "dashed" }}>
      <strong>Nouvel élément</strong>
      <div style={{ marginTop: 14 }}>
        <Fields collection={collection} values={values} set={set} />
        <div className="adm-actions">
          <button className="adm-btn" onClick={create} disabled={pending}>{pending ? "…" : "Ajouter"}</button>
          <button className="adm-btn ghost" onClick={() => setOpen(false)} disabled={pending}>Annuler</button>
          {status && <span className={status.ok ? "adm-ok" : "adm-err"}>{status.message}</span>}
        </div>
      </div>
    </div>
  );
}

export default function CollectionEditor({ collection, items }: { collection: AdminCollection; items: Row[] }) {
  return (
    <section className="adm-section">
      <h2>{collection.label} <span style={{ color: "#8a7a70", fontWeight: 400 }}>({items.length})</span></h2>
      {items.map((it) => <ItemRow key={it._id} collection={collection} item={it} />)}
      <NewItem collection={collection} />
    </section>
  );
}
