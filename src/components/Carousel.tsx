import { useState, type CSSProperties } from 'react'
import { Icon } from './Icon'
import { Photo } from './Photo'

type CarouselProps = {
  photos: { src?: string; alt: string }[]
  /** How many photos are visible at once. */
  perView?: number
  className?: string
  /** Show each photo uncropped at its own shape, all at one shared height. */
  keepAspect?: boolean
}

const DEFAULT_RATIO = 4 / 3

export function Carousel({ photos, perView = 1, className = '', keepAspect = false }: CarouselProps) {
  const [start, setStart] = useState(0)
  const [ratios, setRatios] = useState<Record<string, number>>({})
  const count = photos.length
  const visible = Array.from({ length: Math.min(perView, count) }, (_, i) => photos[(start + i) % count])
  const step = (delta: number) => setStart((s) => (s + delta + count) % count)

  return (
    <div className={`carousel ${className}`} style={{ '--per-view': Math.min(perView, count) } as CSSProperties}>
      {keepAspect ? (
        <div className="carousel__track carousel__track--natural">
          {visible.map((p, i) => {
            const ratio = (p.src && ratios[p.src]) || DEFAULT_RATIO
            return (
              <div key={`${start}-${i}`} className="carousel__cell" style={{ flex: `${ratio} 1 0`, aspectRatio: ratio }}>
                <Photo
                  src={p.src}
                  alt={p.alt}
                  onLoad={(img) => {
                    const r = img.naturalWidth / img.naturalHeight
                    if (p.src && r && ratios[p.src] !== r) setRatios((prev) => ({ ...prev, [p.src!]: r }))
                  }}
                />
              </div>
            )
          })}
        </div>
      ) : (
        <div className="carousel__track">
          {visible.map((p, i) => (
            <Photo key={`${start}-${i}`} src={p.src} alt={p.alt} />
          ))}
        </div>
      )}
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
