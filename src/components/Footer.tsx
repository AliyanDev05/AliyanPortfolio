import { ArrowUp } from 'lucide-react'
import { navLinks, site } from '../lib/data'
import { GitHubIcon, LinkedInIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-base text-white">
            <span className="text-accent">~/</span>aliyan
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {site.name} — {site.role}. Built with React, TypeScript and too much coffee.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-white"
          >
            <GitHubIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-white"
          >
            <LinkedInIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <p className="text-center font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
