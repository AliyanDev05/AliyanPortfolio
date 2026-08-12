import { ArrowUpRight, Lock, TrendingUp } from 'lucide-react'
import { featuredProjects, moreProjects, type Project } from '../lib/data'
import ProjectArt from './ProjectArt'
import { Reveal, Section } from './ui'

function FeaturedCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Reveal>
      <article
        className={`group grid items-center gap-8 rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong sm:p-8 lg:grid-cols-2 lg:gap-12 ${
          flip ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <ProjectArt project={project} />
        <div>
          <p className="font-mono text-sm" style={{ color: project.tint }}>
            {project.tagline}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 text-sm text-white">
            <TrendingUp className="h-4 w-4 text-accent" aria-hidden="true" />
            {project.metric}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-accent"
              >
                Visit live site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            ) : project.isNda ? (
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <Lock className="h-4 w-4" aria-hidden="true" />
                Private build — walkthrough available on request
              </span>
            ) : (
              <a
                href="#contact"
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-accent"
              >
                Ask me about this project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title={
        <>
          Projects that solved <span className="text-accent">real problems</span>
        </>
      }
    >
      <div className="space-y-8">
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.title} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {moreProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong">
              <ProjectArt project={project} />
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-1 font-mono text-xs text-muted">{project.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <p className="mt-4 font-mono text-xs text-accent">{project.metric}</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
