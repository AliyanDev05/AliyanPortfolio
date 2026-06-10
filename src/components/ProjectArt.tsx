import type { Project } from '../lib/data'

/**
 * Generated preview artwork: each project gets a bespoke SVG "screenshot"
 * inside a browser frame. Vector-only, so previews cost ~2KB each and stay
 * crisp at any DPI — no raster images to load or optimize.
 */

const W = 640
const H = 400
const CHROME_H = 36

function Chrome({ tint }: { tint: string }) {
  return (
    <g>
      <rect width={W} height={H} rx="12" fill="#0c0e12" />
      <rect width={W} height={CHROME_H} fill="#11141a" />
      <circle cx="20" cy="18" r="5" fill="#ff5f57" />
      <circle cx="38" cy="18" r="5" fill="#febc2e" />
      <circle cx="56" cy="18" r="5" fill="#28c840" />
      <rect x="180" y="10" width="280" height="16" rx="8" fill="#ffffff0a" />
      <circle cx="196" cy="18" r="4" fill={tint} opacity="0.7" />
    </g>
  )
}

function MovingScene({ tint }: { tint: string }) {
  return (
    <g>
      {/* nav */}
      <rect x="32" y="56" width="90" height="12" rx="6" fill={tint} opacity="0.8" />
      <rect x="420" y="56" width="40" height="10" rx="5" fill="#ffffff20" />
      <rect x="470" y="56" width="40" height="10" rx="5" fill="#ffffff20" />
      <rect x="520" y="52" width="88" height="20" rx="10" fill={tint} opacity="0.9" />
      {/* headline */}
      <rect x="32" y="110" width="280" height="26" rx="8" fill="#ffffff2e" />
      <rect x="32" y="146" width="220" height="26" rx="8" fill="#ffffff2e" />
      <rect x="32" y="188" width="250" height="10" rx="5" fill="#ffffff14" />
      <rect x="32" y="206" width="200" height="10" rx="5" fill="#ffffff14" />
      <rect x="32" y="236" width="120" height="30" rx="15" fill={tint} />
      <rect x="162" y="236" width="110" height="30" rx="15" fill="none" stroke="#ffffff2e" strokeWidth="2" />
      {/* truck */}
      <g opacity="0.9">
        <rect x="40" y="300" width="170" height="62" rx="8" fill={tint} opacity="0.25" />
        <rect x="40" y="300" width="170" height="62" rx="8" fill="none" stroke={tint} strokeWidth="2.5" />
        <path d="M210 318 h44 l22 24 v20 h-66 z" fill={tint} opacity="0.5" />
        <rect x="222" y="326" width="20" height="14" rx="3" fill="#0c0e12" />
        <circle cx="86" cy="366" r="13" fill="#0c0e12" stroke="#ffffff66" strokeWidth="3" />
        <circle cx="166" cy="366" r="13" fill="#0c0e12" stroke="#ffffff66" strokeWidth="3" />
        <circle cx="248" cy="366" r="13" fill="#0c0e12" stroke="#ffffff66" strokeWidth="3" />
        <rect x="62" y="320" width="80" height="9" rx="4.5" fill={tint} opacity="0.7" />
        <rect x="62" y="336" width="56" height="9" rx="4.5" fill={tint} opacity="0.45" />
      </g>
      {/* quote form card */}
      <g>
        <rect x="372" y="104" width="236" height="268" rx="14" fill="#151922" stroke="#ffffff14" />
        <rect x="396" y="128" width="130" height="14" rx="7" fill="#ffffffd9" />
        <rect x="396" y="152" width="90" height="9" rx="4.5" fill="#ffffff33" />
        <rect x="396" y="180" width="188" height="30" rx="8" fill="#ffffff0d" stroke="#ffffff1a" />
        <rect x="396" y="220" width="188" height="30" rx="8" fill="#ffffff0d" stroke="#ffffff1a" />
        <rect x="396" y="260" width="188" height="30" rx="8" fill="#ffffff0d" stroke="#ffffff1a" />
        <rect x="404" y="189" width="70" height="11" rx="5.5" fill="#ffffff26" />
        <rect x="404" y="229" width="96" height="11" rx="5.5" fill="#ffffff26" />
        <rect x="404" y="269" width="56" height="11" rx="5.5" fill="#ffffff26" />
        <rect x="396" y="306" width="188" height="36" rx="18" fill="#a3e635" />
        <rect x="448" y="319" width="84" height="11" rx="5.5" fill="#0c0e12" />
      </g>
    </g>
  )
}

