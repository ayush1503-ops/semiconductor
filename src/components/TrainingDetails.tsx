import { institutionalPrograms } from "../content/experience";
import type { InquiryType } from "../content/site";

type Props = { onRequest: (type: InquiryType) => void };

export function TrainingDetails({ onRequest }: Props) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {institutionalPrograms.map((program) => (
        <article
          key={program.id}
          id={program.id}
          className="cyber-panel border border-[var(--border)] bg-[var(--card)] p-6"
        >
          <p className="cyber-label text-[10px] text-[var(--accent-tertiary)]">
            {program.label}
          </p>
          <h3 className="cyber-heading mt-4 text-2xl font-semibold">
            {program.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {program.description}
          </p>
          <h4 className="mt-6 font-semibold">Training options to discuss</h4>
          <ul className="mt-3 space-y-3 text-sm text-[var(--text-secondary)]">
            {program.offerings.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <h4 className="mt-6 font-semibold">How to start</h4>
          <ol className="curriculum-list">
            {program.process.map((step, i) => (
              <li key={step}>
                <span className="cyber-label text-[var(--accent)]">
                  0{i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <button
            onClick={() => onRequest(program.type)}
            className="cyber-panel-sm cyber-button mt-6 text-[11px]"
          >
            {program.cta}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-[var(--text-secondary)]">
            Scope, fees, and delivery are agreed per requirement. This preview
            prepares a local inquiry draft; it does not submit a proposal
            request.
          </p>
        </article>
      ))}
    </div>
  );
}
