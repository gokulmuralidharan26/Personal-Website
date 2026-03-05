export const siteConfig = {
  name: "Gokul Muralidharan",
  title: "TPM · PM · Builder",
  email: "gokulmuralidharan26@gmail.com",
  phone: "(904) 207-4016",
  linkedin: "https://www.linkedin.com/in/gokul-muralidharan/",
  github: "https://github.com/gokulmuralidharan26",
  youtube: "https://www.youtube.com/channel/UCy4OciNrv_mebF5odvMyZww",
  resume: "/resume.pdf",
  calendly: "mailto:gokulmuralidharan26@gmail.com?subject=Let's%20Connect",
};

export const heroContent = {
  headline: "I build product + data experiences that",
  headlineAccent: "ship.",
  subheadline:
    "CS @ UF · AI Certificate · 3.71 GPA. I sit at the intersection of product thinking, data systems, and creative distribution. I've automated reports, built dashboards, shipped web apps, and grown audiences — then told the story.",
  cta1: { label: "View Proof", href: "#metrics" },
  cta2: { label: "See Case Studies", href: "#projects" },
  trustedBy: ["GE Vernova", "FIS", "Florida Blue Key", "University of Florida"],
  dashboardCycles: [
    { label: "Manual formatting time", value: "↓ 80%", context: "GE Vernova AMP Report" },
    { label: "Reporting accuracy", value: "↑ 30%", context: "CC Tracker redesign" },
    { label: "Excel files eliminated", value: "600+/yr", context: "Executive summary upload" },
    { label: "Power BI dashboards", value: "10", context: "FIS banking KPIs" },
    { label: "YouTube views", value: "200K+", context: "UF Student Government" },
    { label: "AI chatbot inquiry reduction", value: "↓ 70%", context: "Florida Blue Key RAG" },
  ],
};

export const marqueeItems = [
  "↓ 80% reporting time",
  "↑ 30% accuracy",
  "600+ files automated",
  "10 dashboards shipped",
  "200K+ views",
  "5K followers grown",
  "↓ 70% inquiry volume",
  "176 students analyzed",
  "6,500+ org members served",
  "40% voter turnout increase",
  "50+ SQL queries written",
  "170+ bank report templates",
];

export const metrics = [
  {
    value: "80",
    suffix: "%",
    prefix: "↓",
    label: "Reduction in manual formatting time",
    how: "Delivered an Excel-based AMP report at GE Vernova that eliminated manual data entry across leadership teams.",
    color: "accent",
  },
  {
    value: "30",
    suffix: "%",
    prefix: "↑",
    label: "Reporting accuracy improvement",
    how: "Redesigned the CC Tracker, validated 10 cost drivers with Finance + Modeling stakeholders.",
    color: "success",
  },
  {
    value: "600",
    suffix: "+",
    prefix: "",
    label: "Excel files replaced per year",
    how: "Centralized executive summary upload process; replaced manual file handling with scalable infrastructure.",
    color: "accent-2",
  },
  {
    value: "10",
    suffix: "",
    prefix: "",
    label: "Power BI dashboards built",
    how: "Visualized financial KPIs for FIS leadership; applied data science techniques to real banking data.",
    color: "accent-3",
  },
  {
    value: "200",
    suffix: "K+",
    prefix: "",
    label: "YouTube views generated",
    how: "Filmed 250+ videos for UF Student Government; distribution strategy that grew 5K followers.",
    color: "warning",
  },
  {
    value: "70",
    suffix: "%",
    prefix: "↓",
    label: "AI chatbot inquiry reduction",
    how: "Built GPT-4 + LangChain + Supabase RAG chatbot for Florida Blue Key's 6,500+ member org.",
    color: "success",
  },
];

