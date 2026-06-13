import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

interface VideoTestimonialProps {
  src: string
  /** Optional poster image (path under public/). If omitted, the frame at
   *  ~2s is shown as the still via a media fragment — no extra asset needed. */
  poster?: string
  /** Short caption shown under the player */
  caption: string
  /** Client name for attribution */
  name: string
  /** Client role/company, e.g. "CEO, Middleman" */
  role: string
  /** Client initials for the avatar badge */
  initials: string
  /** Accent used for the glow + play button */
  tint?: string
}

/**
 * Click-to-play video card. Shows a still + play button, then swaps to native
 * controls on play. Without a poster image it uses the `#t=2` media fragment so
 * the browser paints a real frame as the thumbnail (zero extra assets).
 */
export default function VideoTestimonial({
  src,
  poster,
  caption,
  name,
  role,
  initials,
  tint = '#a3e635',
}: VideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const videoSrc = poster ? src : `${src}#t=2`

  const handlePlay = () => {
    setStarted(true)
    requestAnimationFrame(() => {
      const video = videoRef.current
      if (!video) return
      // The #t=2 fragment starts playback at 2s — rewind so they see it all.
      if (!poster) video.currentTime = 0
      void video.play()
    })
  }

  return (
    <figure>
      <div className="group relative overflow-hidden rounded-2xl border border-line bg-elevated">
        <div className="flex items-center gap-1.5 border-b border-line bg-[#11141a] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-2 font-mono text-xs text-muted">client-testimonial.mp4</span>
        </div>

        <div className="relative aspect-[1520/856] bg-black">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls={started}
            playsInline
            preload="metadata"
            className="h-full w-full"
            onEnded={() => setStarted(false)}
          >
            <track kind="captions" />
          </video>

          {!started && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play client video testimonial"
              className="absolute inset-0 grid cursor-pointer place-items-center bg-black/30 transition-colors duration-200 hover:bg-black/15"
            >
              <span
                className="grid h-20 w-20 place-items-center rounded-full text-bg shadow-2xl transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: tint }}
              >
                <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
              </span>
              <span
                className="pointer-events-none absolute h-24 w-24 animate-ping rounded-full opacity-30"
                style={{ backgroundColor: tint }}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: `${tint}1f` }}
          aria-hidden="true"
        />
      </div>
      <figcaption className="mt-5 flex items-center justify-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-sm font-semibold text-white"
          style={{
            background: `linear-gradient(135deg, ${tint}66, ${tint}1f)`,
            border: `1px solid ${tint}59`,
          }}
          aria-hidden="true"
        >
          {initials}
        </span>
        <span className="text-left">
          <span className="block text-sm font-medium text-white">{name}</span>
          <span className="block font-mono text-xs text-muted">{role}</span>
        </span>
      </figcaption>
      <p className="mt-3 text-center text-sm text-muted">{caption}</p>
    </figure>
  )
}
