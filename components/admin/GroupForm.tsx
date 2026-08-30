"use client";

import { useState, useTransition } from "react";
import { saveFields, uploadImage } from "@/app/admin/actions";
import type { AdminField } from "@/lib/adminFields";

type Status = { ok: boolean; message: string } | null;

export default function GroupForm({
  docId,
  fields,
  initial,
  imageUrls,
}: {
  docId: string;
  fields: AdminField[];
  initial: Record<string, string>;
  imageUrls: Record<string, string>;
}) {
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [status, setStatus] = useState<Status>(null);
  const [pending, startTransition] = useTransition();
  const docType = fields[0]?.docType ?? docId;

  const set = (path: string, v: string) => setValues((s) => ({ ...s, [path]: v }));

  const onSave = () => {
    setStatus(null);
    startTransition(async () => {
      const payload: Record<string, unknown> = {};
      const required: string[] = [];
      for (const f of fields) {
        if (f.type === "image") continue; // images uploaded séparément
        if (f.required) required.push(f.path);
        payload[f.path] = f.type === "list"
          ? (values[f.path] ?? "").split("\n").map((s) => s.trim()).filter(Boolean)
          : (values[f.path] ?? "");
      }
      setStatus(await saveFields(docId, payload, required, docType));
    });
  };

  return (
    <section className="adm-section">
      {fields.map((f) => (
        <div className="adm-field" key={f.id}>
          <label htmlFor={f.id}>
            {f.label} {f.required && <span className="req">*</span>}
          </label>
          {f.type === "image" ? (
            <ImageField docId={docId} docType={docType} path={f.path} initialUrl={imageUrls[f.path]} />
          ) : f.type === "textarea" || f.type === "richtext" ? (
            <textarea id={f.id} value={values[f.path] ?? ""} onChange={(e) => set(f.path, e.target.value)} rows={4} />
          ) : f.type === "list" ? (
            <textarea id={f.id} value={values[f.path] ?? ""} onChange={(e) => set(f.path, e.target.value)} rows={4} />
          ) : (
            <input id={f.id} type="text" value={values[f.path] ?? ""} onChange={(e) => set(f.path, e.target.value)} />
          )}
          {f.help && <span className="hint">{f.help}</span>}
        </div>
      ))}
      <div className="adm-actions">
        <button className="adm-btn" onClick={onSave} disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer"}
        </button>
        {status && <span className={status.ok ? "adm-ok" : "adm-err"}>{status.message}</span>}
      </div>
    </section>
  );
}

function ImageField({ docId, docType, path, initialUrl }: { docId: string; docType: string; path: string; initialUrl?: string }) {
  const [url, setUrl] = useState(initialUrl ?? "");
  const [status, setStatus] = useState<Status>(null);
  const [pending, startTransition] = useTransition();

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.append("file", file);
      const res = await uploadImage(docId, path, fd, docType);
      setStatus(res);
      if (res.ok && res.url) setUrl(res.url);
    });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onFile} disabled={pending} />
      {pending && <span className="hint"> Envoi…</span>}
      {status && <span className={status.ok ? "adm-ok" : "adm-err"} style={{ marginLeft: 8 }}>{status.message}</span>}
      {url && <img src={url} alt="" className="adm-img-preview" />}
    </div>
  );
}
