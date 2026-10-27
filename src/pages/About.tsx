import { Icon } from '../components/Icon'
import { Photo } from '../components/Photo'
import { links } from '../data/site'

const timeline = [
  { year: '1972', text: 'ALPFA begins as a national organization advancing Latino professionals.' },
  { year: '2022', text: 'ALPFA Columbia is founded, bringing that mission to campus.' },
  { year: 'Today', text: 'A growing community across majors, experiences, and career interests.' },
]

const gallery = [
  { label: 'Our Community', src: '/images/about/community.jpg', featured: true },
  { label: 'Networking', src: '/images/about/networking.jpg' },
  { label: 'Leadership', src: '/images/about/leadership.jpg' },
  { label: 'Campus Events', src: '/images/about/campus-events.jpg' },
  { label: 'Growing Together', src: '/images/about/growing-together.jpg' },
]

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <p className="eyebrow eyebrow--yellow">Nosotros</p>
            <h1 className="display display--light">
              Who we are<span className="dot dot--red">.</span>
            </h1>
            <p>
              ALPFA Columbia is a place to build your future without leaving your culture or community at the door.
            </p>
          </div>
          <Photo className="page-hero__photo" src="/images/about/hero.jpg" alt="ALPFA Columbia chapter photo" grayscale />
        </div>
      </section>

      <section className="container timeline-section">
        <h2 className="display display--md display--red center">From a national movement to our campus.</h2>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.year}>
              <span className="timeline__dot" />
              <strong>{t.year}</strong>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mission">
        <div className="container">
          <p className="eyebrow eyebrow--yellow">Join our ALPFAmilia</p>
          <h2 className="display display--md display--light">Campus community. National reach.</h2>
          <p>
            Founded in <strong>2022</strong>, ALPFA Columbia has grown into a community of{' '}
            <strong>80+ active members</strong> from diverse backgrounds, majors, and experiences. Through{' '}
            <strong>professional development, cultural events, company visits, mentorship, and networking</strong>, we
            create spaces to celebrate our community while opening doors to what&rsquo;s next.
          </p>
          <p>
            Our <strong>ALPFAmilia goes beyond Columbia</strong>. As part of <strong>ALPFA&rsquo;s national network</strong>,
            our members gain access to thousands of students, professionals, companies, and chapters across the country,
            turning a campus community into <strong>connections and opportunities nationwide.</strong>
          </p>
          <a className="btn btn--cream mission__cta" href={links.alpfaNational} target="_blank" rel="noreferrer">
            Join ALPFA National <Icon name="external" size={16} />
          </a>
        </div>
      </section>

      <section className="container life">
        <h2 className="display display--md">Life at ALPFA Columbia</h2>
        <p className="lede">A look at the people, events, and community behind our chapter.</p>
        <div className="life__grid">
          {gallery.map((g) => (
            <figure key={g.label} className={`life__tile ${g.featured ? 'life__tile--featured' : ''}`}>
              <Photo src={g.src} alt={g.label} />
              <figcaption>{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
