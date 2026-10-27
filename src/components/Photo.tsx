import { useState } from 'react'

type PhotoProps = {
  src?: string
  alt: string
  className?: string
  grayscale?: boolean
}

/** An image that falls back to a branded placeholder until the real photo is added to /public/images. */
export function Photo({ src, alt, className = '', grayscale = false }: PhotoProps) {
  const [failed, setFailed] = useState(false)
  const classes = `photo ${grayscale ? 'photo--gray' : ''} ${className}`.trim()

  if (!src || failed) {
    return (
      <div className={`${classes} photo--placeholder`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    )
  }

  return <img className={classes} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
