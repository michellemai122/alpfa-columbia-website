import { useState, type ReactNode } from 'react'
import { asset } from '../lib/asset'

type PhotoProps = {
  src?: string
  alt: string
  className?: string
  grayscale?: boolean
  /** Shown instead of the alt text when the photo is missing. */
  placeholder?: ReactNode
}

/** An image that falls back to a branded placeholder until the real photo is added to /public/images. */
export function Photo({ src, alt, className = '', grayscale = false, placeholder }: PhotoProps) {
  const [failed, setFailed] = useState(false)
  const classes = `photo ${grayscale ? 'photo--gray' : ''} ${className}`.trim()

  if (!src || failed) {
    return (
      <div className={`${classes} photo--placeholder`} role="img" aria-label={alt}>
        <span>{placeholder ?? alt}</span>
      </div>
    )
  }

  return <img className={classes} src={asset(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
