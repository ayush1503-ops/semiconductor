// Content comes from the Chiprion project context / PRD supplied by the owner.
// Do not add unapproved statistics, course schedules, tools, people, or contact links.
export const tracks = [
  {
    id: "vlsi-design",
    name: "VLSI Design",
    domain: "Design",
    description:
      "Explore digital logic and RTL design: how hardware behavior becomes a chip design.",
    topics: [
      "Digital design fundamentals",
      "RTL design concepts",
      "Chip-design workflows",
    ],
    outcome: "Develop a foundation for understanding digital chip design.",
  },
  {
    id: "verification",
    name: "Design Verification",
    domain: "Verification",
    description:
      "Learn how engineers check that a design behaves correctly before it reaches silicon.",
    topics: [
      "Verification fundamentals",
      "SystemVerilog concepts",
      "UVM methodology",
    ],
    outcome:
      "Understand verification workflows and the role of structured test environments.",
  },
  {
    id: "physical-design",
    name: "Physical Design",
    domain: "Physical Design",
    description:
      "Understand the journey from a logical design to a physical chip layout.",
    topics: [
      "Physical-design flow",
      "Placement and routing concepts",
      "Timing fundamentals",
    ],
    outcome:
      "Build an understanding of implementation and timing-driven design.",
  },
  {
    id: "dft",
    name: "Design for Test (DFT)",
    domain: "DFT",
    description:
      "Discover how chips are designed to make manufacturing faults easier to detect.",
    topics: [
      "Testability fundamentals",
      "Scan concepts",
      "Test-generation concepts",
    ],
    outcome: "Understand why testability matters in semiconductor development.",
  },
  {
    id: "embedded",
    name: "Embedded Systems",
    domain: "Embedded",
    description:
      "Explore the hardware–software connection behind purpose-built electronic systems.",
    topics: [
      "Embedded-system fundamentals",
      "Hardware–software interfaces",
      "Application-oriented projects",
    ],
    outcome:
      "Build a foundation for understanding embedded product development.",
  },
];
export const faqs = [
  {
    question: "Who is Chiprion training for?",
    answer:
      "Chiprion is focused on ECE, EEE, electronics, VLSI, and embedded systems students, working engineers, and career switchers from related technical fields. Colleges and semiconductor companies can also discuss training requirements.",
  },
  {
    question: "Which learning track should I choose?",
    answer:
      "Start with your background and goal. VLSI Design focuses on creating digital hardware, Verification on checking correctness, Physical Design on chip implementation, DFT on testability, and Embedded Systems on hardware–software integration. A counseling conversation can help you choose.",
  },
  {
    question: "What are the duration, fees, and learning modes?",
    answer:
      "Approved program-specific schedules, fees, prerequisites, and delivery modes have not yet been provided for this website. Confirm these details with Chiprion before enrolling. The learning-track overviews here are not final syllabi.",
  },
  {
    question: "Does Chiprion guarantee a job or placement?",
    answer:
      "No placement guarantee is made here. Chiprion’s approach includes practical skills, career guidance, and interview preparation. Hiring outcomes depend on individual preparation and employer requirements; only approved, consented success stories will be published.",
  },
  {
    question: "Can colleges or companies request tailored training?",
    answer:
      "Yes. The project brief includes college workshops, faculty development, student project support, and corporate training with custom curriculum options. Scope, delivery format, participant count, and timing should be agreed with the Chiprion team.",
  },
  {
    question: "Can I book a demo or download a syllabus now?",
    answer:
      "Demo scheduling, a live inquiry channel, and approved syllabus files are not configured in this preview. You can prepare and save an inquiry draft, but it is not sent to Chiprion and does not reserve a demo. You can download a clearly labeled learning-track overview from a course card now. Approved course-specific syllabus and brochure PDFs will be linked when supplied.",
  },
];
export const inquiryOptions = [
  "Free demo",
  "Course inquiry",
  "Syllabus / brochure",
  "Counseling",
  "College training",
  "Corporate training",
] as const;
export type InquiryType = (typeof inquiryOptions)[number];
