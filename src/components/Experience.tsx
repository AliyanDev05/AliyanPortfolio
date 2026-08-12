import { experience } from '../lib/data'
import { Reveal, Section } from './ui'

export default function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      eyebrow="Experience"
      title={
        <>
          Five years of <span className="text-accent">shipping for clients</span>
        </>
      }
    >
      <ol className="relative space-y-12 border-l border-line pl-8 md:space-y-14">
        {experience.map((item, i) => (
          <li key={item.role} className="relative">
            <span
              className={`absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 ${
                i === 0 ? 'border-accent bg-accent/30' : 'border-line-strong bg-surface'
              }`}
              aria-hidden="true"
            />
            <Reveal delay={i * 0.08}>
              <p className="font-mono text-sm text-accent">{item.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.company}</p>
              <ul className="mt-4 max-w-2xl space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-muted">
                    <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-line-strong" aria-hidden="true" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
