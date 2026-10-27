import { Photo } from '../components/Photo'
import { links } from '../data/site'
import { asset } from '../lib/asset'

export function Sponsors() {
  return (
    <>
      <section className="sponsor-hero">
        <div className="container sponsor-hero__inner">
          <div>
            <p className="eyebrow eyebrow--red">Corporate partnerships</p>
            <h1 className="display display--lg">
              Partner with us<span className="dot">.</span>
            </h1>
            <p className="lede">
              Connect your organization with a driven community of Columbia University students while investing in the
              next generation of leaders.
            </p>
            <div className="hero__actions">
              <a className="btn btn--red" href={links.sponsorshipPayment} target="_blank" rel="noreferrer">
                View sponsorship tiers
              </a>
              <a className="btn btn--navy" href={links.email}>
                Contact our team
              </a>
            </div>
          </div>
          <Photo className="sponsor-hero__photo" src="/images/sponsors-hero.jpg" alt="ALPFA Columbia members at PwC" />
        </div>
      </section>

      <section id="package" className="container package">
        <a className="package__cover" href={asset(links.sponsorshipPackage)} target="_blank" rel="noreferrer">
          <div className="package__title">
            ALPFA <small>at</small>
            <br />
            Columbia University
          </div>
          <Photo src="/images/sponsorship-cover.jpg" alt="Sponsorship package cover" />
          <div className="package__foot">
            <span>Sponsorship package</span>
            <span>2026–2027</span>
          </div>
        </a>
        <div>
          <h2 className="display display--md">Sponsorship package</h2>
          <p className="lede">
            See our sponsorship tiers, partnership benefits, and how your organization can get involved with ALPFA
            Columbia this year.
          </p>
          <a className="btn btn--navy" href={asset(links.sponsorshipPackage)} target="_blank" rel="noreferrer">
            Open the package
          </a>
        </div>
      </section>
    </>
  )
}
