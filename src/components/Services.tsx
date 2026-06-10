import type { ComponentType } from 'react'
import { ArrowUpRight, Code2, CreditCard, Gauge, Plug } from 'lucide-react'
import { services, site } from '../lib/data'
import { Reveal, Section } from './ui'

const icons: Array<ComponentType<{ className?: string }>> = [Code2, CreditCard, Plug, Gauge]

export default function Services() {
  return (
    <Section
      id="services"
      index="04"
      eyebrow="Services"
      title={
        <>
          How I can help <span className="text-accent">your business</span>
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={service.title} delay={i * 0.06}>
              <article className="group h-full rounded-2xl border border-line bg-surface/50 p-7 transition-colors duration-300 hover:border-accent/40">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface/50 p-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Prefer working through a platform?
            </p>
            <p className="mt-1 text-muted">
              I hold a <span className="text-white">4.9★ rating</span> on Fiverr with escrow-protected
              milestones — same engineer, extra peace of mind.
            </p>
          </div>
          <a
            href={site.socials.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-[#1dbf73] hover:text-[#1dbf73]"
          >
            Hire me on Fiverr
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