export const scrollNarrative = {
  steps: [
    {
      id: "problem",
      tag: "01 / Identify",
      headline: "The problem is always the same.",
      body: "Data is scattered. Reports are manual. Insights arrive late — after the meeting, not before. Every team I've joined has had the same friction: the system wasn't built for speed or clarity.",
      visual: "problem",
    },
    {
      id: "build",
      tag: "02 / Build",
      headline: "Build the system that shouldn't need to exist.",
      body: "I scope the automation. Write the SQL. Design the dashboard. Align Finance, Eng, and Ops on the same source of truth. Ship it in a sprint. Then iterate on feedback.",
      visual: "build",
    },
    {
      id: "ship",
      tag: "03 / Ship",
      headline: "Outcomes speak. Metrics don't lie.",
      body: "80% less time on formatting. 30% accuracy boost. 600+ files gone. 10 dashboards live. Every project ends with a number because I start with one.",
      visual: "ship",
    },
  ],
};

export const experience = [
  {
    id: "ge-vernova",
    company: "General Electric Vernova",
    role: "Technical Product Management Intern",
    period: "May 2025 – Aug 2025",
    location: "Schenectady, NY",
    type: "internship",
    context:
      "Joined the grid software division to own product delivery for internal reporting tools used by Finance, Modeling, and senior leadership.",
    actions: [
      "Orchestrated SAFe Agile backlog grooming, product roadmapping, and sprint planning for 15+ user stories in Rally",
      "Partnered with Finance, Modeling, and Development stakeholders to identify and validate 10 key cost drivers",
      "Designed centralized executive summary upload process replacing 600+ manually handled Excel files annually",
      "Served as Social Chair Ambassador for 70+ member intern cohort, organizing 10+ professional development events",
    ],
    outcomes: [
      "↓ 80% manual formatting time on AMP report",
      "↑ 30% reporting accuracy via CC Tracker redesign",
      "600+ Excel files/year replaced with scalable infrastructure",
    ],
    stakeholders: ["Finance", "Modeling", "Exec Leadership", "Development"],
    tools: ["Rally", "SAFe Agile", "Excel", "Power BI", "Confluence"],
    color: "accent",
  },
  {
    id: "fis",
    company: "Fidelity National Information Services (FIS)",
    role: "Project Management Analyst Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Jacksonville, FL",
    type: "internship",
    context:
      "Embedded with the Integrated Banking System team to build reporting infrastructure and automate BIC report generation for 30+ client banks.",
    actions: [
      "Built 10 interactive Power BI dashboards visualizing financial KPIs for leadership",
      "Created 170+ bank report templates and wrote 50+ SQL queries using SAP Business Intelligence",
      "Coordinated cross-functional efforts to reconcile inventory for 30+ banks",
    ],
    outcomes: [
      "↓ 20% report generation time via SQL automation",
      "10 dashboards live serving leadership insights",
      "170+ report templates standardized",
    ],
    stakeholders: ["Banking Clients", "Data Engineering", "Leadership", "Operations"],
    tools: ["Power BI", "SQL", "SAP BI", "Microsoft Office", "Jira"],
    color: "accent-3",
  },
  {
    id: "crg",
    company: "Computational Reasoning Group · UF",
    role: "Computer Science Researcher",
    period: "Jan 2023 – Present",
    location: "Gainesville, FL",
    type: "research",
    context:
      "Independent research analyzing student engagement patterns and the impact of PPE variables on quiz completion rates across 176 students.",
    actions: [
      "Spearheaded statistical analysis using Jupyter Notebook, JASP, and Excel",
      "Identified that females without PPE had 25% higher quiz completion rates",
      "Confirmed bimodal trend: 64% of students completed all quizzes or none",
      "Presented findings with actionable recommendations to improve participation",
    ],
    outcomes: [
      "Research findings guiding new engagement strategy",
      "25% completion rate delta identified by PPE variable",
      "64% bimodal pattern confirmed across 176 students",
    ],
    stakeholders: ["Research Faculty", "Education Technology Team"],
    tools: ["Python", "Jupyter Notebook", "JASP", "Excel", "Statistical Analysis"],
    color: "accent-2",
  },
];

