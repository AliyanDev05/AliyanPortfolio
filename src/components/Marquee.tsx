import type { ComponentType } from 'react'
import {
  DockerIcon,
  ExpressIcon,
  GitIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from './icons'

const technologies: Array<{ name: string; Icon: ComponentType<{ className?: string }> }> = [
  { name: 'React', Icon: ReactIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'Express', Icon: ExpressIcon },
  { name: 'MongoDB', Icon: MongoIcon },
  { name: 'Next.js', Icon: NextIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'Git', Icon: GitIcon },
]

export default function Marquee() {
  return (
    <div className="border-y border-line bg-surface/40 py-6" aria-label="Technologies I work with">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {[...technologies, ...technologies].map(({ name, Icon }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-3 text-muted transition-colors duration-200 hover:text-white"
              aria-hidden={i >= technologies.length}
            >
              <Icon className="h-6 w-6" />
              <span className="font-mono text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
