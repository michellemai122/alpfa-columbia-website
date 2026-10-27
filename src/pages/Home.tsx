import { Link } from 'react-router-dom'
import { Carousel } from '../components/Carousel'
import { Faq } from '../components/Faq'
import { Icon } from '../components/Icon'
import { Photo } from '../components/Photo'
import { faq } from '../data/faq'
import { memberOfTheMonth, nextEvent, stats } from '../data/site'

const heroPhotos = [
  { src: '/images/hero-1.jpg', alt: 'ALPFA Columbia members on the Low Library steps' },
  { src: '/images/hero-2.jpg', alt: 'ALPFA Columbia members at a chapter event' },
  { src: '/images/hero-3.jpg', alt: 'ALPFA Columbia members networking' },
]

export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero__copy">
          <h1 className="display">
            Empowering
            <br />
            the next
            <br />
            Latino leaders<span className="dot">.</span>
          </h1>
          <Link className="next-up" to="/events">
            <span className="next-up__icon">
              <Icon name="calendar" size={20} />
            </span>
            <span className="next-up__text">
              <small>Next up</small>
              <strong>{nextEvent.title}</strong>
            </span>
            <span className="next-up__date">{nextEvent.date}</span>
            <Icon name="chevron-right" size={18} />
          </Link>
        </div>
        <Carousel className="hero__carousel" photos={heroPhotos} />
      </section>

      <p className="tagline container">More than a network. A community built to grow.</p>

      <section className="numbers">
        <div className="container">
          <p className="eyebrow eyebrow--yellow center">ALPFA by the numbers</p>
          <div className="numbers__grid">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
                <Icon name={s.icon} size={34} strokeWidth={1.4} />
              </div>
            ))}
          </div>

          <article className="motm">
            <Photo
              className="motm__photo member__photo"
              src={memberOfTheMonth.photo}
              alt={`${memberOfTheMonth.month} member of the month`}
              placeholder="?"
            />
            <div className="motm__body">
              <h2 className="motm__title">
                Member <span className="script">of the</span> Month
              </h2>
              <p className="motm__detail">{memberOfTheMonth.detail}</p>
              <blockquote>
                <Icon name="quote" size={22} strokeWidth={2.5} />
                <p>{memberOfTheMonth.quote}</p>
              </blockquote>
              <p className="motm__recognition">{memberOfTheMonth.recognition}</p>
            </div>
          </article>
        </div>
      </section>


      <section className="container faq-section">
        <h2 className="display display--md underline">
          Frequently asked
          <br />
          questions
        </h2>
        <Faq items={faq} />
      </section>
    </>
  )
}
