import { technologies } from "../content/experience";

export function ToolsOverview() {
  return (
    <div id="tools" className="mt-12 border-t border-[var(--border)] pt-10">
      <div className="max-w-3xl">
        <p className="cyber-label mb-3 text-[10px] text-[var(--accent-tertiary)]">
          Tools & technologies
        </p>
        <h3 className="cyber-heading text-3xl font-semibold">
          Understand the engineering vocabulary.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          Technologies named in the PRD’s example program. This introduction is
          not a promise of a particular tool license or course-specific
          coverage; confirm the tools and access for your chosen program.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((item) => (
          <article
            key={item.name}
            className="cyber-panel border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <p className="cyber-label text-[9px] text-[var(--accent)]">
              {item.category}
            </p>
            <h4 className="mt-3 text-lg font-semibold">{item.name}</h4>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function CareerGuidance({ onRequest }: { onRequest: () => void }) {
  return (
    <article
      id="career-guidance"
      className="cyber-panel border border-[var(--border)] bg-[var(--card)] p-6"
    >
      <p className="cyber-label text-[10px] text-[var(--accent-tertiary)]">
        Semiconductor careers
      </p>
      <h3 className="cyber-heading mt-3 text-2xl font-semibold">
        Prepare for the work, not just the title.
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
        Explore how your interests align with design, verification, physical
        implementation, test, and embedded systems. Career guidance and
        interview preparation help connect your learning to relevant roles.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          [
            "Know your foundations",
            "Review the concepts needed for your track and the expectations of the roles you research.",
          ],
          [
            "Explain your projects",
            "Practice describing design choices, testing, debugging, and what you personally contributed.",
          ],
          [
            "Plan your next step",
            "Compare skill requirements, identify gaps, and discuss a realistic preparation plan.",
          ],
        ].map(([title, text]) => (
          <div key={title} className="border-t border-[var(--border)] pt-4">
            <h4 className="font-semibold">{title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {text}
            </p>
          </div>
        ))}
      </div>
      <button
        className="cyber-panel-sm cyber-button mt-6 text-[11px]"
        onClick={onRequest}
      >
        Discuss career goals
      </button>
      <p className="mt-4 text-xs text-[var(--text-secondary)]">
        No job or placement guarantee. Hiring decisions and outcomes depend on
        individual preparation and employer requirements.
      </p>
      <div id="careers" className="mt-6 border-t border-[var(--border)] pt-5">
        <h4 className="font-semibold">Careers at Chiprion</h4>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          Approved vacancies and a recruitment contact have not been supplied.
          Open roles will be published here when confirmed; no current openings
          are advertised in this preview.
        </p>
      </div>
    </article>
  );
}
