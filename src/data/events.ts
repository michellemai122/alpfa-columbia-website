export type EventCategory = 'Professional' | 'Leadership' | 'Community'

export type ChapterEvent = {
  title: string
  /** ISO date, e.g. 2026-09-17 */
  date: string
  category: EventCategory
  photo?: string
}

// Filter chips on the Events page. Add 'Leadership' back once an event uses it.
export const eventCategories: EventCategory[] = ['Professional', 'Community']

// Dates checked against the chapter's ALPFA 2026-2027 Google Calendar and photo timestamps.
export const pastEvents: ChapterEvent[] = [
  { title: 'Resume Workshop + Cafecito', date: '2026-09-15', category: 'Professional', photo: '/images/events/resume-workshop.svg' },
  { title: "Pa'lante 2026: Latinx Heritage Month Festival", date: '2026-09-19', category: 'Community', photo: '/images/events/palante.jpg' },
  { title: 'ALPFA Jeopardy', date: '2026-09-22', category: 'Community', photo: '/images/events/jeopardy.svg' },
  { title: 'Beyond the Prompt: AI Workshop', date: '2026-09-29', category: 'Professional', photo: '/images/events/ai-workshop.jpg' },
  { title: 'Consulting 101', date: '2026-10-06', category: 'Professional', photo: '/images/events/consulting-101.jpg' },
  { title: 'Tech 101', date: '2026-10-13', category: 'Professional', photo: '/images/events/tech-101.jpg' },
  { title: 'Amazon × ALPFA', date: '2026-10-15', category: 'Professional', photo: '/images/events/amazon.jpg' },
  { title: 'Night Market', date: '2026-10-18', category: 'Community', photo: '/images/events/night-market.svg' },
  { title: 'Finance 101', date: '2026-10-20', category: 'Professional', photo: '/images/events/finance-101.jpg' },
  { title: 'CareerSpring Workshop', date: '2026-10-22', category: 'Professional', photo: '/images/events/careerspring.jpg' },
]

export type UpcomingEvent = {
  title: string
  /** ISO date, e.g. 2026-11-05 */
  date: string
  /** 24-hour start and end times in New York time, e.g. "20:00" */
  start: string
  end: string
  location: string
}

/** Confirmed upcoming events, soonest first. The first one is featured on Home and highlighted on the calendar. */
export const upcomingEvents: UpcomingEvent[] = [
  { title: 'AlphaSights x ALPFA Columbia', date: '2026-11-05', start: '20:00', end: '21:00', location: 'Uris Hall 330' },
  { title: 'Plot Twist: ALPFA Columbia x HSA', date: '2026-11-10', start: '20:00', end: '21:00', location: 'Uris Hall 331' },
  { title: "Annual Women's Mixer", date: '2026-11-14', start: '17:00', end: '20:00', location: 'Lerner Hall, Satow Room' },
]

/** Events shown on the "Plan your next event" calendar. */
export const calendarEvents = upcomingEvents.map((e, i) => ({ title: e.title, date: e.date, highlight: i === 0 }))

function hour12(time: string): { label: string; period: string } {
  const [h, m] = time.split(':').map(Number)
  const label = `${h % 12 || 12}${m ? `:${String(m).padStart(2, '0')}` : ''}`
  return { label, period: h < 12 ? 'AM' : 'PM' }
}

/** "20:00", "21:00" -> "8–9 PM"; "11:00", "13:00" -> "11 AM–1 PM" */
export function formatTimeRange(start: string, end: string): string {
  const a = hour12(start)
  const b = hour12(end)
  return a.period === b.period ? `${a.label}–${b.label} ${b.period}` : `${a.label} ${a.period}–${b.label} ${b.period}`
}

/** Link that opens Google Calendar with this event pre-filled, so anyone can save it to their own calendar. */
export function googleCalendarUrl(e: UpcomingEvent): string {
  const stamp = (time: string) => `${e.date.replaceAll('-', '')}T${time.replace(':', '')}00`
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: e.title,
    dates: `${stamp(e.start)}/${stamp(e.end)}`,
    ctz: 'America/New_York',
    location: `${e.location}, Columbia University, New York, NY`,
    details: 'Hosted by ALPFA Columbia.',
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export function formatLongDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })
}

export function formatEventDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
}