export const leadership = [
  {
    id: "fbk",
    org: "Florida Blue Key",
    role: "Director of Technology",
    period: "Apr 2024 – Present",
    members: "6,500+",
    highlights: [
      "Rebuilt FBK website front-end on Squarespace for 6,500+ members",
      "Designed member application, account creation, and payment processing features",
      "Administered 100+ Google Workspace accounts and custom domains",
    ],
  },
  {
    id: "isa",
    org: "UF Indian Students Association",
    role: "Secretary",
    period: "Aug 2022 – Present",
    highlights: [
      "↑ 50% student interaction via multimedia creative direction",
      "Oversaw 100+ digital content pieces across social platforms",
      "Managed scheduling for 50+ events and room bookings",
    ],
  },
  {
    id: "sg-exec",
    org: "UF Student Government – Executive Branch",
    role: "Executive Technology Secretary",
    period: "Aug 2023 – May 2024",
    highlights: [
      "Presented AI Tools & Workflows to 400 first-year students at FYLC",
      "Led full website management for 60,000+ UF students, faculty, and staff",
      "Improved design usability, accessibility, and mobile responsiveness",
    ],
  },
  {
    id: "sg-photo",
    org: "UF Student Government – Senate Campaign",
    role: "Director of Photography & Videography",
    period: "Aug 2022 – Present",
    highlights: [
      "Filmed 250+ SG videos growing social media by 5K followers",
      "Surpassed 200K total views across platforms",
      "↑ 40% voter turnout through content strategy",
    ],
  },
];

