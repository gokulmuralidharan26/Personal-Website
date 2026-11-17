/**
 * Every word on the site lives in this file.
 *
 * Edit text here and the pages, meta tags, social image, favicon, and
 * sitemap all update. To rebrand under a company name later, change
 * `brand.name` (and `brand.initials`). Components never hard-code copy.
 */

export const brand = {
  /** The wordmark in the header and footer, and the name used in page titles. */
  name: "Gokul Muralidharan",
  /** Used for the favicon and the photo placeholder. */
  initials: "GM",
  /** The person behind the brand. Keep this as your own name even after a rebrand. */
  person: "Gokul Muralidharan",
  role: "AI consultant",
  location: "New York City",
};

export const links = {
  /**
   * Your Calendly or Cal.com link, for example "https://cal.com/yourname/intro".
   * While this is empty, every "Book a call" button goes to the /contact page.
   */
  bookingUrl: "",
  email: "gokulmuralidharan26@gmail.com",
  linkedin: "https://www.linkedin.com/in/gokul-muralidharan/",
};

export const seo = {
  title: "Gokul Muralidharan | AI consulting for business owners",
  description:
    "I build AI agents and automations that take repetitive admin work off your team's plate. Solo AI consultant in New York City. Book a free intro call.",
  /** The line shown on the social sharing image. */
  ogHeadline: "Less busywork. More time for the work that grows your business.",
};

