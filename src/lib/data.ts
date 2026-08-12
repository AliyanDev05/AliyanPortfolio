export const site = {
  name: "Syed Aliyan Abbas",
  shortName: "Aliyan",
  role: "Full Stack Software Engineer",
  email: "aliyanabbas2812@gmail.com",
  location: "Pakistan · Working worldwide (remote)",
  availability: "Available for new projects",
  resumeUrl: "/resume.pdf", // served from public/resume.pdf — replace that file to update
  socials: {
    github: "https://github.com/AliyanDev05",
    linkedin: "https://www.linkedin.com/in/syed-aliyan-abbas/",
    fiverr: "https://www.fiverr.com/s/jjNb0Va",
  },
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "25+", label: "Projects delivered" },
  { value: "4.9★", label: "Fiverr rating" },
  { value: "100%", label: "On-time delivery" },
];

import type { ArtKind } from "../components/ProjectArt";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  metric: string;
  liveUrl?: string;
  isNda?: boolean;
  /** Accent used to tint the generated preview artwork */
  tint: string;
  /** Which generated preview scene to render */
  art: ArtKind;
  /** Optional real screenshot (path under public/) — overrides the generated art */
  image?: string;
}

export const featuredProjects: Project[] = [
  {
    title: "All In Or Out Moving",
    tagline: "Production platform for a US moving company",
    description:
      "End-to-end website for a real moving business: an instant quote engine, booking flow, service pages and an admin view for managing leads. Built for speed and conversion — the quote form is the product.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    metric: "+38% quote requests after relaunch",
    liveUrl: "https://allinoroutmoving.com",
    tint: "#60a5fa",
    art: "moving",
    image: "/projects/allinoroutmoving.jpg",
  },
  {
    title: "CareCloud Application",
    tagline: "Healthcare SaaS for US medical practices",
    description:
      "Contributing to the migration of a legacy ActionScript healthcare platform into a React/TypeScript Nx monorepo — working across patient management, billing and clinical forms. Shipped a re-entrancy fix for a double-submit bug in payment flows and a React Query cache-invalidation fix for stale patient-record sync across the grid, sidebar and open tabs.",
    tags: ["React", "TypeScript", "Node.js", "Nx Monorepo"],
    metric: "1.2s LCP",
    tint: "#f472b6",
    art: "ecommerce",
  },
  {
    title: "Middleman",
    tagline: "Deal-flow management platform (NDA)",
    description:
      "A private platform for managing brokered deals between buyers and sellers: role-based dashboards, real-time deal status, document handling and payment-schedule tracking. Details available on request.",
    tags: ["React", "TypeScript", "Express", "Socket.IO"],
    metric: "Replaced a 6-spreadsheet workflow",
    isNda: true,
    tint: "#a3e635",
    art: "dashboard",
  },
];

export const moreProjects: Project[] = [
  {
    title: "QuoteKit API",
    tagline: "Reusable quoting micro-service",
    description:
      "A REST API that powers instant price quotes from configurable rule sets — extracted from client work into a reusable service with JWT auth and rate limiting.",
    tags: ["Node.js", "Express", "JWT"],
    metric: "<60ms median response",
    tint: "#fbbf24",
    art: "api",
  },
  {
    title: "LaunchPage",
    tagline: "High-converting landing pages",
    description:
      "A collection of landing pages built for Fiverr clients — each scoring 95+ on Lighthouse with accessible markup and SEO baked in.",
    tags: ["React", "Tailwind", "SEO"],
    metric: "95+ Lighthouse scores",
    tint: "#34d399",
    art: "landing",
  },
  {
    title: "Invoicely",
    tagline: "Invoicing tool for freelancers",
    description:
      "Personal project: create branded invoices, track payment status and export PDFs. Built to scratch my own itch as a freelancer.",
    tags: ["React", "TypeScript", "PDF"],
    metric: "Used for my own clients",
    tint: "#c084fc",
    art: "invoice",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python (Django / FastAPI)",
      "REST APIs",
      "WebSockets",
      "Stripe",
    ],
  },
  {
    title: "Data & Infra",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Practices",
    skills: [
      "Performance budgets",
      "Accessibility",
      "SEO",
      "Testing",
      "Code review",
      "Agile",
    ],
  },
];

