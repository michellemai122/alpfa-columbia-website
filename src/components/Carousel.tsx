import { useState, type CSSProperties } from 'react'
import { Icon } from './Icon'
import { Photo } from './Photo'

type CarouselProps = {
  photos: { src?: string; alt: string }[]
  /** How many photos are visible at once. */
  perView?: number
  className?: string
}

export function Carousel({ photos, perView = 1, className = '' }: CarouselProps) {
  const [start, setStart] = useState(0)
  const count = photos.length
  const visible = Array.from({ length: Math.min(perView, count) }, (_, i) => photos[(start + i) % count])
  const step = (delta: number) => setStart((s) => (s + delta + count) % count)

  return (
    <div className={`carousel ${className}`} style={{ '--per-view': Math.min(perView, count) } as CSSProperties}>
      <div className="carousel__track">
        {visible.map((p, i) => (
          <Photo key={`${start}-${i}`} src={p.src} alt={p.alt} />
        ))}
      </div>
      {count > perView && (
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