function HeelScene({ tint }: { tint: string }) {
  const heel = 'M14 86 Q18 50 44 36 Q72 20 80 6 L92 12 Q84 36 56 52 Q40 61 38 86 Z'
  const cards = [44, 244, 444]
  return (
    <g>
      {/* nav */}
      <rect x="32" y="56" width="80" height="12" rx="6" fill={tint} opacity="0.85" />
      <rect x="300" y="56" width="36" height="10" rx="5" fill="#ffffff20" />
      <rect x="346" y="56" width="36" height="10" rx="5" fill="#ffffff20" />
      <rect x="392" y="56" width="36" height="10" rx="5" fill="#ffffff20" />
      <circle cx="586" cy="61" r="13" fill={tint} opacity="0.25" />
      <circle cx="592" cy="54" r="6" fill={tint} />
      {/* banner */}
      <rect x="32" y="92" width="576" height="56" rx="12" fill={tint} opacity="0.14" />
      <rect x="56" y="110" width="180" height="14" rx="7" fill="#ffffffcc" />
      <rect x="56" y="130" width="110" height="8" rx="4" fill="#ffffff40" />
      <rect x="500" y="108" width="84" height="26" rx="13" fill={tint} />
      {/* product cards */}
      {cards.map((x, i) => (
        <g key={x}>
          <rect x={x} y="170" width="152" height="196" rx="14" fill="#151922" stroke="#ffffff14" />
          <rect x={x + 14} y="184" width="124" height="108" rx="10" fill={tint} opacity={0.12 + i * 0.05} />
          <g transform={`translate(${x + 36}, 196) scale(0.85)`}>
            <path d={heel} fill={tint} opacity="0.85" />
            <rect x="34" y="84" width="10" height="4" rx="2" fill={tint} />
          </g>
          <rect x={x + 14} y="304" width="90" height="11" rx="5.5" fill="#ffffffcc" />
          <rect x={x + 14} y="323" width="56" height="9" rx="4.5" fill="#ffffff33" />
          <rect x={x + 14} y="342" width="52" height="16" rx="8" fill={tint} opacity="0.9" />
          <circle cx={x + 130} cy="348" r="11" fill="none" stroke={tint} strokeWidth="2" />
          <path d={`M${x + 125} 348 h10 M${x + 130} 343 v10`} stroke={tint} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </g>
  )
}

function DashboardScene({ tint }: { tint: string }) {
  return (
    <g>
      {/* sidebar */}
      <rect x="0" y={CHROME_H} width="120" height={H - CHROME_H} fill="#11141a" />
      <circle cx="28" cy="64" r="9" fill={tint} />
      <rect x="46" y="58" width="52" height="11" rx="5.5" fill="#ffffffcc" />
      {[100, 130, 160, 190, 220].map((y, i) => (
        <g key={y}>
          {i === 0 && <rect x="12" y={y - 7} width="96" height="26" rx="8" fill={`${tint}26`} />}
          <circle cx="28" cy={y + 5} r="4" fill={i === 0 ? tint : '#ffffff33'} />
          <rect x="42" y={y} width="54" height="9" rx="4.5" fill={i === 0 ? '#ffffffd9' : '#ffffff26'} />
        </g>
      ))}
      {/* stat cards */}
      {[144, 312, 480].map((x, i) => (
        <g key={x}>
          <rect x={x} y="56" width="136" height="64" rx="10" fill="#151922" stroke="#ffffff14" />
          <rect x={x + 14} y="68" width="60" height="8" rx="4" fill="#ffffff33" />
          <rect x={x + 14} y="84" width={48 + i * 14} height="16" rx="6" fill={i === 1 ? tint : '#ffffffd9'} />
          <rect x={x + 96} y="66" width="28" height="14" rx="7" fill={`${tint}33`} />
        </g>
      ))}
      {/* chart */}
      <rect x="144" y="136" width="312" height="150" rx="10" fill="#151922" stroke="#ffffff14" />
      <rect x="160" y="150" width="90" height="9" rx="4.5" fill="#ffffff40" />
      <path
        d="M160 256 L208 232 L248 244 L290 200 L330 212 L372 176 L420 160"
        fill="none"
        stroke={tint}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M160 256 L208 232 L248 244 L290 200 L330 212 L372 176 L420 160 L420 272 L160 272 Z" fill={tint} opacity="0.08" />
      <circle cx="372" cy="176" r="5" fill={tint} />
      {/* bar chart */}
      <rect x="472" y="136" width="144" height="150" rx="10" fill="#151922" stroke="#ffffff14" />
      {[0, 1, 2, 3, 4].map((i) => {
        const heights = [44, 70, 36, 88, 58]
        return (
          <rect
            key={i}
            x={488 + i * 24}
            y={266 - heights[i]}
            width="14"
            height={heights[i]}
            rx="4"
            fill={tint}
            opacity={i === 3 ? 0.95 : 0.35}
          />
        )
      })}
      {/* table rows */}
      {[302, 330, 358].map((y, i) => (
        <g key={y}>
          <rect x="144" y={y} width="472" height="22" rx="6" fill={i === 0 ? '#ffffff0a' : '#ffffff05'} />
          <circle cx="162" cy={y + 11} r="6" fill={`${tint}59`} />
          <rect x="178" y={y + 6} width="110" height="9" rx="4.5" fill="#ffffff40" />
          <rect x="330" y={y + 6} width="70" height="9" rx="4.5" fill="#ffffff26" />
          <rect x="540" y={y + 5} width="56" height="12" rx="6" fill={i === 1 ? `${tint}40` : '#ffffff14'} />
        </g>
      ))}
    </g>
  )
}

function ApiScene({ tint }: { tint: string }) {
  const codeLines: Array<[number, number, string]> = [
    [40, 70, '#ffffff40'],
    [56, 120, `${tint}cc`],
    [56, 90, '#ffffff30'],
    [72, 150, '#ffffff30'],
    [72, 70, `${tint}88`],
    [56, 110, '#ffffff30'],
    [40, 60, '#ffffff40'],
  ]
  return (
    <g>
      {/* editor */}
      <rect x="24" y="56" width="340" height="316" rx="12" fill="#11141a" stroke="#ffffff14" />
      <rect x="40" y="72" width="96" height="22" rx="6" fill={`${tint}26`} />
      <text x="52" y="87" fontFamily="ui-monospace, monospace" fontSize="12" fill={tint}>
        POST /quote
      </text>
      {codeLines.map(([indent, width, color], i) => (
        <g key={i}>
          <text x="44" y={124 + i * 26} fontFamily="ui-monospace, monospace" fontSize="11" fill="#ffffff26">
            {i + 1}
          </text>
          <rect x={40 + indent} y={114 + i * 26} width={width} height="10" rx="5" fill={color} />
        </g>
      ))}
      <rect x="96" y={114 + 7 * 26} width="8" height="14" rx="2" fill={tint} />
      {/* response panel */}
      <rect x="388" y="56" width="228" height="206" rx="12" fill="#151922" stroke="#ffffff14" />
      <rect x="404" y="72" width="64" height="22" rx="11" fill="#22c55e33" />
      <text x="416" y="87" fontFamily="ui-monospace, monospace" fontSize="12" fill="#4ade80">
        200 OK
      </text>
      {[116, 140, 164, 188, 212].map((y, i) => (
        <rect
          key={y}
          x={i === 0 || i === 4 ? 404 : 420}
          y={y}
          width={i === 0 || i === 4 ? 16 : 120 + (i % 3) * 30}
          height="9"
          rx="4.5"
          fill={i % 2 === 1 ? `${tint}99` : '#ffffff30'}
        />
      ))}
      {/* latency badge */}
      <rect x="388" y="282" width="228" height="90" rx="12" fill="#151922" stroke="#ffffff14" />
      <text x="408" y="318" fontFamily="ui-monospace, monospace" fontSize="26" fontWeight="600" fill={tint}>
        58ms
      </text>
      <rect x="408" y="334" width="110" height="9" rx="4.5" fill="#ffffff33" />
      <path d="M540 340 l14 -18 l12 10 l16 -22" fill="none" stroke={tint} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  )
}

function LandingScene({ tint }: { tint: string }) {
  return (
    <g>
      <circle cx="320" cy="60" r="120" fill={tint} opacity="0.08" />
      {/* centered hero */}
      <rect x="250" y="66" width="140" height="20" rx="10" fill={`${tint}26`} />
      <rect x="150" y="104" width="340" height="24" rx="9" fill="#ffffffd9" />
      <rect x="190" y="138" width="260" height="24" rx="9" fill="#ffffffd9" />
      <rect x="210" y="178" width="220" height="10" rx="5" fill="#ffffff33" />
      <rect x="226" y="208" width="92" height="30" rx="15" fill={tint} />
      <rect x="330" y="208" width="92" height="30" rx="15" fill="none" stroke="#ffffff2e" strokeWidth="2" />
      {/* lighthouse scores */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={194 + i * 84} cy="296" r="26" fill="none" stroke="#22c55e" strokeWidth="3" opacity="0.9" />
          <text
            x={194 + i * 84}
            y="301"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="14"
            fontWeight="600"
            fill="#4ade80"
          >
            {[98, 100, 100, 100][i]}
          </text>
        </g>
      ))}
      {[168, 252, 336, 420].map((x, i) => (
        <rect key={x} x={x - 16} y="334" width="84" height="8" rx="4" fill="#ffffff26" opacity={i === 0 ? 1 : 0.8} />
      ))}
    </g>
  )
}

function InvoiceScene({ tint }: { tint: string }) {
  return (
    <g>
      {/* sidebar summary */}
      <rect x="24" y="56" width="180" height="316" rx="12" fill="#151922" stroke="#ffffff14" />
      <circle cx="52" cy="92" r="14" fill={`${tint}40`} />
      <rect x="76" y="80" width="80" height="10" rx="5" fill="#ffffffcc" />
      <rect x="76" y="96" width="56" height="8" rx="4" fill="#ffffff33" />
      {[140, 186, 232].map((y, i) => (
        <g key={y}>
          <rect x="40" y={y} width="148" height="34" rx="8" fill={i === 0 ? `${tint}1f` : '#ffffff08'} />
          <rect x="52" y={y + 9} width="60" height="7" rx="3.5" fill="#ffffff40" />
          <rect x="52" y={y + 20} width="40" height="7" rx="3.5" fill={i === 0 ? tint : '#ffffff26'} />
        </g>
      ))}
      {/* invoice document */}
      <rect x="228" y="56" width="388" height="316" rx="12" fill="#1a1e27" stroke="#ffffff14" />
      <rect x="252" y="80" width="110" height="14" rx="7" fill="#ffffffd9" />
      <rect x="252" y="102" width="70" height="8" rx="4" fill="#ffffff33" />
      <rect x="500" y="80" width="92" height="26" rx="13" fill={`${tint}33`} />
      <text x="516" y="98" fontFamily="ui-monospace, monospace" fontSize="13" fontWeight="600" fill={tint}>
        INV-042
      </text>
      <line x1="252" y1="136" x2="592" y2="136" stroke="#ffffff14" strokeWidth="1" />
      {[156, 190, 224].map((y, i) => (
        <g key={y}>
          <rect x="252" y={y} width={140 - i * 20} height="10" rx="5" fill="#ffffff40" />
          <rect x="252" y={y + 14} width="80" height="7" rx="3.5" fill="#ffffff1a" />
          <rect x={520 - i * 4} y={y + 2} width={72 + i * 4} height="11" rx="5.5" fill="#ffffff59" />
        </g>
      ))}
      <line x1="252" y1="268" x2="592" y2="268" stroke="#ffffff14" strokeWidth="1" />
      <rect x="252" y="286" width="60" height="12" rx="6" fill="#ffffff40" />
      <rect x="488" y="282" width="104" height="20" rx="8" fill={tint} opacity="0.9" />
      {/* PAID stamp */}
      <g transform="rotate(-12 380 330)">
        <rect x="330" y="312" width="100" height="36" rx="8" fill="none" stroke="#4ade80" strokeWidth="3" opacity="0.9" />
        <text x="352" y="337" fontFamily="ui-monospace, monospace" fontSize="18" fontWeight="700" fill="#4ade80" opacity="0.9">
          PAID
        </text>
      </g>
    </g>
  )
}

const scenes = {
  moving: MovingScene,
  ecommerce: HeelScene,
  dashboard: DashboardScene,
  api: ApiScene,
  landing: LandingScene,
  invoice: InvoiceScene,
} as const

export type ArtKind = keyof typeof scenes

export default function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const Scene = scenes[project.art]
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-elevated transition-transform duration-300 group-hover:scale-[1.02] ${className}`}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full"
        role="img"
        aria-label={`Preview illustration of ${project.title}`}
      >
        <Chrome tint={project.tint} />
        <Scene tint={project.tint} />
      </svg>
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ backgroundColor: `${project.tint}1f` }}
        aria-hidden="true"
      />
    </div>
  )
}
