import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Fades content up as it enters the viewport; respects prefers-reduced-motion. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

interface SectionProps {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, index, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <Reveal>
        <p className="font-mono text-sm text-accent">
          <span aria-hidden="true">{index} — </span>
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  )
}

const buttonBase =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200'

type LinkProps = { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>

export function PrimaryLink({ href, children, ...rest }: LinkProps) {
  return (
    <a href={href} className={`${buttonBase} bg-accent text-bg hover:bg-accent-strong`} {...rest}>
      {children}
    </a>
  )
}

export function GhostLink({ href, children, ...rest }: LinkProps) {
  return (
    <a
      href={href}
      className={`${buttonBase} border border-line-strong text-white hover:border-accent hover:text-accent`}
      {...rest}
    >
      {children}
    </a>
  )
}