export const cta = {
  book: "Book a free intro call",
  bookShort: "Book a call",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export const hero = {
  eyebrow: "AI consulting for founders, CEOs, and small business owners",
  /** Wrap a phrase in *asterisks* to set it in italics with the accent color. */
  headline: "Less busywork. More time for the work that *grows your business.*",
  sub: "I build AI agents and automations that take the repetitive admin off your team's plate. You get the hours back.",
  secondary: { label: "See how it works", href: "#process" },
  facts: [
    "Based in New York City",
    "You work with me directly",
    "The first call is free",
  ],
  /**
   * The illustration beside the headline. It shows the kind of report an
   * agent could write. Every figure is made up and the card is labeled as
   * sample data. Keep that label if you change the numbers.
   */
  mockup: {
    sampleLabel: "Sample data",
    request: "Write my weekly marketing report",
    title: "Monday marketing report",
    meta: "Written by your marketing agent. Ready at 7:00 am.",
    stats: [
      { label: "Ad spend", value: "$4,120", note: "flat" },
      { label: "Leads", value: "86", note: "up 12" },
      { label: "Cost per lead", value: "$47.90", note: "down 14%" },
    ],
    summaryLabel: "Summary",
    summary:
      "Leads rose 16% while spend held flat. The search campaign drove most of the gain. One ad set spent $310 and brought in no leads.",
    actionLabel: "Suggested next step",
    action: "Pause the spring promo ad set",
    actionButton: "Approve",
    footnote: "Nothing changes until you approve it.",
  },
};

export const problems = {
  label: "The problem",
  title: "You already know where the time goes.",
  intro:
    "Most owners I talk to don't need convincing that AI matters. They need someone to make it do real work inside their business.",
  items: [
    {
      title: "Your week disappears into admin.",
      body: "Reports, follow-ups, data entry, scheduling. None of it is why you started the business, and all of it still has to get done.",
    },
    {
      title: "Everything waits on you.",
      body: "Your team needs your answer, your approval, or your spreadsheet before anything moves. You have become the bottleneck.",
    },
    {
      title: "Good people are stuck on copy and paste.",
      body: "You pay skilled staff to move numbers between tools and rewrite the same emails. They could be doing work that brings in money.",
    },
    {
      title: "You tried AI and nothing changed.",
      body: "A chat window on its own doesn't save much time. The payoff comes when AI is wired into how your business already runs.",
    },
  ],
};

export const services = {
  label: "Services",
  title: "Three ways to work with me",
  items: [
    {
      name: "AI audit",
      body: "I sit down with you and map how your business actually runs. Then I show you where AI will save the most time and money, ranked by payoff. You leave with a clear plan, whether or not you build it with me.",
      points: [
        "A map of your current workflows",
        "A ranked list of what to automate first",
        "A fixed quote for anything you want built",
      ],
    },
    {
      name: "Custom agents and automations",
      body: "I build the tools and plug them into the software you already use. For example, a marketing agent that pulls your campaign numbers every Monday and writes the report for you. I test it on your real work before your team relies on it.",
      points: [
        "Built around the tools you already pay for",
        "Tested on real work before launch",
        "Training so your team knows how to use it",
      ],
    },
    {
      name: "Ongoing support",
      body: "A monthly retainer to keep everything running well. I fix what breaks, tune what could be better, and build the next thing when you're ready.",
      points: [
        "Maintenance and fixes",
        "Tuning as your business changes",
        "New builds when you need them",
      ],
    },
  ],
};

export const process = {
  label: "How it works",
  title: "Three steps. No long contracts to get started.",
  steps: [
    {
      name: "Intro call",
      body: "A free call. You tell me how your business runs and what eats your time. I tell you honestly whether AI can help. If it can't, I'll say so.",
    },
    {
      name: "Audit",
      body: "I look closely at your workflows and tools, then hand you a short plan. It lists what to automate, in what order, and what each piece is worth to you.",
    },
    {
      name: "Build and support",
      body: "I build the first automation, test it with your team, and put it to work. After launch I stay on to maintain it and build what comes next.",
    },
  ],
};

export const example = {
  label: "Example project",
  /** Shown as a small tag. Change to "Sample scenario" if you swap in a hypothetical. */
  tag: "Real project",
  title: "An assistant that answers member questions, so people don't have to.",
  client: "Florida Blue Key, a student leadership organization at the University of Florida",
  parts: [
    {
      heading: "The problem",
      body: "The organization serves more than 6,500 members. The same questions kept landing in the leadership team's inbox, and every one was answered by hand.",
    },
    {
      heading: "What I built",
      body: "An AI assistant on the organization's website. It answers member questions right away, using the organization's own documents and records as its source. I kept improving it based on what members actually asked.",
    },
    {
      heading: "The result",
      body: "Manual support requests dropped by 70%. Members get answers in seconds, and the leadership team got that time back.",
    },
  ],
  stats: [
    { value: "70%", label: "fewer manual support requests" },
    { value: "6,500+", label: "members served" },
  ],
};

export const about = {
  label: "About",
  title: "Hi, I'm Gokul.",
  /**
   * Put a photo in /public (for example /public/gokul.jpg) and set this to
   * "/gokul.jpg". While it is empty, the site shows a placeholder.
   */
  photo: "",
  photoAlt: "Portrait of Gokul Muralidharan",
  paragraphs: [
    "I'm an AI consultant based in New York City. I help business owners hand their repetitive work to software, so they and their teams can spend time on the work that matters.",
    "I have a computer science degree from the University of Florida and a background in product and engineering. At GE Vernova I worked on automated executive reporting. At Fidelity National Information Services I built dashboards and reports for banking teams. I'm also a Claude Corps fellow, a program from Anthropic and CodePath, where I help a nonprofit put AI to work in its daily operations.",
    "I work directly with every client. When you book a call, you talk to me. When something gets built, I build it.",
  ],
};

export const faq = {
  label: "FAQ",
  title: "Questions owners ask me",
  items: [
    {
      q: "How much does it cost?",
      a: "It depends on what you need, so I don't publish a price list. The intro call is free. After the audit you get a fixed quote for each build, so you know the full cost before you commit to anything. Ongoing support is a flat monthly fee.",
    },
    {
      q: "How long does it take?",
      a: "An audit usually takes one to two weeks. A first automation is often live a few weeks after that. Bigger projects take longer, and I'll give you a timeline along with the quote.",
    },
    {
      q: "What happens to my data?",
      a: "Your data stays yours. I only access what a project needs, and I'm glad to sign an NDA before we start. I build with business-grade AI services that do not use your data to train their models. Anything I build for you is yours to keep.",
    },
    {
      q: "Do I need technical staff?",
      a: "No. I handle the technical side from start to finish. All I need is someone who knows how the work gets done today, and that's usually you or a manager. I also train your team to use whatever I build.",
    },
    {
      q: "What if AI isn't a good fit for my business?",
      a: "Then I'll tell you on the intro call. Some problems are better solved with a simpler tool or a change in process. I'd rather say that up front than sell you something you don't need.",
    },
  ],
};

export const finalCta = {
  title: "Find out what AI can *take off your plate.*",
  body: "Book a free intro call. Tell me where your time goes, and I'll tell you what I'd automate first.",
  emailPrompt: "Prefer email?",
};

export const contact = {
  metaTitle: "Contact",
  metaDescription:
    "Book a free intro call or send a message. I reply to every message myself.",
  title: "Let's talk about your business.",
  intro:
    "The fastest way to start is a free intro call. If you'd rather write, use the form and I'll reply myself, usually within one business day.",
  bookHeading: "Book a call",
  bookBody: "Pick a time that works for you.",
  emailHeading: "Email",
  form: {
    name: "Your name",
    email: "Email",
    company: "Company",
    companyHint: "Optional",
    message: "What would you like help with?",
    messageHint:
      "A sentence or two is plenty. What takes up too much of your time?",
    submit: "Send message",
    sending: "Sending",
    success: "Thanks. Your message is on its way, and I'll reply soon.",
    error:
      "Something went wrong and your message did not send. Please email me directly at",
    subject: "New message from your website",
  },
};

export const footer = {
  line: "AI consulting for business owners. New York City.",
};
