import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div
        className="h-0.5 origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <nav
        aria-label="Main navigation"
        className={`mx-auto mt-3 flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-colors duration-300 sm:px-6 ${
          scrolled || menuOpen
            ? 'border-line bg-bg/80 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a
          href="#top"
          className="font-mono text-base font-medium tracking-tight text-white transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          <span className="text-accent">~/</span>aliyan
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden cursor-pointer rounded-full px-4 py-2.5 text-sm text-muted transition-colors duration-200 hover:text-white md:inline-flex"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hidden cursor-pointer rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent-strong md:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white transition-colors hover:text-accent md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 w-[calc(100%-1.5rem)] max-w-6xl rounded-2xl border border-line bg-bg/95 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-base text-muted transition-colors hover:bg-elevated hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-base text-muted transition-colors hover:bg-elevated hover:text-white"
              >
                Resume
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-xl bg-accent px-4 py-3 text-center text-base font-medium text-bg transition-colors hover:bg-accent-strong"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
