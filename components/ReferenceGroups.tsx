import type { Reference } from "@/lib/references";

/** Groups references by their `group` field, preserving first-seen order. */
function groupReferences(items: Reference[]): { group: string; items: Reference[] }[] {
  const order: string[] = [];
  const byGroup = new Map<string, Reference[]>();
  for (const item of items) {
    if (!byGroup.has(item.group)) {
      byGroup.set(item.group, []);
      order.push(item.group);
    }
    byGroup.get(item.group)!.push(item);
  }
  return order.map((group) => ({ group, items: byGroup.get(group)! }));
}

export default function ReferenceGroups({ items }: { items: Reference[] }) {
  const groups = groupReferences(items);
  return (
    <>
      {groups.map((g) => (
        <div key={g.group} className="ref-group">
          <h3 className="ref-group-title reveal">{g.group}</h3>
          <div className="refs-grid">
            {g.items.map((it, i) => (
              <article key={it.title} className={`ref-card reveal d${(i % 3) + 1}`}>
                <div className="ref-client">{it.client}</div>
                <h3>{it.title}</h3>
                <p className="ref-note">{it.result}</p>
              </article>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
