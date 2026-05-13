type Props = {
  variant?: "wings" | "salmon" | "mac" | "cornbread" | "greens" | "lamb"
  className?: string
}

// Stylized SVG "plates" — illustrated food cards used in lieu of photography.
export default function Plate({ variant = "mac", className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id={`plate-${variant}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FBF1DC" />
          <stop offset="100%" stopColor="#E8D9BB" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="#1A1410" opacity="0.08" />
      <circle cx="100" cy="100" r="86" fill={`url(#plate-${variant})`} stroke="#1A1410" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="#1A1410" strokeWidth="1" opacity="0.25" />
      {variant === "mac" && <Mac />}
      {variant === "wings" && <Wings />}
      {variant === "salmon" && <Salmon />}
      {variant === "cornbread" && <Cornbread />}
      {variant === "greens" && <Greens />}
      {variant === "lamb" && <Lamb />}
    </svg>
  )
}

function Mac() {
  const dots: Array<[number, number, number]> = []
  for (let i = 0; i < 80; i++) {
    const a = (i / 80) * Math.PI * 2
    const r = 30 + (i % 5) * 6
    dots.push([100 + Math.cos(a) * r * 0.9, 100 + Math.sin(a) * r * 0.9, 3 + (i % 3)])
  }
  return (
    <g>
      <circle cx="100" cy="100" r="55" fill="#E89B2C" />
      <circle cx="100" cy="100" r="55" fill="#F5C58E" opacity="0.55" />
      {dots.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r + 2} ry={r} fill="#E89B2C" stroke="#A8341C" strokeWidth="0.8" />
      ))}
      <path d="M70 85 Q100 70 130 85" stroke="#FBF1DC" strokeWidth="3" fill="none" opacity="0.6" />
    </g>
  )
}

function Wings() {
  return (
    <g>
      {[
        [80, 80, -20],
        [120, 85, 25],
        [85, 120, 15],
        [120, 120, -10],
        [100, 100, 5],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path
            d="M-22 -10 Q-15 -22 0 -18 Q15 -22 22 -10 Q22 12 0 18 Q-22 12 -22 -10 Z"
            fill="#A8341C"
            stroke="#1A1410"
            strokeWidth="1.5"
          />
          <path d="M-15 -8 Q0 -14 15 -8" stroke="#E89B2C" strokeWidth="2" fill="none" />
          <circle cx="-4" cy="-2" r="1.5" fill="#FBF1DC" opacity="0.6" />
        </g>
      ))}
      {[60, 130, 90, 110, 75, 125].map((x, i) => (
        <path
          key={i}
          d={`M${x} ${50 + (i % 3) * 6} q4 6 0 12`}
          stroke="#2F5D3B"
          strokeWidth="2"
          fill="none"
        />
      ))}
    </g>
  )
}

function Salmon() {
  return (
    <g>
      <path
        d="M55 110 Q70 70 130 65 Q160 75 150 115 Q140 145 95 140 Q60 135 55 110 Z"
        fill="#D24B2A"
        stroke="#1A1410"
        strokeWidth="2"
      />
      <path d="M70 100 Q100 85 140 95" stroke="#FBF1DC" strokeWidth="3" fill="none" opacity="0.55" />
      <path d="M70 115 Q100 105 140 115" stroke="#FBF1DC" strokeWidth="2.5" fill="none" opacity="0.45" />
      <circle cx="110" cy="60" r="6" fill="#7C8B3A" />
      <circle cx="80" cy="55" r="4" fill="#7C8B3A" />
      <path d="M70 140 q15 8 30 0" stroke="#E89B2C" strokeWidth="3" fill="none" />
    </g>
  )
}

function Cornbread() {
  return (
    <g>
      <rect x="60" y="65" width="80" height="70" rx="6" fill="#E89B2C" stroke="#1A1410" strokeWidth="2" />
      <rect x="60" y="65" width="80" height="14" fill="#A8341C" opacity="0.6" />
      <rect x="66" y="68" width="20" height="6" rx="2" fill="#F8E3B0" />
      <circle cx="100" cy="100" r="10" fill="#F8E3B0" />
      <circle cx="100" cy="100" r="10" fill="#F5C58E" opacity="0.5" />
      <path d="M75 130 q25 -10 50 0" stroke="#1A1410" strokeWidth="1.5" fill="none" opacity="0.3" />
    </g>
  )
}

function Greens() {
  const leaves: Array<[number, number, number]> = []
  for (let i = 0; i < 22; i++) {
    leaves.push([
      80 + Math.random() * 40,
      75 + Math.random() * 50,
      Math.random() * 360,
    ])
  }
  return (
    <g>
      <circle cx="100" cy="100" r="55" fill="#2F5D3B" />
      {leaves.map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="14"
          ry="6"
          fill="#7C8B3A"
          transform={`rotate(${r} ${x} ${y})`}
          opacity="0.85"
        />
      ))}
      <circle cx="105" cy="90" r="6" fill="#A8341C" stroke="#1A1410" strokeWidth="1" />
      <circle cx="92" cy="115" r="5" fill="#A8341C" stroke="#1A1410" strokeWidth="1" />
    </g>
  )
}

function Lamb() {
  return (
    <g>
      <path
        d="M70 130 L75 80 Q80 70 95 75 L100 130 Z"
        fill="#A8341C"
        stroke="#1A1410"
        strokeWidth="2"
      />
      <path
        d="M105 130 L110 80 Q115 70 130 75 L135 130 Z"
        fill="#A8341C"
        stroke="#1A1410"
        strokeWidth="2"
      />
      <ellipse cx="85" cy="80" rx="10" ry="6" fill="#FBF1DC" stroke="#1A1410" strokeWidth="1.5" />
      <ellipse cx="120" cy="80" rx="10" ry="6" fill="#FBF1DC" stroke="#1A1410" strokeWidth="1.5" />
      <path d="M65 140 q30 -8 70 0" stroke="#E89B2C" strokeWidth="4" fill="none" />
      {[80, 95, 110, 125].map((x, i) => (
        <ellipse key={i} cx={x} cy={148} rx="4" ry="2" fill="#2F5D3B" />
      ))}
    </g>
  )
}
