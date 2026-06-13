import { videoTestimonial } from '../lib/data'
import VideoTestimonial from './VideoTestimonial'
import { Reveal } from './ui'

/**
 * High-impact social proof placed near the top of the page: a client speaking
 * on camera, used as a first-impression hook right after the hero.
 */
export default function FeaturedVideo() {
  return (
    <section
      aria-label="Client video testimonial"
      className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20"
    >
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-accent">Client testimonial</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Don't just take my word for it
          </h2>
          <p className="mt-3 text-muted">
            Hear it straight from a client whose platform I designed and shipped.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 max-w-3xl">
          <VideoTestimonial
            src={videoTestimonial.src}
            name={videoTestimonial.name}
            role={videoTestimonial.role}
            initials={videoTestimonial.initials}
            tint={videoTestimonial.tint}
          />
        </div>
      </Reveal>
    </section>
  )
}
