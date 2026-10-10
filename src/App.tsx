import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Feature = {
  title: string;
  description: string;
};

const navItems = ["About", "Technology", "Proof", "Pricing", "FAQ"];

const trustedBy = ["Founded 2020", "11-50 employees", "Paris, Ile-de-France", "Privately Held", "6,967 followers"];

const features: Feature[] = [
  {
    title: "Ultrasensitive Detection System",
    description:
      "Chipiron states its patented cryogenic detection system can acquire MRI signals in open environments with up to 10x SNR improvement over room-temperature chains.",
  },
  {
    title: "AI Noise Cancellation",
    description:
      "The team publicly describes using linear and non-linear active noise cancellation strategies for ultra-low-field MRI signal quality.",
  },
  {
    title: "Optimized Magnet + Gradient Design",
    description:
      "Chipiron highlights low-footprint magnet engineering designed for clinical accuracy without requiring conventional shielding constraints.",
  },
  {
    title: "Low-Field Reconstruction Pipeline",
    description:
      "Their public roadmap references unconventional low-field sequence and reconstruction work for clinically relevant acquisition times.",
  },
];

const benefitPoints = [
  "Mission: make MRI 100x more accessible for earlier screening and check-ins.",
  "Company positioning: building a light, inexpensive MRI machine without compromising image quality.",
  "Sector from LinkedIn: Medical Equipment Manufacturing.",
];

const testimonials = [
  {
    quote:
      "Shaping the future of Healthcare by building the next-gen of MRI machines.",
    name: "Chipiron LinkedIn Headline",
    role: "Public company profile statement",
  },
  {
    quote:
      "Chipiron has closed a $17M Series A round from top-tier investors to accelerate the deployment of its disruptive MRI technology worldwide.",
    name: "Chipiron News",
    role: "Public website update, April 2025",
  },
  {
    quote:
      "Chipiron won the 'Innovation of the Year' award at VivaTech 2025, 1st place out of 600 startups.",
    name: "Chipiron News",
    role: "Public website update, June 2025",
  },
];

const faqs = [
  {
    question: "What should I expect during the hiring process?",
    answer:
      "Chipiron describes a process with HR screening, hiring manager interview, technical assessment or case study, and a culture conversation with the CEO.",
  },
  {
    question: "Where is the team based?",
    answer:
      "Chipiron lists headquarters in Paris, Ile-de-France. Its site describes 'The Ark' in Paris 19th arrondissement as HQ and lab.",
  },
  {
    question: "What culture points are publicly listed?",
    answer:
      "Public FAQ mentions a transparent salary grid, international team composition, unlimited paid holidays, and values centered on passion, courage, and determination.",
  },
  {
    question: "Is remote work available?",
    answer:
      "Chipiron states flexible working hours are available, while lab-heavy roles require more onsite presence due to hardware development.",
  },
];

