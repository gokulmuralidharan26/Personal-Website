export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Metrics", href: "#metrics" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Playbook", href: "#playbook" },
  { label: "Creative", href: "#creative" },
  { label: "Contact", href: "#contact" },
] as const;

export const ROUTES = {
  home: "/",
  caseStudy: (slug: string) => `/case-studies/${slug}`,
} as const;

export type NavLink = (typeof NAV_LINKS)[number];
