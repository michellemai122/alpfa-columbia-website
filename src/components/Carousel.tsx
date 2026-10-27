import { useRef, useState, type CSSProperties } from 'react'
import { Icon } from './Icon'
import { Photo } from './Photo'

type CarouselProps = {
  photos: { src?: string; alt: string }[]
  /** How many photos are visible at once. */
  perView?: number
  className?: string
  /** Show every photo uncropped at one fixed height in a smoothly scrolling strip (perView is ignored). */
  strip?: boolean
}

export function Carousel({ photos, perView = 1, className = '', strip = false }: CarouselProps) {
  const [start, setStart] = useState(0)
  const stripRef = useRef<HTMLDivElement>(null)
  const count = photos.length
  const visible = Array.from({ length: Math.min(perView, count) }, (_, i) => photos[(start + i) % count])

  const step = (delta: number) => {
    const el = stripRef.current
    if (!el) {
      setStart((s) => (s + delta + count) % count)
      return
    }
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
    const atStart = el.scrollLeft <= 2
    if (delta > 0 && atEnd) el.scrollTo({ left: 0 })
    else if (delta < 0 && atStart) el.scrollTo({ left: el.scrollWidth })
    else el.scrollBy({ left: delta * el.clientWidth * 0.6 })
  }

  const hasArrows = strip || count > perView

  return (
    <div className={`carousel ${className}`} style={{ '--per-view': Math.min(perView, count) } as CSSProperties}>
      {strip ? (
        <div ref={stripRef} className="carousel__strip">
          {photos.map((p) => (
            <Photo key={p.src ?? p.alt} src={p.src} alt={p.alt} />
          ))}
        </div>
      ) : (
        <div className="carousel__track">
          {visible.map((p, i) => (
            <Photo key={`${start}-${i}`} src={p.src} alt={p.alt} />
          ))}
        </div>
      )}
      {hasArrows && (
        <>
          <button className="carousel__btn carousel__btn--prev" aria-label="Previous photo" onClick={() => step(-1)}>
            <Icon name="chevron-left" size={28} strokeWidth={2.5} />
          </button>
          <button className="carousel__btn carousel__btn--next" aria-label="Next photo" onClick={() => step(1)}>
            <Icon name="chevron-right" size={28} strokeWidth={2.5} />
          </button>
        </>
      )}
    </div>
  )
}
