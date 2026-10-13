import { useState } from "react";
import { TerminalHeader } from "./components/TerminalHeader";
import { InquiryDialog } from "./components/InquiryDialog";
import { AudiencePaths } from "./components/AudiencePaths";
import { ProgramOverview } from "./components/ProgramOverview";
import { ResourceLibrary } from "./components/ResourceLibrary";
import { TrainingDetails } from "./components/TrainingDetails";
import { ToolsOverview, CareerGuidance } from "./components/ToolsAndCareers";
import { PreviewNotices } from "./components/PreviewNotices";
import { faqs, tracks } from "./content/site";
import type { InquiryType } from "./content/site";

const navItems = [
  ["About", "about"],
  ["Courses", "courses"],
  ["Why Chiprion", "why-chiprion"],
  ["For teams", "training"],
  ["FAQ", "faq"],
];
const values = [
  "Industry-oriented learning",
  "Hands-on projects",
  "Mentor guidance",
  "Career preparation",
];
const steps = [
  [
    "Choose your track",
    "Match your background and goals to a semiconductor learning path.",
  ],
  [
    "Learn the fundamentals",
    "Build a clear understanding of the concepts behind the tools.",
  ],
  [
    "Build projects",
    "Apply your learning through practical, application-oriented work.",
  ],
  [
    "Prepare for interviews",
    "Connect your technical understanding to career and interview preparation.",
  ],
];
const panel = "cyber-panel border border-[var(--border)] bg-[var(--card)] p-6";
const section = "mx-auto max-w-7xl px-5 py-24 sm:px-8";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("All tracks");
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [request, setRequest] = useState<{
    type: InquiryType;
    track?: string;
  } | null>(null);
  const filtered = tracks.filter(
    (track) =>
      (domain === "All tracks" || track.domain === domain) &&
      `${track.name} ${track.description} ${track.topics.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const inquire = (type: InquiryType, track?: string) => {
    setMenuOpen(false);
    setRequest({ type, track });
  };

  return (
    <div className="cyber-root antialiased">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8"
        >
          <a
            href="#"
            aria-label="Chiprion home"
            className="flex items-center gap-3"
          >
            <img
              src="/images/chiprion-logo.png"
              alt=""
              className="h-9 w-9 border border-[var(--border)] object-contain"
            />
            <span className="brand-name">Chiprion</span>
          </a>
          <ul className="hidden items-center gap-6 text-xs text-[var(--text-secondary)] lg:flex">
            {navItems.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="cyber-label hover:text-[var(--accent)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={() => inquire("Free demo")}
              className="cyber-panel-sm cyber-button text-[11px]"
            >
              <span className="hidden sm:inline">Book free demo</span>
              <span className="sm:hidden">Free demo</span>
            </button>
            <button
              className="cyber-menu-button lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="cyber-mobile-nav lg:hidden"
          >
            {navItems.map(([label, id]) => (
              <a
                key={id}
                aria-label={label}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="hero-circuits" aria-hidden="true">
            <svg viewBox="0 0 1000 650" preserveAspectRatio="xMidYMid slice">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0 110h260l90 90h170M0 500h230l90-90h200M1000 180H830l-70 70H650M1000 540H810l-90-90H650M550 0v130m55 520V500" />
                <rect x="480" y="230" width="180" height="180" />
                <rect x="510" y="260" width="120" height="120" />
                {Array.from({ length: 8 }, (_, i) => (
                  <path
                    key={i}
                    d={`M${490 + i * 22} 210v20M${490 + i * 22} 410v20M460 ${242 + i * 22}h20M660 ${242 + i * 22}h20`}
                  />
                ))}
              </g>
            </svg>
          </div>
          <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-8">
              <p className="cyber-label inline-flex border border-[var(--border)] bg-black/30 px-4 py-2 text-[11px] text-[var(--accent-tertiary)]">
                Precision training for chip engineers
              </p>
              <h1 className="cyber-heading hero-heading font-bold">
                Build industry-ready skills in{" "}
                <span className="text-[var(--accent)]">
                  VLSI & semiconductor design.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                Practical training in chip design, verification, physical
                design, and embedded systems—with hands-on projects and expert
                mentorship.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => inquire("Free demo")}
                  className="cyber-panel-sm cyber-button text-xs"
                >
                  Book free demo
                </button>
                <a
                  href="#courses"
                  className="cyber-panel-sm cyber-button cyber-button-secondary text-xs"
                >
                  Explore courses
                </a>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                For students, working engineers, and career switchers.
              </p>
            </div>
            <aside
              className={`${panel} hidden border-[var(--accent)]/40 shadow-[var(--box-shadow-neon)] lg:block`}
            >
              <TerminalHeader title="Your learning roadmap" />
              <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
                {[
                  "Build strong fundamentals",
                  "Explore chip-design workflows",
                  "Apply concepts through projects",
                  "Learn with mentor guidance",
                  "Prepare for your next career step",
                ].map((line) => (
                  <li key={line}>
                    <span className="text-[var(--accent)]" aria-hidden="true">
                      &gt;{" "}
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <p className="cyber-label mt-7 border-t border-[var(--border)] pt-5 text-[10px] text-[var(--accent-tertiary)]">
                Learn / Apply / Build
              </p>
            </aside>
          </div>
        </section>
        <section
          id="about"
          className="border-b border-[var(--border)] bg-[var(--card)] py-10"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="cyber-label mb-6 text-center text-[11px] text-[var(--text-secondary)]">
              Practical learning. Clear purpose.
            </p>
            <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-4">
              {values.map((value) => (
                <p key={value} className="trust-value">
                  {value}
                </p>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--text-secondary)]">
              Chiprion bridges the gap between academic learning and
              semiconductor industry requirements through practical training,
              projects, tool exposure, and mentorship.
            </p>
            <AudiencePaths />
          </div>
        </section>
        <section id="courses" className={section}>
          <div id="learning-tracks" />
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="cyber-label text-xs text-[var(--accent)]">
              Courses & learning tracks
            </p>
            <h2 className="cyber-heading text-4xl font-semibold sm:text-5xl">
              Find your path into semiconductor engineering.
            </h2>
            <p className="text-[var(--text-secondary)]">
              Explore the training areas in Chiprion’s project brief. These are
              learning-track overviews; final curricula, tools, duration, fees,
              and delivery modes are awaiting confirmation.
            </p>
          </div>
          <div className="course-filters">
            <label>
              Search learning tracks
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search RTL, UVM, embedded…"
              />
            </label>
            <label>
              Domain
              <select
                aria-label="Domain"
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
              >
                <option>All tracks</option>
                {tracks.map((track) => (
                  <option key={track.id}>{track.domain}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((track) => (
              <article key={track.id} className={`${panel} course-card`}>
                <div className="mb-5 flex justify-between">
                  <span className="cyber-label text-[10px] text-[var(--accent-tertiary)]">
                    {track.domain}
                  </span>
                  <span className="cyber-label text-[10px] text-[var(--text-secondary)]">
                    Track / 0{tracks.indexOf(track) + 1}
                  </span>
                </div>
                <h3 className="cyber-heading text-2xl font-semibold">
                  {track.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {track.description}
                </p>
                <p className="mt-4 text-xs text-[var(--text-secondary)]">
                  Schedule, level & mode: to be confirmed
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    className="cyber-panel-sm cyber-button text-[11px]"
                    aria-expanded={activeTrack === track.id}
                    aria-controls={`track-${track.id}`}
                    onClick={() =>
                      setActiveTrack(activeTrack === track.id ? null : track.id)
                    }
                  >
                    {activeTrack === track.id
                      ? "Hide overview"
                      : "View details"}
                  </button>
                  <button
                    className="cyber-panel-sm cyber-button cyber-button-secondary text-[11px]"
                    onClick={() => inquire("Course inquiry", track.name)}
                  >
                    Enquire now
                  </button>
                </div>
                <div
                  id={`track-${track.id}`}
                  hidden={activeTrack !== track.id}
                  className="track-detail"
                >
                  <ProgramOverview
                    track={track}
                    onRequest={() => inquire("Syllabus / brochure", track.name)}
                  />
                </div>
              </article>
            ))}
          </div>
          {!filtered.length && (
            <div className={`${panel} mt-4`} role="status">
              <p>No tracks match your search.</p>
              <button
                className="mt-4 text-[var(--accent)]"
                onClick={() => {
                  setQuery("");
                  setDomain("All tracks");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
        <section
          id="learning"
          className="border-y border-[var(--border)] bg-[var(--card)] py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="space-y-5">
              <p className="cyber-label text-xs text-[var(--accent-secondary)]">
                How it works
              </p>
              <h2 className="cyber-heading text-4xl font-semibold sm:text-5xl">
                From fundamentals to practical confidence.
              </h2>
              <p className="text-[var(--text-secondary)]">
                Build understanding first. Then apply it. Chiprion’s approach
                connects technical concepts, hands-on practice, and career
                preparation.
              </p>
            </div>
            <div className={`${panel} border-[var(--accent-tertiary)]/40`}>
              <TerminalHeader title="Learning sequence" />
              <ol className="space-y-6">
                {steps.map(([title, text], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="cyber-label text-sm text-[var(--accent)]">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section id="why-chiprion" className={section}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="cyber-label text-xs text-[var(--accent-tertiary)]">
                Why Chiprion
              </p>
              <h2 className="cyber-heading text-4xl font-semibold sm:text-5xl">
                Learn the concepts.
                <br />
                Build the skills.
              </h2>
            </div>
            <div className="space-y-5">
              {[
                [
                  "Industry-oriented curriculum",
                  "Connect your learning to the workflows used in semiconductor engineering.",
                ],
                [
                  "Hands-on projects & tool exposure",
                  "Practice applying concepts, rather than only memorizing theory.",
                ],
                [
                  "Mentor guidance",
                  "Build understanding with expert guidance and feedback.",
                ],
                [
                  "Career support",
                  "Prepare for technical discussions and interviews—without unrealistic placement promises.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border-b border-[var(--border)] pb-5"
                >
                  <h3 className="text-lg font-semibold">
                    <span className="text-[var(--accent)]" aria-hidden="true">
                      &gt;{" "}
                    </span>
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ToolsOverview />
        </section>
        <section id="mentors" className="bg-[var(--card)] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="cyber-label mb-4 text-xs text-[var(--accent)]">
              Mentorship & student outcomes
            </p>
            <h2 className="cyber-heading mb-10 max-w-3xl text-4xl font-semibold sm:text-5xl">
              Guidance that helps you move forward.
            </h2>
            <div className="space-y-6">
              <article className={panel}>
                <h3 className="cyber-heading text-2xl font-semibold">
                  Learn with expert mentorship
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
                  Mentor guidance is central to Chiprion’s training approach.
                  Named profiles, qualifications, experience, and industry
                  backgrounds will be published after the team supplies and
                  approves them.
                </p>
              </article>
              <article id="student-success" className={panel}>
                <h3 className="cyber-heading text-2xl font-semibold">
                  Real stories. Verified outcomes.
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
                  Student testimonials and career-transition stories will appear
                  here only with consent and approved details. We do not publish
                  invented learners, hiring partners, placement rates, or job
                  guarantees.
                </p>
              </article>
              <CareerGuidance onRequest={() => inquire("Counseling")} />
              <ResourceLibrary />
            </div>
          </div>
        </section>
        <section id="training" className={section}>
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="cyber-label text-xs text-[var(--accent)]">
              Training for every next step
            </p>
            <h2 className="cyber-heading text-4xl font-semibold sm:text-5xl">
              For learners, colleges, and engineering teams.
            </h2>
            <p className="text-[var(--text-secondary)]">
              Discuss your goals and training requirements. Program scope, fees,
              schedules, and delivery formats are confirmed with the Chiprion
              team.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Students & engineers",
                type: "Counseling" as const,
                desc: "Build a learning path around your background and career interests.",
                points: [
                  "Track-selection guidance",
                  "Practical learning & projects",
                  "Interview preparation",
                ],
                cta: "Talk to a counselor",
              },
              {
                title: "For colleges",
                type: "College training" as const,
                desc: "Connect academic learning with practical semiconductor skills.",
                points: [
                  "Student workshops",
                  "Faculty development",
                  "Project & curriculum support",
                ],
                cta: "Discuss college training",
              },
              {
                title: "Corporate training",
                type: "Corporate training" as const,
                desc: "Discuss a tailored training plan for your engineering team.",
                points: [
                  "Custom curriculum options",
                  "Domain-focused upskilling",
                  "Delivery format by agreement",
                ],
                cta: "Request a proposal",
              },
            ].map((item) => (
              <article key={item.title} className={`${panel} flex flex-col`}>
                <h3 className="cyber-heading text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.desc}
                </p>
                <ul className="my-6 space-y-3 text-sm">
                  {item.points.map((point) => (
                    <li key={point}>
                      <span aria-hidden="true" className="text-[var(--accent)]">
                        &gt;{" "}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  className="cyber-panel-sm cyber-button mt-auto w-full text-[11px]"
                  onClick={() => inquire(item.type)}
                >
                  {item.cta}
                </button>
              </article>
            ))}
          </div>
          <TrainingDetails onRequest={inquire} />
        </section>
        <section
          id="faq"
          className="border-y border-[var(--border)] bg-[var(--card)] py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="cyber-label text-xs text-[var(--accent-tertiary)]">
                FAQ
              </p>
              <h2 className="cyber-heading text-4xl font-semibold sm:text-5xl">
                Clear answers.
                <br />A confident next step.
              </h2>
              <p className="text-[var(--text-secondary)]">
                Understand the tracks, expectations, and what to confirm before
                you enroll.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={faq.question} className={`${panel} !p-0`}>
                  <h3>
                    <button
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
                      id={`faq-question-${i}`}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-answer-${i}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      {faq.question}
                      <span
                        className="text-xl text-[var(--accent)]"
                        aria-hidden="true"
                      >
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    hidden={openFaq !== i}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className={section}>
          <div
            className={`${panel} border-[var(--accent)]/40 bg-gradient-to-r from-[var(--accent)]/5 to-[var(--accent-tertiary)]/5 px-7 py-12 text-center`}
          >
            <p className="cyber-label mb-5 text-xs text-[var(--accent)]">
              Start with the right fundamentals
            </p>
            <h2 className="cyber-heading text-4xl font-semibold sm:text-5xl">
              Start your semiconductor career with practical training.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[var(--text-secondary)]">
              Explore a learning track, discuss your goals, and find out what to
              learn next.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => inquire("Free demo")}
                className="cyber-panel-sm cyber-button text-xs"
              >
                Book free demo
              </button>
              <button
                onClick={() => inquire("Course inquiry")}
                className="cyber-panel-sm cyber-button cyber-button-secondary text-xs"
              >
                Submit a course inquiry
              </button>
              <button
                onClick={() => inquire("Counseling")}
                className="cyber-panel-sm cyber-button text-xs"
              >
                Talk to a counselor
              </button>
              <button
                onClick={() => inquire("Syllabus / brochure")}
                className="cyber-panel-sm cyber-button cyber-button-secondary text-xs"
              >
                Request a brochure
              </button>
            </div>
            <div className="contact-channels">
              <div>
                <p className="cyber-label">Email & phone</p>
                <p>Verified contact details awaiting owner confirmation.</p>
              </div>
              <div>
                <p className="cyber-label">WhatsApp counseling</p>
                <p>
                  Business number required before click-to-chat can be enabled.
                </p>
              </div>
              <div>
                <p className="cyber-label">Office & social links</p>
                <p>
                  Location and official profiles will be added when supplied.
                </p>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-[var(--text-secondary)]">
              Preview: inquiry drafts only. Live demo scheduling, email,
              WhatsApp, and approved brochures will be enabled when Chiprion
              supplies its contact details and services.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-[var(--border)] bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row">
            <div>
              <a href="#" className="brand-name">
                Chiprion
              </a>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                Practical VLSI & semiconductor training
                <br />
                for future chip engineers.
              </p>
            </div>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-6 text-sm text-[var(--text-secondary)]"
            >
              {[
                ["About Chiprion", "about"],
                ["Courses", "courses"],
                ["Learning tracks", "learning-tracks"],
                ["Learning approach", "learning"],
                ["Mentorship", "mentors"],
                ["Student outcomes", "student-success"],
                ["Careers", "careers"],
                ["Resources", "resources"],
                ["For colleges", "college-programs"],
                ["Corporate training", "corporate-programs"],
                ["Contact", "contact"],
                ["Privacy notice", "privacy"],
                ["Terms notice", "terms"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  className="hover:text-[var(--accent)]"
                  href={`#${id}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <PreviewNotices />
          <div className="mt-8 border-t border-[var(--border)] pt-5 text-xs text-[var(--text-secondary)]">
            <p>
              © {new Date().getFullYear()} Chiprion. Precision training for chip
              engineers.
            </p>
            <p className="mt-3">
              This is a website preview. Contact details, legal policies, and
              live lead services are pending owner approval. No form data is
              sent or stored on a server.
            </p>
          </div>
        </div>
      </footer>
      <InquiryDialog request={request} onClose={() => setRequest(null)} />
    </div>
  );
}
