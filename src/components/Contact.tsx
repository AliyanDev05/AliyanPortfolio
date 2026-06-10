import { useState, type FormEvent } from 'react'
import { Check, Copy, Send } from 'lucide-react'
import { site } from '../lib/data'
import { Reveal, Section } from './ui'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  }

  // Zero-backend contact: builds a prefilled mailto. Swap for an API route or
  // Formspree/FormSubmit endpoint if you later want server-side handling.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-elevated px-4 py-3 text-white placeholder:text-muted/60 transition-colors duration-200 focus:border-accent focus:outline-none'

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          Have a project in mind? <span className="text-accent">Let's talk.</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            Tell me what you're building — a new product, a feature, or a rescue mission. I read
            every message and typically reply within 24 hours.
          </p>

          <div className="mt-8">
            <p className="font-mono text-sm text-muted">Email me directly</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="font-display text-xl font-semibold text-white transition-colors duration-200 hover:text-accent sm:text-2xl"
              >
                {site.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
                aria-label={copied ? 'Email copied' : 'Copy email address'}
              >
                {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-2 h-5 font-mono text-xs text-accent" role="status" aria-live="polite">
              {copied ? 'Copied to clipboard' : ''}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-surface/50 p-5">
            <p className="flex items-center gap-2.5 text-sm text-white">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" aria-hidden="true" />
              {site.availability}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Currently booking new projects. Remote-first, comfortable across US and EU time zones.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white">
                Project details
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="What are you building, what's the timeline, and how can I help?"
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent-strong sm:w-auto"
            >
              Send message
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              This opens your email client with the message prefilled — no data is stored on this
              site.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
