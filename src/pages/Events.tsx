import { useMemo, useState } from 'react'
import { Icon } from '../components/Icon'
import { Photo } from '../components/Photo'
import {
  calendarEvents,
  eventCategories,
  formatEventDate,
  pastEvents,
  upcomingEvent,
  type EventCategory,
} from '../data/events'
import { links } from '../data/site'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function MonthCalendar({ year, month }: { year: number; month: number }) {
  const cells = useMemo(() => {
    const first = new Date(year, month, 1)
    const startOffset = first.getDay()
    return Array.from({ length: 35 }, (_, i) => new Date(year, month, 1 - startOffset + i))
  }, [year, month])

  const eventsByDay = useMemo(() => {
    const map = new Map<string, typeof calendarEvents>()
    for (const e of calendarEvents) map.set(e.date, [...(map.get(e.date) ?? []), e])
    return map
  }, [])

  const title = new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <div className="calendar">
      <div className="calendar__bar">
        <strong>{title}</strong>
        <small>Events shown in Eastern Time - New York</small>
      </div>
      <div className="calendar__grid">
        {WEEKDAYS.map((d) => (
          <span key={d} className="calendar__weekday">
            {d}
          </span>
        ))}
        {cells.map((d) => {
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
          return (
            <div key={key} className={`calendar__cell ${d.getMonth() !== month ? 'is-muted' : ''}`}>
              <span>{d.getDate()}</span>
              {eventsByDay.get(key)?.map((e) => (
                <span key={e.title} className={`calendar__event ${e.highlight ? 'is-highlight' : ''}`}>
                  {e.title}
                </span>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Events() {
  const [filter, setFilter] = useState<EventCategory | 'All'>('All')
  const shown = (filter === 'All' ? pastEvents : pastEvents.filter((e) => e.category === filter)).toSorted((a, b) =>
    a.date.localeCompare(b.date),
  )
  const upcomingDate = new Date(`${upcomingEvent.date}T12:00:00`)

  return (
    <>
      <section className="container events-hero">
        <div>
          <h1 className="display display--xl stacked-words">
            <span>
              Show up<span className="dot dot--ice">.</span>
            </span>
            <span>
              Connect<span className="dot dot--red">.</span>
            </span>
            <span>
              Grow<span className="dot">.</span>
            </span>
          </h1>
          <p className="lede">From career-building conversations to moments that bring our ALPFAMILIA together.</p>
        </div>
        <Photo className="rounded events-hero__photo" src="/images/events/hero.jpg" alt="Members talking at a networking event" />
      </section>

      <section className="container plan">
        <div>
          <h2 className="display display--md">
            Plan your next event<span className="dot dot--red">.</span>
          </h2>
          <p className="lede">View upcoming programs, workshops, and community gatherings in one place.</p>
          <MonthCalendar year={upcomingDate.getFullYear()} month={upcomingDate.getMonth()} />
          <a className="btn btn--outline" href={links.googleCalendar} target="_blank" rel="noreferrer">
            <Icon name="calendar" size={18} /> Add ALPFA calendar
          </a>
        </div>
        <aside className="upcoming">
          <p className="eyebrow">Next upcoming event</p>
          <h3 className="display display--md display--light">{upcomingEvent.title}</h3>
          <p className="upcoming__date">
            <Icon name="calendar" size={18} />
            {upcomingDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </p>
          <Photo className="rounded" src={upcomingEvent.photo} alt={upcomingEvent.title} />
        </aside>
      </section>

      <section className="container explore">
        <h2 className="display display--md">
          Explore our events<span className="dot">.</span>
        </h2>
        <p className="lede">Browse past events and relive the moments that make our chapter special.</p>
        <div className="chips" role="tablist">
          {(['All', ...eventCategories] as const).map((c) => (
            <button key={c} role="tab" aria-selected={filter === c} className={`chip ${filter === c ? 'is-active' : ''}`} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="event-grid">
          {shown.map((e) => (
            <article key={e.title} className="event-card">
              <Photo src={e.photo} alt={e.title} />
              <div className="event-card__body">
                <small>{formatEventDate(e.date)}</small>
                <h3>{e.title}</h3>
                <span className={`tag tag--${e.category.toLowerCase()}`}>{e.category}</span>
              </div>
            </article>
          ))}
        </div>
        <a className="idea" href={links.shareEventIdea} target="_blank" rel="noreferrer">
          <span className="idea__bulb">💡</span>
          <span>
            <strong>Have an Event Idea?</strong>
            <small>Share an idea</small>
          </span>
          <Icon name="chevron-right" size={18} />
        </a>
      </section>
    </>
  )
}
