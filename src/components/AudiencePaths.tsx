import { audiences } from "../content/experience";

export function AudiencePaths() {
  return (
    <div className="mt-10 border-t border-[var(--border)] pt-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="cyber-label mb-3 text-[10px] text-[var(--accent)]">
            About Chiprion
          </p>
          <h2 className="cyber-heading text-3xl font-semibold">
            Practical training.
            <br />
            Future-focused engineers.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Our focus is the gap between academic understanding and the
            practical skills used in semiconductor engineering. Chiprion brings
            together technical learning, application-oriented projects, and
            expert guidance.
          </p>
          <p>
            Our direction is clear: help students and engineers build
            industry-ready chip-design skills through practical learning—not
            generic promises or shortcuts.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="cyber-panel border border-[var(--border)] bg-[var(--background)] p-5"
          >
            <p className="cyber-label text-[9px] text-[var(--accent-tertiary)]">
              {audience.badge}
            </p>
            <h3 className="cyber-heading mt-4 text-xl font-semibold">
              {audience.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {audience.description}
            </p>
            <p className="mt-3 text-xs leading-relaxed">{audience.focus}</p>
            <a className="audience-link" href={audience.href}>
              {audience.cta}
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-[var(--text-secondary)]">
        Representing a college or company?{" "}
        <a
          className="text-[var(--accent)] underline underline-offset-4"
          href="#training"
        >
          Explore institutional training.
        </a>
      </p>
    </div>
  );
}