export const experience = [
  {
    period: "Jun 2025 — Present",
    role: "Software Engineer",
    company: "CareCloud (MTBC) — healthcare technology",
    points: [
      "Contribute to a large-scale healthcare platform migration from a legacy ActionScript codebase to a React/TypeScript Nx monorepo, working across patient management, billing and clinical forms modules.",
      "Resolved a critical double-submit bug in patient payment and credit card flows by implementing re-entrancy guards with Formik state and React refs.",
      "Fixed a data-sync bug where merged patient records persisted stale UI state across the grid, sidebar and open tabs, using targeted React Query cache invalidation.",
    ],
  },
  {
    period: "Sep 2023 — May 2025",
    role: "Full Stack Developer",
    company: "MiddlemanCeo USA (Remote)",
    points: [
      "Built and deployed full-stack websites from the ground up using React and Next.js for clients, owning both frontend UI and backend implementation.",
      "Designed responsive, conversion-focused landing pages and booking/quote-request and payment integration flows tailored to local service-based businesses.",
    ],
  },
  {
    period: "2022 — Present",
    role: "Freelance Full Stack Engineer",
    company: "Nexora Tech System · Fiverr · Direct clients",
    points: [
      "Shipped 25+ client projects end-to-end — scoping, build, deployment and handover.",
      "Maintained a 4.9★ rating across 16+ reviews with repeat clients in the US and EU.",
      "Specialized in conversion-focused business sites, e-commerce and custom dashboards.",
    ],
  },
  {
    period: "Apr 2022 — Sep 2023",
    role: "Full Stack Developer",
    company: "TechEdge Solutions",
    points: [
      "Developed responsive websites, mobile applications, landing pages and business platforms using the MERN stack.",
      "Improved user experience through usability-focused development and direct stakeholder feedback; maintained consistency across products using reusable components.",
      "Collaborated with cross-functional teams to deliver projects within deadlines.",
    ],
  },
];

export const services = [
  {
    title: "Full-stack web applications",
    description:
      "Custom web apps from database to UI — dashboards, portals, SaaS MVPs. One developer, full ownership, no hand-off friction.",
  },
  {
    title: "CareCloud Healthcare Applications",
    description:
      "Contribute to a large-scale healthcare platform migration from a legacy ActionScript codebase to a React/TypeScript Nx monorepo.",
  },
  {
    title: "APIs & integrations",
    description:
      "Clean REST APIs, third-party integrations and automations — documented, tested and built to be handed to any team.",
  },
  {
    title: "Performance & rescue work",
    description:
      "Slow site? Broken build? I audit, fix and modernize existing React/Node codebases without rewriting everything.",
  },
];

export const videoTestimonial = {
  src: "/full-stack-website-developer.mp4",
  name: "Shon Jhon Stewart",
  role: "CEO, Middleman",
  initials: "SS",
  tint: "#a3e635",
  caption: "A word from a client — in their own words.",
};

export const testimonials = [
  {
    quote:
      "Aliyan understood the brief better than agencies we paid 5x more. The quote engine he built is now how we get most of our jobs.",
    name: "James R.",
    detail: "Moving company owner · United States",
    initials: "JR",
    tint: "#60a5fa",
  },
  {
    quote:
      "Delivered ahead of schedule, communicated every day, and the code was clean enough that our in-house dev onboarded in an afternoon.",
    name: "Oliver H.",
    detail: "Startup founder · United Kingdom",
    initials: "OH",
    tint: "#34d399",
  },
  {
    quote:
      "Third project with Aliyan. At this point he is just our developer — fast, honest about trade-offs, and the work simply ships.",
    name: "Lukas M.",
    detail: "Repeat client · Germany",
    initials: "LM",
    tint: "#c084fc",
  },
];