type LogoProps = { stacked?: boolean }

/** Stand-in for the ALPFA Columbia mark; swap the SVG for the official logo file when available. */
export function Logo({ stacked = false }: LogoProps) {
  const mark = (
    <svg className="logo__mark" viewBox="0 0 120 100" aria-hidden="true">
      <path d="M58 4 L104 92 L84 92 L58 40 L30 92 L8 92 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M58 4 L44 60" stroke="currentColor" strokeWidth="5" />
      <text x="60" y="76" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="18" fill="currentColor">
        ALPFA
      </text>
      <path d="M86 84 l4 -8 l4 6 l4 -6 l4 6 l4 -6 l4 8 z" fill="currentColor" />
    </svg>
  )

  if (stacked) {
    return (
      <div className="logo logo--stacked">
        {mark}
        <p className="logo__caption">
          <strong>COLUMBIA</strong> CHAPTER
        </p>
      </div>
    )
  }

  return (
    <div className="logo">
      {mark}
      <span className="logo__divider" />
      <p className="logo__text">
        COLUMBIA
        <br />
        <span>CHAPTER</span>
      </p>
    </div>
  )
}
