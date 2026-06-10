import { CheckCircle2, MapPin } from 'lucide-react'
import { site, skillGroups } from '../lib/data'
import { Reveal, Section } from './ui'

const principles = [
  'Ship fast, but never ship broken — every project leaves with tests and docs.',
  'Performance is a feature: budgets for LCP and bundle size on every build.',
  'Clear communication beats clever code. Daily updates, honest trade-offs.',
]

export default function About() {
  return (
    <Section
      id="about"
      index="02"
      eyebrow="About me"
      title={
        <>
          A safe pair of hands for your <span className="text-accent">entire stack</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I started as a frontend developer obsessed with how things feel, and grew into a
              full-stack engineer obsessed with how things <em className="text-white not-italic font-medium">work</em>.
              Today I take products from idea to production: data models, APIs, interfaces, and the
              deployment pipeline in between.
            </p>
            <p>
              Most of my freelance work comes from repeat clients on Fiverr — small businesses and
              startups that need one person who can own the whole build and communicate like a
              teammate, not a vendor.
            </p>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {site.location}
          </p>

          <ul className="mt-8 space-y-4">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3 text-muted">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-relaxed">{principle}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-mono text-sm text-accent">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
