import { Photo } from '../components/Photo'
import { links } from '../data/site'

const familiaCards = [
  { label: 'Connect', src: '/images/programs/connect.jpg' },
  { label: 'Make memories', src: '/images/programs/memories.jpg' },
  { label: 'Grow together', src: '/images/programs/grow.jpg' },
]

const winners = [
  { label: 'Dinner together', src: '/images/programs/winners-dinner-2026.jpg' },
  { label: 'Pilates celebration', src: '/images/programs/winners-pilates.jpg' },
]

export function Programs() {
  return (
    <>
      <section className="container section-head">
        <p className="eyebrow eyebrow--red">Our programs</p>
        <h1 className="display display--lg">
          Grow with ALPFA<span className="dot">.</span>
        </h1>
        <p className="lede">Find your community. Build your confidence. Grow together.</p>
      </section>

      <section className="container familia">
        <div className="split">
          <div>
            <p className="eyebrow eyebrow--red">Find your familia</p>
            <h2 className="display display--lg">ALPFAmilia</h2>
            <p className="lede">
              Find your people in small groups led by board members. Build friendships, find mentorship, and earn
              points through meetups and activities throughout the year.
            </p>
            <p className="lede">Open to everyone. A whole year of connection.</p>
          </div>
          <Photo className="rounded" src="/images/programs/familia.jpg" alt="ALPFAmilia group on campus" />
        </div>
        <div className="familia__cards">
          {familiaCards.map((c) => (
            <figure key={c.label}>
              <Photo className="rounded" src={c.src} alt={c.label} />
              <figcaption>{c.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="winners">
          <h2 className="display display--md display--red">Last year&rsquo;s winning familia!</h2>
          <p>A year of memories. A well-earned celebration.</p>
          <div className="winners__grid">
            {winners.map((w) => (
              <figure key={w.label}>
                <Photo src={w.src} alt={w.label} />
                <figcaption>{w.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container analyst">
        <h2 className="display display--lg">
          Analyst Program<span className="dot dot--ice">.</span>
        </h2>
        <div className="analyst__panel">
          <span className="analyst__stamp">Launching soon</span>
          <p className="analyst__note">
            <strong>Get ready!</strong> We&rsquo;ve been building <em>finance and tech</em> <strong>analyst programs</strong>{' '}
            made for <em>YOU</em>, real hands-on experience and preparation await. These programs are{' '}
            <strong>shaped by <em>early interest</em></strong>, so <strong>don&rsquo;t miss your chance</strong> to help
            decide what we build. Head to our{' '}
            <a href={links.lionhub} target="_blank" rel="noreferrer">
              LionHub
            </a>
            !
          </p>
        </div>
      </section>
    </>
  )
}
