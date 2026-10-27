import { asset } from '../lib/asset'

type LogoProps = { stacked?: boolean }

/** Official ALPFA Columbia mark (white version, for the navy navbar and footer). */
export function Logo({ stacked = false }: LogoProps) {
  const mark = <img className="logo__mark" src={asset('/images/logos/alpfa-columbia-white.png')} alt="ALPFA Columbia" />

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