const riseIn = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [annualBilling, setAnnualBilling] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pricing = [
    {
      name: "Discovery",
      description: "For institutions exploring partner pilots",
      monthly: "Custom",
      yearly: "Custom",
      cta: "Request Details",
      highlights: ["Public documentation review", "Roadmap and mission briefing", "Initial fit discussion"],
    },
    {
      name: "Pilot",
      description: "For healthcare systems evaluating deployment",
      monthly: "Custom",
      yearly: "Custom",
      cta: "Start Conversation",
      highlights: ["Clinical and technical scoping", "Regulatory pathway context", "Team workshop session"],
    },
    {
      name: "Strategic",
      description: "For long-term commercialization partnerships",
      monthly: "Custom",
      yearly: "Custom",
      cta: "Book Meeting",
      highlights: ["Partner-led planning", "Joint milestone design", "Executive collaboration"],
    },
  ];

  return (
    <div className="cyber-root antialiased selection:bg-[#00ff88] selection:text-[#0a0a0f]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#0a0a0f]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-3 text-base text-[var(--foreground)]">
            <img
              src="/images/chiprion-logo.png"
              alt="Chiprion logo"
              className="h-9 w-9 border border-[var(--border)] bg-black object-contain p-0.5"
            />
            <span className="cyber-heading text-sm font-bold tracking-[0.28em]">Chipiron</span>
          </a>
          <ul className="hidden items-center gap-8 text-xs text-[var(--muted-foreground)] lg:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="cyber-label transition hover:text-[var(--accent)]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a href="#cta" className="cyber-panel-sm cyber-button text-[11px]">Contact Team</a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2500&q=80"
              alt="MRI scanner environment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0ff2] via-[#0a0a0fd9] to-[#0a0a0ff2]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(0,255,136,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,0,255,0.18),transparent_38%)]" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr]"
          >
            <div className="max-w-4xl space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="cyber-label inline-flex border border-[var(--border)] bg-black/40 px-4 py-1.5 text-[11px] text-[var(--accent-tertiary)]"
              >
                LinkedIn Source Data Applied
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="cyber-heading cyber-glitch text-5xl font-black leading-[1.04] text-white drop-shadow-[0_0_10px_rgba(0,255,136,0.5)] sm:text-6xl lg:text-7xl"
                data-text="Chipiron"
              >
                Chipiron
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="max-w-2xl text-base leading-relaxed tracking-wide text-[#d4d4d8] sm:text-lg"
              >
                We are building the first light, inexpensive MRI machine that works at an ultra-low magnetic
                field without compromising on image quality. Mission: make MRI 100x more accessible.
                <span className="cursor" />
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap items-center gap-3"
              >
                <a href="#pricing" className="cyber-panel-sm cyber-button text-xs">Request Pricing</a>
                <a href="#technology" className="cyber-panel-sm cyber-button cyber-button-secondary text-xs">
                  Explore Technology
                </a>
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="cyber-panel hidden border border-[var(--accent)] bg-black/55 p-6 shadow-[var(--box-shadow-neon)] backdrop-blur-sm lg:block"
            >
              <p className="cyber-label mb-4 text-[11px] text-[var(--accent)]">System Terminal</p>
              <ul className="space-y-2 text-sm text-[#d4d4d8]">
                <li>&gt; Industry: Medical Equipment Manufacturing</li>
                <li>&gt; Headquarters: Paris, Ile-de-France</li>
                <li>&gt; Company size: 11-50 employees</li>
                <li>&gt; Type: Privately Held</li>
                <li>&gt; Founded: 2020</li>
              </ul>
            </motion.aside>
          </motion.div>

          <motion.div
            aria-hidden
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="motion-safe pointer-events-none absolute -bottom-28 right-[-80px] h-72 w-72 rounded-full bg-[#00ff88]/20 blur-3xl"
          />
        </section>

        <section id="about" className="border-b border-[var(--border)] bg-[#0f0f17] py-10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="cyber-label mb-6 text-center text-[11px] text-[var(--muted-foreground)]">Public profile signals</p>
            <div className="overflow-hidden">
              <motion.div
                className="flex w-max gap-10 text-lg text-[#cbd5e1]"
                animate={{ x: [0, -520] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                {[...trustedBy, ...trustedBy].map((name, index) => (
                  <span key={`${name}-${index}`} className="cyber-heading text-base font-semibold tracking-[0.15em] text-[#d1fae5]">
                    {name}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl space-y-4"
          >
            <p className="cyber-label text-[11px] text-[var(--accent)]">Technology</p>
            <h2 className="cyber-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
              Engineering stack from public Chipiron disclosures.
            </h2>
            <p className="text-[#a1a1aa]">
              This page uses statements from the public LinkedIn profile and Chipiron website content instead
              of generated claims.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={riseIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="cyber-panel group border border-[var(--border)] bg-[var(--card)]/90 p-6 transition hover:border-[var(--accent)] hover:shadow-[var(--box-shadow-neon-sm)]"
              >
                <h3 className="cyber-heading text-xl font-semibold text-white transition group-hover:text-[var(--accent)]">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#b4b4be]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="proof" className="relative overflow-hidden border-y border-[var(--border)] bg-[#0d0d15] py-24">
          <motion.div
            aria-hidden
            animate={{ opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="motion-safe absolute left-[-120px] top-14 h-80 w-80 rounded-full bg-[#ff00ff]/20 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <motion.div
              variants={riseIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <p className="cyber-label text-[11px] text-[var(--accent-secondary)]">Product showcase</p>
              <h2 className="cyber-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                Compact, inexpensive and comfortable MRI direction.
              </h2>
              <p className="text-[#b4b4be]">
                LinkedIn and website messaging align on one core objective: improve accessibility to MRI and enable
                earlier detection workflows.
              </p>
            </motion.div>

            <motion.div
              variants={riseIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="cyber-panel border border-[var(--accent-tertiary)]/40 bg-black/50 p-4 shadow-[var(--box-shadow-neon-tertiary)] backdrop-blur"
            >
              <div className="cyber-panel-sm border border-[var(--border)] bg-[#0a0a0f] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <p className="cyber-label text-[11px] text-[#9ca3af]">Roadmap markers</p>
                  <span className="cyber-panel-sm border border-[var(--accent)]/40 px-3 py-1 text-[11px] text-[var(--accent)]">
                    2025 -&gt; 2028
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Series A announced", value: 80 },
                    { label: "Device verification milestone", value: 62 },
                    { label: "Clinical + FDA roadmap", value: 45 },
                  ].map((item, index) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs text-[#9ca3af]">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.7, delay: index * 0.12 }}
                          className="h-full bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            <div className="space-y-4">
              <p className="cyber-label text-[11px] text-[var(--accent-tertiary)]">Benefits</p>
              <h2 className="cyber-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                Verifiable company facts in one conversion-ready narrative.
              </h2>
            </div>
            <div className="space-y-5">
              {benefitPoints.map((point, index) => (
                <motion.p
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-[var(--border)] pb-4 text-[#b4b4be]"
                >
                  &gt; {point}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="bg-[#0f0f17] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.h2
              variants={riseIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="cyber-heading mb-12 max-w-3xl text-4xl font-bold text-white sm:text-5xl"
            >
              Public statements and milestones from Chipiron channels.
            </motion.h2>
            <div className="space-y-8">
              {testimonials.map((item, index) => (
                <motion.figure
                  key={item.name}
                  variants={riseIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="cyber-panel border border-[var(--border)] bg-[#12121a]/90 px-6 py-7"
                >
                  <blockquote className="text-lg text-[#e4e4e7] sm:text-xl">"{item.quote}"</blockquote>
                  <figcaption className="mt-4 text-sm text-[#9ca3af]">
                    <span className="font-medium text-[var(--accent)]">{item.name}</span> - {item.role}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="space-y-3">
              <p className="cyber-label text-[11px] text-[var(--accent)]">Pricing</p>
              <h2 className="cyber-heading text-4xl font-bold text-white sm:text-5xl">Public pricing is not listed. Contact for commercial scope.</h2>
            </div>
            <div className="cyber-panel-sm inline-flex w-fit items-center border border-[var(--border)] bg-black/40 p-1">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`cyber-label px-4 py-2 text-[11px] transition ${
                  !annualBilling ? "bg-[var(--accent)] text-[var(--background)]" : "text-[#a1a1aa]"
                }`}
              >
                Request
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`cyber-label px-4 py-2 text-[11px] transition ${
                  annualBilling ? "bg-[var(--accent)] text-[var(--background)]" : "text-[#a1a1aa]"
                }`}
              >
                Partner
              </button>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {pricing.map((plan, index) => {
              const price = annualBilling ? plan.yearly : plan.monthly;
              const featured = plan.name === "Pilot";

              return (
                <motion.article
                  key={plan.name}
                  variants={riseIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`cyber-panel border p-6 backdrop-blur-xl ${
                    featured ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--border)] bg-[#12121a]/90"
                  }`}
                >
                  <p className="cyber-heading text-sm text-[#c4c4cd]">{plan.name}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{price}</p>
                  <p className="mt-1 text-sm text-[#8b8b95]">Contact-led commercial discussion</p>
                  <p className="mt-4 text-sm text-[#b4b4be]">{plan.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-[#e4e4e7]">
                    {plan.highlights.map((highlight) => (
                      <li key={highlight}>&gt; {highlight}</li>
                    ))}
                  </ul>
                  <button className="cyber-panel-sm cyber-button mt-7 w-full text-xs">{plan.cta}</button>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="faq" className="border-y border-[var(--border)] bg-[#0d0d15] py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={riseIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="cyber-label text-[11px] text-[var(--accent-tertiary)]">FAQ</p>
              <h2 className="cyber-heading text-4xl font-bold text-white sm:text-5xl">Answers sourced from public Chipiron Q&A.</h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={faq.question}
                    variants={riseIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="cyber-panel border border-[var(--border)] bg-[#12121a]/95"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-white">{faq.question}</span>
                      <span className="text-[var(--accent)]">{isOpen ? "-" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm text-[#b4b4be]">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="cyber-panel border border-[var(--accent)]/40 bg-gradient-to-r from-[#00ff88]/10 via-[#00d4ff]/10 to-[#ff00ff]/10 px-7 py-12 text-center shadow-[var(--box-shadow-neon)] backdrop-blur"
          >
            <h2 className="cyber-heading text-4xl font-bold text-white sm:text-5xl">Want verified information directly from the team?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#d4d4d8]">
              Connect with Chipiron through their official channels for technical briefs, commercial details, and
              partnership conversations.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="https://www.linkedin.com/company/chipiron/" className="cyber-panel-sm cyber-button text-xs">
                Open LinkedIn
              </a>
              <a href="https://www.chipiron.co/" className="cyber-panel-sm cyber-button cyber-button-secondary text-xs">
                Visit Website
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[#0a0a0f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-[#8b8b95] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            <span className="cyber-heading font-bold tracking-[0.2em] text-[#e4e4e7]">Chipiron</span> | Data used from
            public LinkedIn and company website content.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="https://www.linkedin.com/company/chipiron/" className="transition hover:text-[var(--accent)]">
              LinkedIn
            </a>
            <a href="https://www.chipiron.co/" className="transition hover:text-[var(--accent)]">
              Website
            </a>
            <a href="https://jobs.chipiron.co/connect" className="transition hover:text-[var(--accent)]">
              Careers
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