export const projects = [
  {
    id: "anybet",
    slug: "anybet",
    name: "AnyBet",
    tagline: "Social Betting Web App",
    date: "November 2025",
    status: "Shipped",
    problem:
      "Existing sports betting apps are transactional and isolated. There was no social layer — no way to bet with friends, track outcomes, or build a betting reputation.",
    approach:
      "Built a peer-to-peer betting platform with real-time updates using Next.js + Firebase. Designed the full UI in Figma, applied Agile sprints for rapid iteration, and implemented core flows: bet creation, live feed, wallet dashboard, and profile pages.",
    impact: [
      "Full-stack app shipped in under 4 weeks",
      "Real-time bet updates via Firebase listeners",
      "Secure authentication + REST API architecture",
      "Responsive Figma-designed UI",
    ],
    techStack: ["Next.js", "TypeScript", "Firebase", "REST APIs", "Figma", "Agile"],
    github: "https://github.com/gokulmuralidharan26",
    demo: "#",
    color: "accent",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: "fbk-chatbot",
    slug: "fbk-chatbot",
    name: "AI Chatbot",
    tagline: "Florida Blue Key · RAG + GPT-4",
    date: "August 2025",
    status: "Deployed",
    problem:
      "Florida Blue Key's leadership team spent hours answering the same FAQ questions from 6,500+ members. No scalable system existed to surface internal documents, forms, or schedules on demand.",
    approach:
      "Integrated OpenAI's GPT-4 API with a Retrieval-Augmented Generation (RAG) backend using LangChain and Supabase. Built a branded chat interface embedded on FBK's website. Enabled ongoing knowledge base updates and member feedback logging.",
    impact: [
      "↓ 70% manual inquiry volume",
      "Deployed on live FBK website for 6,500+ members",
      "Continuous knowledge base improvement loop",
      "Member feedback logging for iteration",
    ],
    techStack: ["GPT-4 API", "LangChain", "Supabase", "RAG", "Next.js", "TypeScript"],
    github: "https://github.com/gokulmuralidharan26",
    demo: "#",
    color: "accent-3",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

export const growthPlaybook = [
  {
    id: "experiment",
    icon: "FlaskConical",
    title: "Experiment Design",
    description:
      "Structure hypotheses around measurable outcomes. Define success criteria before writing a single line of code or deploying a campaign.",
    applied:
      "At GE Vernova, validated 10 cost driver hypotheses with Finance before any template redesign — prevented 3 rework cycles.",
  },
  {
    id: "funnel",
    icon: "TrendingDown",
    title: "Funnel Thinking",
    description:
      "Every system has a funnel. Find the drop-off. Instrument it. Fix the leak before adding more volume at the top.",
    applied:
      "At FIS, the reporting funnel had a bottleneck at template generation. SQL automation cut that stage by 20%, unblocking the entire pipeline.",
  },
  {
    id: "analytics",
    icon: "BarChart3",
    title: "Analytics Instrumentation",
    description:
      "You can't optimize what you can't measure. Build dashboards that surface the right signal — not everything, just what moves the needle.",
    applied:
      "Built 10 Power BI dashboards at FIS. Each surfaced exactly 3–5 KPIs leadership needed — no vanity metrics.",
  },
  {
    id: "positioning",
    icon: "Megaphone",
    title: "Positioning & Messaging",
    description:
      "The product story matters as much as the product. Every stakeholder presentation is a positioning exercise.",
    applied:
      "Presented AI tools to 400 first-year students at FYLC. Framed AI as augmentation, not replacement. Zero negative feedback.",
  },
  {
    id: "distribution",
    icon: "Share2",
    title: "Content Distribution",
    description:
      "Great work that nobody sees is just a draft. Distribution is a skill. Build the audience, then use it.",
    applied:
      "Produced 250+ videos, grew 5K followers, hit 200K+ views. Used content to increase voter turnout 40% — distribution as product lever.",
  },
  {
    id: "feedback",
    icon: "RefreshCw",
    title: "Feedback Loops",
    description:
      "Ship, measure, listen, iterate. The fastest teams close the loop faster than anyone else. Bake feedback collection into the product from day one.",
    applied:
      "FBK AI Chatbot has member feedback logging built into every response — continuous improvement without manual audits.",
  },
];

export const skills = [
  {
    cluster: "Languages & Frameworks",
    descriptor: "shipping-ready",
    color: "accent",
    items: [
      { name: "Python", level: "daily driver" },
      { name: "JavaScript / TS", level: "daily driver" },
      { name: "SQL", level: "daily driver" },
      { name: "React / Next.js", level: "shipping-ready" },
      { name: "C++", level: "proficient" },
      { name: "Java", level: "proficient" },
      { name: "HTML/CSS", level: "daily driver" },
    ],
  },
  {
    cluster: "Data & BI",
    descriptor: "built real things",
    color: "accent-3",
    items: [
      { name: "Power BI", level: "shipped 10 dashboards" },
      { name: "Tableau", level: "proficient" },
      { name: "SAP BI", level: "shipped" },
      { name: "Jupyter Notebook", level: "research" },
      { name: "JASP", level: "statistical analysis" },
      { name: "Excel / Sheets", level: "advanced" },
    ],
  },
  {
    cluster: "Product & Delivery",
    descriptor: "led in production",
    color: "accent-2",
    items: [
      { name: "SAFe Agile", level: "certified practice" },
      { name: "Jira / Confluence", level: "daily driver" },
      { name: "Rally", level: "used at GE Vernova" },
      { name: "Figma", level: "UI design" },
      { name: "Trello / Slack", level: "daily driver" },
      { name: "Postman", level: "API testing" },
    ],
  },
  {
    cluster: "Cloud & Infrastructure",
    descriptor: "deployed in prod",
    color: "success",
    items: [
      { name: "Firebase", level: "shipped AnyBet" },
      { name: "Supabase", level: "RAG backend" },
      { name: "AWS", level: "familiar" },
      { name: "Azure", level: "familiar" },
      { name: "Google Cloud", level: "workspace admin" },
      { name: "GitHub", level: "daily driver" },
    ],
  },
];

export const videos = [
  {
    id: "featured",
    title: "UF Student Government – Content Reel",
    description: "250+ videos. 200K+ views. 5K followers. This is the distribution engine.",
    youtubeId: "UCy4OciNrv_mebF5odvMyZww",
    channelUrl: "https://www.youtube.com/channel/UCy4OciNrv_mebF5odvMyZww",
    thumbnail: "https://img.youtube.com/vi/default/maxresdefault.jpg",
    type: "featured",
  },
];

export const creativeWork = [
  {
    id: "1",
    title: "FBK Website Redesign",
    role: "Front-End Designer",
    tools: ["Squarespace", "CSS", "UX Design"],
    category: "web",
    description: "Redesigned the Florida Blue Key website to serve 6,500+ members with improved navigation and mobile responsiveness.",
    link: "#",
  },
  {
    id: "2",
    title: "UF SG Campaign Visual Identity",
    role: "Director of Photography",
    tools: ["Adobe Premiere", "Canva", "Photography"],
    category: "video",
    description: "Visual identity and video campaign that grew social media by 5K followers and hit 200K+ views.",
    link: "https://www.youtube.com/channel/UCy4OciNrv_mebF5odvMyZww",
  },
  {
    id: "3",
    title: "AnyBet UI/UX Design",
    role: "Product Designer",
    tools: ["Figma", "Prototyping", "User Testing"],
    category: "design",
    description: "Full UI/UX design for AnyBet's peer-to-peer betting platform including user flows, component library, and responsive screens.",
    link: "#",
  },
  {
    id: "4",
    title: "ISA Social Media Content",
    role: "Creative Director",
    tools: ["Canva", "Figma", "Photography"],
    category: "design",
    description: "100+ digital content pieces for ISA events. Increased student interaction by 50% through consistent visual identity.",
    link: "#",
  },
  {
    id: "5",
    title: "AI Tools Presentation Deck",
    role: "Content Creator",
    tools: ["Figma", "Google Slides", "Canva"],
    category: "design",
    description: "Deck presented to 400 first-year students at UF FYLC on AI tools, workflows, and technical acumen.",
    link: "#",
  },
  {
    id: "6",
    title: "GE Vernova AMP Report System",
    role: "TPM · Product Designer",
    tools: ["Excel", "Power BI", "Figma"],
    category: "product",
    description: "Designed the reporting template and upload workflow that cut manual formatting time by 80% for GE Vernova leadership.",
    link: "#",
  },
];

export const education = {
  school: "University of Florida",
  degree: "B.S. Computer Science",
  certificate: "Certificate in AI Fundamentals",
  gpa: "3.71 / 4.0",
  expected: "May 2026",
  honors: [
    "President's List",
    "Florida Bright Futures Award",
    "Florida Gold Seal of Biliteracy",
    "International Baccalaureate",
    "AP Scholar",
  ],
  coursework: [
    "Business Analytics & AI",
    "Software Engineering",
    "Data Structures & Algorithms",
    "Discrete Structures",
    "UX Design",
  ],
};

export const caseStudies: Record<string, {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  goals: string[];
  constraints: string[];
  architecture: { title: string; description: string }[];
  decisions: { decision: string; rationale: string }[];
  results: string[];
  nextSteps: string[];
  techStack: string[];
  gradient: string;
}> = {
  anybet: {
    slug: "anybet",
    name: "AnyBet",
    tagline: "A social peer-to-peer betting web app built with Next.js and Firebase.",
    overview:
      "AnyBet is a full-stack web application that lets friends create, join, and track custom bets with real-time updates. The goal was to build a social layer on top of the betting experience — transforming it from a solo transactional activity into a group social one.",
    goals: [
      "Enable users to create and share custom bets with friends",
      "Real-time bet status updates without page refresh",
      "Secure user authentication and wallet management",
      "Fast, responsive UI deployable without backend overhead",
    ],
    constraints: [
      "Solo build in ~4 weeks",
      "No dedicated backend — needed serverless architecture",
      "Budget of $0 for infrastructure",
      "Must be mobile-responsive from day one",
    ],
    architecture: [
      { title: "Frontend", description: "Next.js 14 App Router with TypeScript. Component-based architecture with reusable UI primitives." },
      { title: "Auth", description: "Firebase Authentication for Google SSO and email/password. JWT tokens stored in secure HTTP-only cookies." },
      { title: "Database", description: "Firebase Firestore for real-time bet data. Structured collections for users, bets, and transactions." },
      { title: "API Layer", description: "Next.js API routes for server-side logic, validation, and Firestore writes." },
      { title: "UI/UX", description: "Designed in Figma first. Built with Tailwind CSS for consistency and speed." },
    ],
    decisions: [
      {
        decision: "Firebase over a traditional database",
        rationale: "Real-time listeners are the core value prop. Firebase Firestore + Auth gave me real-time + auth in one SDK — shipped 2x faster.",
      },
      {
        decision: "Next.js App Router over Pages Router",
        rationale: "Server Components reduced JS bundle size. Layouts simplified navigation state. Future-proof architecture.",
      },
      {
        decision: "Design in Figma before building",
        rationale: "Prevented 3+ rework cycles. Component inventory from Figma mapped directly to React components.",
      },
    ],
    results: [
      "Full-stack app shipped in under 4 weeks (solo)",
      "Real-time bet updates with zero polling overhead",
      "Secure multi-flow authentication",
      "Responsive on all screen sizes from Figma spec",
    ],
    nextSteps: [
      "Add push notifications for bet outcomes",
      "Social feed with comments and reactions",
      "Leaderboard and betting reputation scores",
      "Native mobile app (React Native)",
    ],
    techStack: ["Next.js", "TypeScript", "Firebase", "Firestore", "REST APIs", "Tailwind CSS", "Figma"],
    gradient: "from-indigo-600 to-purple-600",
  },
  "fbk-chatbot": {
    slug: "fbk-chatbot",
    name: "AI Chatbot – Florida Blue Key",
    tagline: "A GPT-4 RAG chatbot deployed for a 6,500+ member leadership organization.",
    overview:
      "Florida Blue Key's leadership team was drowning in repetitive FAQ messages from 6,500+ members. I built and deployed a custom AI chatbot that retrieves from internal documents and answers questions automatically — reducing manual inquiry volume by 70%.",
    goals: [
      "Automate 70%+ of FAQ responses for FBK leadership",
      "Surface internal documents, forms, and schedules on demand",
      "Brand-consistent chat interface embedded on FBK website",
      "Enable ongoing knowledge base updates without engineering help",
    ],
    constraints: [
      "Must integrate with existing FBK website (no full rebuild)",
      "Knowledge base is private — no public index allowed",
      "Non-technical admins must be able to update the knowledge base",
      "OpenAI API costs must stay minimal",
    ],
    architecture: [
      { title: "LLM", description: "OpenAI GPT-4 API for response generation. System prompt tuned for FBK's tone and scope." },
      { title: "RAG Pipeline", description: "LangChain for document chunking, embedding, and retrieval. Retrieves relevant context before every GPT-4 call." },
      { title: "Vector Store", description: "Supabase pgvector for embedding storage and similarity search. Hosted on Supabase free tier." },
      { title: "Frontend", description: "Branded chat widget built in Next.js. Embedded on FBK website via iframe / script injection." },
      { title: "Feedback Loop", description: "Every conversation logged to Supabase. Admins can review and improve the knowledge base." },
    ],
    decisions: [
      {
        decision: "RAG over fine-tuning",
        rationale: "FBK's knowledge base changes every semester. RAG allows document updates without retraining. Cost-effective and maintainable.",
      },
      {
        decision: "Supabase over Pinecone",
        rationale: "Supabase offered pgvector + auth + database in one — reduced infrastructure complexity and cost to near-zero.",
      },
      {
        decision: "Embedded widget over standalone page",
        rationale: "Meeting users where they are. Members already visit the FBK website — no new URL to remember.",
      },
    ],
    results: [
      "↓ 70% manual inquiry volume for FBK leadership",
      "Live on FBK website serving 6,500+ members",
      "Continuous improvement via feedback logging",
      "Admin-friendly knowledge base update process",
    ],
    nextSteps: [
      "Analytics dashboard for question category trends",
      "Multilingual support for international members",
      "Slack/Discord bot integration",
      "A/B test response styles for engagement",
    ],
    techStack: ["GPT-4 API", "LangChain", "Supabase", "pgvector", "Next.js", "TypeScript", "RAG"],
    gradient: "from-cyan-600 to-blue-600",
  },
};
