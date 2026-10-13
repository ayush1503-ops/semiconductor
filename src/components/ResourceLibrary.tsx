import { useState } from "react";
import { resources } from "../content/experience";

export function ResourceLibrary() {
  const [category, setCategory] = useState("All topics");
  const [open, setOpen] = useState<string | null>(null);
  const categories = Array.from(
    new Set(resources.map((item) => item.category)),
  );
  const items = resources.filter(
    (item) => category === "All topics" || item.category === category,
  );
  return (
    <article
      id="resources"
      className="cyber-panel border border-[var(--border)] bg-[var(--card)] p-6"
    >
      <p className="cyber-label mb-3 text-[10px] text-[var(--accent-tertiary)]">
        Blog & resources
      </p>
      <div className="resource-heading">
        <div>
          <h3 className="cyber-heading text-2xl font-semibold">
            A clearer view of chip engineering
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            Short introductory guides across the resource topics in your brief.
            These are website draft guides, not published course material or
            approved industry reports.
          </p>
        </div>
        <label className="resource-filter">
          Browse topics
          <select
            aria-label="Resource category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              setOpen(null);
            }}
          >
            <option>All topics</option>
            {categories.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="resource-list">
        {items.map((item) => (
          <article key={item.id}>
            <p className="cyber-label text-[9px] text-[var(--accent)]">
              {item.category}
            </p>
            <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {item.summary}
            </p>
            <button
              aria-expanded={open === item.id}
              aria-controls={`resource-${item.id}`}
              onClick={() => setOpen(open === item.id ? null : item.id)}
              className="resource-read"
            >
              {open === item.id ? "Close guide" : "Read guide"}
              <span aria-hidden="true">{open === item.id ? "−" : "+"}</span>
            </button>
            <div
              id={`resource-${item.id}`}
              hidden={open !== item.id}
              className="resource-body"
            >
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-[var(--text-secondary)]">
        More resources planned: physical-design interview questions,
        semiconductor industry trends, and role-specific resume guides.
        Published author profiles, article dates, and approved content will be
        added when supplied.
      </p>
    </article>
  );
}
