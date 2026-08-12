import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, FileDown } from 'lucide-react'
import { site, stats } from '../lib/data'
import { GitHubIcon, LinkedInIcon } from './icons'
import { GhostLink, PrimaryLink } from './ui'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

function TerminalCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-muted">aliyan@dev — zsh</span>
      </div>
      <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
        <p>
          <span className="text-accent">~ $</span> <span className="text-white">whoami</span>
        </p>
        <p className="text-muted">
          Full-stack engineer. React, TypeScript, Node.js, Python.
          <br />
          I turn ideas into products that ship.
        </p>
        <p>
          <span className="text-accent">~ $</span> <span className="text-white">cat status.txt</span>
        </p>
        <p className="text-muted">
          <span className="text-accent-strong">●</span> {site.availability.toLowerCase()}
          <br />
          <span className="text-accent-strong">●</span> remote-friendly, async by default
          <br />
          <span className="text-accent-strong">●</span> avg. reply time: &lt; 24h
        </p>
        <p>
          <span className="text-accent">~ $</span>{' '}
          <span className="inline-block h-4 w-2 animate-pulse bg-accent align-middle" aria-hidden="true" />
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-20%] h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-36 sm:px-8 md:pt-44 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.p
              {...enter(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-2 font-mono text-xs text-muted"
            >
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" aria-hidden="true" />
              {site.availability}
            </motion.p>

            <motion.h1
              {...enter(0.08)}
              className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
            >
              I build web products
              <br />
              that <span className="text-accent">actually ship.</span>
            </motion.h1>

            <motion.p {...enter(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I'm <span className="font-medium text-white">{site.name}</span> — a full-stack software
              engineer specializing in React, TypeScript and Node.js, Python. I help startups and businesses
              turn ideas into fast, reliable products, from first commit to production.
            </motion.p>

            <motion.div {...enter(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
              <PrimaryLink href="#work">
                View my work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </PrimaryLink>
              <GhostLink href="#contact">Get in touch</GhostLink>
              <GhostLink href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
                <FileDown className="h-4 w-4" aria-hidden="true" />
              </GhostLink>
              <a
                href={site.socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#1dbf73]/50 px-6 py-3 text-sm font-medium text-[#1dbf73] transition-colors duration-200 hover:border-[#1dbf73] hover:bg-[#1dbf73]/10"
              >
                Hire me on Fiverr
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <span className="mx-1 hidden h-6 w-px bg-line-strong sm:block" aria-hidden="true" />

              <div className="flex items-center gap-1">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-white"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-white"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div {...enter(0.3)} className="hidden justify-end lg:flex">
            <TerminalCard />
          </motion.div>
        </div>

        <motion.dl
          {...enter(0.4)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-surface px-6 py-6">
              <dt className="order-2 mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="order-1 font-display text-3xl font-semibold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
