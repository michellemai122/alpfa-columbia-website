import { Carousel } from '../components/Carousel'
import { Icon, type IconName } from '../components/Icon'
import { Photo } from '../components/Photo'

const reasons: { icon: IconName; title: string; detail: string }[] = [
  { icon: 'briefcase', title: 'Recruiting', detail: 'Career fairs + interviews' },
  { icon: 'presentation', title: 'Professional Development', detail: 'Workshops + speakers' },
  { icon: 'chart', title: 'Opportunity', detail: 'Internships + full-time roles' },
]

const conventionStats = [
  { value: '80+', label: 'New connections, both student and professional' },
  { value: '100+', label: 'Corporate partners and companies' },
  { value: '15+', label: 'Fully funded students were able to attend convention' },
]

const memories = (slug: string, city: string) =>
  [1, 2, 3, 4, 5].map((n) => ({ src: `/images/convention/${slug}-${n}.jpg`, alt: `${city} convention memory ${n}` }))

const pastConventions = [
  {
    city: 'Las Vegas, NV',
    year: '2025',
    slug: 'las-vegas',
    text: 'Our 2025 convention in Las Vegas brought together students and professionals for unforgettable networking, leadership development, and new opportunities.',
  },
  {
    city: 'Charlotte, NC',
    year: '2026',
    slug: 'charlotte',
    text: 'Our 2026 convention in Charlotte was a launchpad for growth, innovation, and community, uniting students, professionals, and corporate partners from across the country.',
  },
]

export function Convention() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <p className="eyebrow eyebrow--red">ALPFA Experience</p>
            <h1 className="display display--light">
              ALPFA
              <br />
              Convention<span className="dot">.</span>
            </h1>
            <p className="page-hero__cities">
              <span>Las Vegas 2025</span>
              <span>Charlotte 2026</span>
              <span>Orlando 2027</span>
            </p>
          </div>
          <Photo className="page-hero__photo" src="/images/convention/hero.jpg" alt="Members at the ALPFA convention" grayscale />
        </div>
      </section>

      <section className="container split">
        <div>
          <p className="eyebrow eyebrow--red">Why attend</p>
          <h2 className="display display--lg">
            What is
            <br />
            convention<span className="dot">?</span>
          </h2>
          <p className="lede">
            ALPFA Convention brings together students, professionals, and corporate partners for recruiting,
            networking, workshops, and leadership development.
          </p>
          <ul className="reasons">
            {reasons.map((r) => (
              <li key={r.title}>
                <span className="reasons__icon">
                  <Icon name={r.icon} size={28} />
                </span>
                <strong>{r.title}</strong>
                <small>{r.detail}</small>
              </li>
            ))}
          </ul>
        </div>
        <Photo className="rounded tall" src="/images/convention/why-attend.jpg" alt="Members at convention" />
      </section>

      <section className="container split split--top">
        <div>
          <p className="eyebrow eyebrow--red">Getting there</p>
          <h2 className="display display--md">
            ALPFA NY Scholarships<span className="dot">.</span>
          </h2>
          <p className="lede">
            Thanks to ALPFA NY, Columbia students have received support to attend convention, making it possible for
            more members to access networking, career opportunities, and the full ALPFA experience.
          </p>
          <Photo className="rounded" src="/images/convention/scholarship.jpg" alt="Scholarship check presentation" />
        </div>
        <div className="stack">
          <aside className="thanks-card">
            <h3>A stronger tomorrow together</h3>
            <span className="rule" />
            <p>
              Thanks to ALPFA NY, Columbia students have received support to attend convention. Their investment helps
              reduce barriers and makes it possible for more members to access networking, career opportunities, and
              the full ALPFA experience.
            </p>
            <p>
              <strong>Thank you, ALPFA NY.</strong>
            </p>
          </aside>
          <div>
            <p className="eyebrow eyebrow--yellow">Convention by the numbers</p>
            <div className="mini-stats">
              {conventionStats.map((s) => (
                <div key={s.value}>
                  <strong>{s.value}</strong>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container journey">
        <p className="eyebrow eyebrow--yellow">Our journey</p>
        <h2 className="display display--lg">
          Where ALPFA has taken us<span className="dot">.</span>
        </h2>
        <p className="lede">
          Three cities. A growing community. A bigger tomorrow. Each convention has opened new doors, created lasting
          connections, and moved our chapter forward.
        </p>

        {pastConventions.map((c) => (
          <article key={c.slug} className="trip">
            <div className="trip__head">
              <div>
                <h3 className="trip__city">
                  <Icon name="pin" size={44} className="trip__pin" strokeWidth={2} />
                  <span>
                    {c.city}
                    <small>{c.year}</small>
                  </span>
                </h3>
                <span className="rule" />
                <p>{c.text}</p>
              </div>
              <Photo className="rounded" src={`/images/convention/${c.slug}-main.jpg`} alt={`${c.city} convention`} />
            </div>
            <p className="eyebrow eyebrow--yellow">{c.city.split(',')[0]} memories</p>
            <Carousel photos={memories(c.slug, c.city)} strip className="trip__carousel" />
          </article>
        ))}

        <aside className="next-stop">
          <div>
            <p className="eyebrow eyebrow--red">Next stop:</p>
            <h3 className="display display--md">
              Orlando<span className="dot">.</span>
            </h3>
            <p className="next-stop__sub">ALPFA Convention 2027</p>
            <p className="next-stop__place">
              <Icon name="pin" size={20} /> Orlando, Florida
            </p>
            <a className="btn btn--navy" href="https://www.alpfa.org/event-convention" target="_blank" rel="noreferrer">
              Coming soon <Icon name="arrow-right" size={18} />
            </a>
          </div>
          <Icon name="plane" size={48} className="next-stop__plane" />
        </aside>
      </section>
    </>
  )
}
