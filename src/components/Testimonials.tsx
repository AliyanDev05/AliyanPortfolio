import { Star } from 'lucide-react'
import { testimonials } from '../lib/data'
import { Reveal, Section } from './ui'

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      index="05"
      eyebrow="Client feedback"
      title={
        <>
          What clients say when the <span className="text-accent">work is done</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.quote} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-7">
              <Stars />
              <blockquote className="mt-5 flex-1 leading-relaxed text-white/90">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-sm font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.tint}66, ${testimonial.tint}1f)`,
                    border: `1px solid ${testimonial.tint}59`,
                  }}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">{testimonial.detail}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
