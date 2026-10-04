// Carro de lado com os vidros escurecidos conforme a opacidade da película
export default function CarTint({ opacity = 0.6, className = '' }) {
  return (
    <svg viewBox="0 0 640 260" className={`car-tint ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="ct-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9ecef" />
          <stop offset=".55" stopColor="#b9c0c7" />
          <stop offset="1" stopColor="#7d858d" />
        </linearGradient>
        <linearGradient id="ct-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d6ecff" />
          <stop offset="1" stopColor="#a9c6dc" />
        </linearGradient>
        <radialGradient id="ct-wheel" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#8a9198" />
          <stop offset=".45" stopColor="#3b4046" />
          <stop offset=".5" stopColor="#15181b" />
          <stop offset="1" stopColor="#0b0c0e" />
        </radialGradient>
      </defs>
      <ellipse cx="320" cy="232" rx="270" ry="12" fill="#000" opacity=".45" />
      {/* carroceria */}
      <path d="M40 190 C40 160 60 146 100 140 L170 132 L230 78 C246 64 266 58 290 58 H400 C428 58 448 66 466 82 L522 132 L572 142 C596 148 606 162 606 182 V196 C606 206 598 212 588 212 H52 C45 212 40 205 40 196 Z" fill="url(#ct-body)" />
      {/* vidros: fundo claro (o que se vê através) */}
      <path d="M186 132 L240 86 C252 76 266 72 284 72 H332 V132 Z" fill="url(#ct-sky)" />
      <path d="M346 72 H398 C420 72 436 78 450 90 L500 132 H346 Z" fill="url(#ct-sky)" />
      {/* película */}
      <g className="tint-layer" style={{ opacity }}>
        <path d="M186 132 L240 86 C252 76 266 72 284 72 H332 V132 Z" fill="#0b0d10" />
        <path d="M346 72 H398 C420 72 436 78 450 90 L500 132 H346 Z" fill="#0b0d10" />
      </g>
      {/* reflexo */}
      <path d="M250 80 L220 128 H236 L266 80 Z" fill="#fff" opacity=".22" />
      <path d="M380 76 L352 128 H364 L392 76 Z" fill="#fff" opacity=".16" />
      {/* friso e maçanetas */}
      <path d="M70 160 H590" stroke="#9aa2aa" strokeWidth="2" />
      <rect x="300" y="146" width="26" height="5" rx="2.5" fill="#6d757d" />
      <rect x="430" y="146" width="26" height="5" rx="2.5" fill="#6d757d" />
      <path d="M572 150 L600 156 L600 168 L580 166 Z" fill="var(--accent)" opacity=".9" />
      <path d="M44 156 L66 152 L66 166 L46 168 Z" fill="#c0392b" opacity=".85" />
      {/* rodas */}
      <circle cx="150" cy="210" r="36" fill="url(#ct-wheel)" />
      <circle cx="490" cy="210" r="36" fill="url(#ct-wheel)" />
      <circle cx="150" cy="210" r="10" fill="#2a2e33" />
      <circle cx="490" cy="210" r="10" fill="#2a2e33" />
    </svg>
  )
}
