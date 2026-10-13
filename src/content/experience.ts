// Public-facing copy derived from the owner-supplied Chiprion brief.
// Example technologies and editorial guides are not approved course syllabi.
export const audiences = [
  {
    title: "Engineering students",
    badge: "Start strong",
    description:
      "For ECE, EEE, electronics, VLSI, and embedded systems students who want practical skills alongside academic learning.",
    focus: "Fundamentals, projects, mentorship, and career guidance.",
    cta: "Explore learning tracks",
    href: "#courses",
  },
  {
    title: "Working engineers",
    badge: "Build on experience",
    description:
      "For professionals in electronics, embedded, IT, or semiconductor-adjacent fields looking to deepen their skills.",
    focus: "Domain-focused upskilling and practical tool exposure.",
    cta: "Compare specializations",
    href: "#courses",
  },
  {
    title: "Career switchers",
    badge: "Find your next path",
    description:
      "For people from related technical backgrounds exploring a move into VLSI or semiconductor engineering.",
    focus: "Track selection, prerequisites, and a realistic learning plan.",
    cta: "Explore career guidance",
    href: "#career-guidance",
  },
];

export const technologies = [
  {
    name: "Verilog",
    category: "Hardware description",
    description:
      "A language used to describe digital hardware and RTL behavior.",
  },
  {
    name: "SystemVerilog",
    category: "Design & verification",
    description:
      "A language that extends hardware modeling with features used in verification.",
  },
  {
    name: "UVM",
    category: "Verification methodology",
    description:
      "A SystemVerilog-based methodology for building reusable verification environments.",
  },
  {
    name: "Linux",
    category: "Engineering environment",
    description:
      "A common environment for engineering commands, automation, and tool workflows.",
  },
  {
    name: "EDA workflows",
    category: "Chip-design tools",
    description:
      "Electronic design automation supports design, verification, implementation, and analysis.",
  },
];

export const resources = [
  {
    id: "career-roadmap",
    category: "Career roadmaps",
    title: "Choose a semiconductor learning path",
    summary:
      "Understand how design, verification, implementation, test, and embedded systems differ.",
    paragraphs: [
      "Enjoy creating digital logic? Explore VLSI Design. Prefer finding corner cases? Look at Verification. Interested in chip implementation and timing? Consider Physical Design. Curious about manufacturing test? Explore DFT. Want to connect software with electronics? Start with Embedded Systems.",
      "Review your fundamentals and compare prerequisites before choosing a specialization. Ask about project scope, tool access, feedback, and the expected weekly commitment. Choose a track based on the work you want to understand—not a guaranteed job title.",
    ],
  },
  {
    id: "rtl-basics",
    category: "Design fundamentals",
    title: "What does RTL design mean?",
    summary: "A plain-language introduction to register-transfer-level design.",
    paragraphs: [
      "RTL stands for register-transfer level. It describes how data moves between registers and how logic processes that data, often in relation to clock cycles. Engineers use hardware description languages such as Verilog or SystemVerilog to express this behavior.",
      "RTL describes hardware, not simply a sequence of software instructions. To build a foundation, review combinational and sequential logic, clocks, resets, and state machines. Confirm the course prerequisites and practical exercises before enrolling.",
    ],
  },
  {
    id: "verification-guide",
    category: "Verification",
    title: "SystemVerilog and UVM: what is the difference?",
    summary: "Separate the language from the verification methodology.",
    paragraphs: [
      "SystemVerilog is a language used for hardware modeling and verification. UVM, the Universal Verification Methodology, is a methodology and class library built using SystemVerilog to structure reusable verification environments.",
      "Verification aims to find differences between intended and actual behavior. It is useful to understand digital design and testbench basics before tackling an advanced methodology. Ask which topics are introductory and which require prior experience.",
    ],
  },
  {
    id: "fpga-asic",
    category: "Design fundamentals",
    title: "FPGA vs ASIC: two implementation paths",
    summary:
      "Understand programmable devices and application-specific silicon.",
    paragraphs: [
      "An FPGA is a field-programmable gate array: a device with configurable logic and interconnect that can be programmed after manufacture. An ASIC is an application-specific integrated circuit manufactured for a particular design.",
      "Both can involve digital logic and hardware description languages, but their implementation flows, constraints, and trade-offs differ. FPGA learning does not automatically cover the entire ASIC physical-design flow; compare a program’s actual scope with your goals.",
    ],
  },
  {
    id: "interview-prep",
    category: "Career preparation",
    title: "Prepare to explain your engineering projects",
    summary: "Turn project work into a clear technical discussion.",
    paragraphs: [
      "Practice explaining the problem, design choices, assumptions, tests, and results of your project. Be prepared to discuss a failure you investigated, the evidence you used, and the trade-offs you made.",
      "Keep your resume specific and truthful. Distinguish the work you completed from team contributions, document what you learned, and practice fundamentals relevant to the role. Career guidance and interview practice support preparation; they do not guarantee employment.",
    ],
  },
];

export const institutionalPrograms = [
  {
    id: "college-programs",
    title: "For colleges & institutions",
    label: "Academic partnerships",
    description:
      "Bring practical semiconductor learning into your academic environment.",
    offerings: [
      "Student workshops in VLSI and semiconductor topics",
      "Faculty development programs",
      "Student project guidance",
      "Curriculum and lab-support discussions",
    ],
    process: [
      "Share your institution’s goals and student background.",
      "Discuss workshop topics, participant count, format, and schedule.",
      "Agree on scope and a training proposal with Chiprion.",
    ],
    type: "College training" as const,
    cta: "Prepare a college inquiry",
  },
  {
    id: "corporate-programs",
    title: "For semiconductor & technology teams",
    label: "Corporate training",
    description:
      "Discuss a custom curriculum around your team’s domain and development needs.",
    offerings: [
      "VLSI design and verification training areas",
      "Physical design, DFT, and embedded systems topics",
      "Custom curriculum options for engineering teams",
      "Onsite, online, or hybrid format discussions",
    ],
    process: [
      "Describe your organization, team size, and training requirement.",
      "Discuss current skill levels, learning goals, and delivery preferences.",
      "Review a tailored scope and proposal before confirming training.",
    ],
    type: "Corporate training" as const,
    cta: "Prepare a training proposal request",
  },
];

export const programFacts = [
  [
    "Duration & schedule",
    "Program length, weekly commitment, and batch dates will be published after confirmation.",
  ],
  [
    "Learning mode",
    "Online, offline, and hybrid are possible discussion preferences—not confirmed availability for every track.",
  ],
  [
    "Level & prerequisites",
    "Ask which fundamentals are required and whether the program is beginner, intermediate, or advanced.",
  ],
  [
    "Hands-on projects",
    "Project work is part of the training approach. Course-specific briefs and deliverables are pending approval.",
  ],
  [
    "Tools & technologies",
    "Confirm exact tools, versions, access arrangements, and any licensing requirements for your course.",
  ],
  [
    "Certification",
    "Certification criteria and issuing details have not yet been supplied. Confirm these before enrolling.",
  ],
  [
    "Mentor details",
    "Approved mentor names, expertise, industry background, and experience will be added when supplied.",
  ],
  [
    "Fees & enrollment",
    "Pricing is not published. Request course-specific fees and the enrollment policy from Chiprion.",
  ],
] as const;
