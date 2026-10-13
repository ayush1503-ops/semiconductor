import { programFacts } from "../content/experience";
import { tracks } from "../content/site";

type Props = { track: (typeof tracks)[number]; onRequest: () => void };

export function ProgramOverview({ track, onRequest }: Props) {
  function downloadOverview() {
    const text = [
      `CHIPRION — ${track.name.toUpperCase()} LEARNING-TRACK OVERVIEW`,
      "Editorial overview based on the Chiprion project brief. Not an approved syllabus or brochure.",
      "",
      track.description,
      "",
      "TOPICS TO DISCUSS",
      ...track.topics.map((topic) => `- ${topic}`),
      "",
      "LEARNING DIRECTION",
      track.outcome,
      "",
      "WHO SHOULD ENQUIRE",
      "ECE, EEE, electronics, VLSI, and embedded systems students; working engineers; related-domain career switchers. Eligibility is confirmed per program.",
      "",
      "PROGRAM DETAILS TO CONFIRM",
      ...programFacts.map(([label, description]) => `${label}: ${description}`),
      "",
      "No placement guarantee. No booking or enrollment is created by downloading this overview.",
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `chiprion-${track.id}-overview.txt`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <div className="program-overview">
      <p className="cyber-label mb-3 text-[10px] text-[var(--accent-tertiary)]">
        Learning-track overview
      </p>
      <h4 className="text-lg font-semibold">Topics to explore</h4>
      <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
        Indicative topics, not a final module-wise curriculum.
      </p>
      <ol className="curriculum-list">
        {track.topics.map((topic, i) => (
          <li key={topic}>
            <span className="cyber-label text-[var(--accent)]">0{i + 1}</span>
            {topic}
          </li>
        ))}
      </ol>
      <h4 className="mt-6 font-semibold">Who should enquire</h4>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        ECE, EEE, electronics, VLSI, and embedded systems students, working
        engineers, and career switchers from related technical backgrounds.
        Confirm program-specific eligibility first.
      </p>
      <h4 className="mt-6 font-semibold">Learning direction</h4>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        {track.outcome} Relevant role requirements vary by employer; this is not
        a job or placement promise.
      </p>
      <dl className="program-facts">
        {programFacts.map(([label, description]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={onRequest}
          className="cyber-panel-sm cyber-button text-[10px]"
        >
          Request syllabus / brochure
        </button>
        <button
          onClick={downloadOverview}
          className="cyber-panel-sm cyber-button cyber-button-secondary text-[10px]"
        >
          Download track overview
        </button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
        The downloadable text is a track overview, not an approved course
        syllabus. Approved PDFs will be linked when supplied.
      </p>
    </div>
  );
}
