export const site = {
  name: 'Syed Aliyan Abbas',
  shortName: 'Aliyan',
  role: 'Full Stack Software Engineer',
  email: 'aliyanabbas2812@gmail.com',
  location: 'Pakistan · Working worldwide (remote)',
  availability: 'Available for new projects',
  resumeUrl: '/resume.pdf', // served from public/resume.pdf — replace that file to update
  socials: {
    github: 'https://github.com/AliyanDev05',
    linkedin: 'https://www.linkedin.com/in/syed-aliyan-abbas-0a201a308/',
    fiverr: 'https://www.fiverr.com/s/jjNb0Va',
  },
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '25+', label: 'Projects delivered' },
  { value: '4.9★', label: 'Fiverr rating' },
  { value: '100%', label: 'On-time delivery' },
]

import type { ArtKind } from '../components/ProjectArt'

export interface Project {
  title: string
  tagline: string
  description: string
  tags: string[]
  metric: string
  liveUrl?: string
  isNda?: boolean
  /** Accent used to tint the generated preview artwork */
  tint: string
  /** Which generated preview scene to render */
  art: ArtKind
  /** Optional real screenshot (path under public/) — overrides the generated art */
  image?: string
}

export const featuredProjects: Project[] = [
  {
    title: 'All In Or Out Moving',
    tagline: 'Production platform for a US moving company',
    description:
      'End-to-end website for a real moving business: an instant quote engine, booking flow, service pages and an admin view for managing leads. Built for speed and conversion — the quote form is the product.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    metric: '+38% quote requests after relaunch',
    liveUrl: 'https://allinoroutmoving.com',
    tint: '#60a5fa',
    art: 'moving',
    image: '/projects/allinoroutmoving.jpg',
  },
  {
    title: 'Heelora',
    tagline: 'E-commerce storefront for a footwear brand',
    description:
      'Full storefront with product catalog, variant selection, cart, Stripe checkout and an order-management dashboard. Optimized images and route-level code splitting keep it fast on mobile.',
    tags: ['React', 'TypeScript', 'Stripe', 'MongoDB'],
    metric: '1.2s LCP on 4G mobile',
    tint: '#f472b6',
    art: 'ecommerce',
  },
  {
    title: 'Middleman',
    tagline: 'Deal-flow management platform (NDA)',
    description:
      'A private platform for managing brokered deals between buyers and sellers: role-based dashboards, real-time deal status, document handling and payment-schedule tracking. Details available on request.',
    tags: ['React', 'TypeScript', 'Express', 'Socket.IO'],
    metric: 'Replaced a 6-spreadsheet workflow',
    isNda: true,
    tint: '#a3e635',
    art: 'dashboard',
  },
]

export const moreProjects: Project[] = [
  {
    title: 'QuoteKit API',
    tagline: 'Reusable quoting micro-service',
    description:
      'A REST API that powers instant price quotes from configurable rule sets — extracted from client work into a reusable service with JWT auth and rate limiting.',
    tags: ['Node.js', 'Express', 'JWT'],
    metric: '<60ms median response',
    tint: '#fbbf24',
    art: 'api',
  },
  {
    title: 'LaunchPage',
    tagline: 'High-converting landing pages',
    description:
      'A collection of landing pages built for Fiverr clients — each scoring 95+ on Lighthouse with accessible markup and SEO baked in.',
    tags: ['React', 'Tailwind', 'SEO'],
    metric: '95+ Lighthouse scores',
    tint: '#34d399',
    art: 'landing',
  },
  {
    title: 'Invoicely',
    tagline: 'Invoicing tool for freelancers',
    description:
      'Personal project: create branded invoices, track payment status and export PDFs. Built to scratch my own itch as a freelancer.',
    tags: ['React', 'TypeScript', 'PDF'],
    metric: 'Used for my own clients',
    tint: '#c084fc',
    art: 'invoice',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'JWT / Auth', 'Stripe'],
  },
  {
    title: 'Data & Infra',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Vercel', 'CI/CD'],
  },
  {
    title: 'Practices',
    skills: ['Performance budgets', 'Accessibility', 'SEO', 'Testing', 'Code review', 'Agile'],
  },
]

export const experience = [
  {
    period: '2024 — Present',
    role: 'Software Engineer',
    company: 'CareCloud — healthcare technology',
    points: [
      'Build and maintain features for healthcare SaaS products used by US medical practices.',
      'Work across the stack — React frontends and Node.js services — inside a large production codebase.',
      'Collaborate in an agile team with code reviews, sprint planning and on-call ownership of shipped work.',
    ],
  },
  {
    period: '2023 — Present',
    role: 'Freelance Full Stack Engineer',
    company: 'Fiverr · Direct clients',
    points: [
      'Shipped 25+ client projects end-to-end — scoping, build, deployment and handover.',
      'Maintained a 4.9★ rating across 16+ reviews with repeat clients in the US and EU.',
      'Specialized in conversion-focused business sites, e-commerce and custom dashboards.',
    ],
  },
  {
    period: '2022 — 2023',
    role: 'Full Stack Developer (Contract)',
    company: 'Agency & startup contracts',
    points: [
      'Built MERN features inside existing codebases: payment flows, admin panels, REST APIs.',
      'Worked async with distributed teams across time zones using Git-based workflows.',
    ],
  },
  {
    period: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'Early client work & open source',
    points: [
      'Started with React UI work: landing pages, component libraries and responsive rebuilds.',
      'Learned the craft of performance and accessibility that now anchors every project.',
    ],
  },
]

export const services = [
  {
    title: 'Full-stack web applications',
    description:
      'Custom web apps from database to UI — dashboards, portals, SaaS MVPs. One developer, full ownership, no hand-off friction.',
  },
  {
    title: 'E-commerce & payments',
    description:
      'Storefronts and checkout flows with Stripe integration, order management and the page speed that keeps carts from being abandoned.',
  },
  {
    title: 'APIs & integrations',
    description:
      'Clean REST APIs, third-party integrations and automations — documented, tested and built to be handed to any team.',
  },
  {
    title: 'Performance & rescue work',
    description:
      'Slow site? Broken build? I audit, fix and modernize existing React/Node codebases without rewriting everything.',
  },
]

export const videoTestimonial = {
  src: '/full-stack-website-developer.mp4',
  name: 'Shon Jhon Stewart',
  role: 'CEO, Middleman',
  initials: 'SS',
  tint: '#a3e635',
  caption: 'A word from a client — in their own words.',
}

export const testimonials = [
  {
    quote:
      'Aliyan understood the brief better than agencies we paid 5x more. The quote engine he built is now how we get most of our jobs.',
    name: 'James R.',
    detail: 'Moving company owner · United States',
    initials: 'JR',
    tint: '#60a5fa',
  },
  {
    quote:
      'Delivered ahead of schedule, communicated every day, and the code was clean enough that our in-house dev onboarded in an afternoon.',
    name: 'Oliver H.',
    detail: 'Startup founder · United Kingdom',
    initials: 'OH',
    tint: '#34d399',
  },
  {
    quote:
      'Third project with Aliyan. At this point he is just our developer — fast, honest about trade-offs, and the work simply ships.',
    name: 'Lukas M.',
    detail: 'Repeat client · Germany',
    initials: 'LM',
    tint: '#c084fc',
  },
]
