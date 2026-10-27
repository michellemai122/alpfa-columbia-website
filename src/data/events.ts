export type EventCategory = 'Professional' | 'Leadership' | 'Community'

export type ChapterEvent = {
  title: string
  /** ISO date, e.g. 2026-09-17 */
  date: string
  category: EventCategory
  photo?: string
}

export const eventCategories: EventCategory[] = ['Professional', 'Leadership', 'Community']

export const pastEvents: ChapterEvent[] = [
  { title: 'Resume Workshop', date: '2026-09-02', category: 'Professional', photo: '/images/events/resume-workshop.jpg' },
  { title: 'Amazon × ALPFA', date: '2026-10-15', category: 'Professional', photo: '/images/events/amazon.jpg' },
  { title: "Moody's Office Visit", date: '2026-09-26', category: 'Professional', photo: '/images/events/moodys.jpg' },
  { title: "Pa'lante: Latinx Leadership Summit", date: '2026-09-13', category: 'Leadership', photo: '/images/events/palante.jpg' },
  { title: 'Community Picnic', date: '2026-10-14', category: 'Community', photo: '/images/events/picnic.jpg' },
  { title: 'Beyond the Prompt: AI Workshop', date: '2026-09-29', category: 'Professional', photo: '/images/events/ai-workshop.jpg' },
  { title: 'Consulting 101', date: '2026-10-06', category: 'Professional', photo: '/images/events/consulting-101.jpg' },
  { title: 'Tech 101', date: '2026-10-13', category: 'Professional', photo: '/images/events/tech-101.jpg' },
  { title: 'Finance 101', date: '2026-10-20', category: 'Professional', photo: '/images/events/finance-101.jpg' },
  { title: 'CareerSpring Workshop', date: '2026-10-22', category: 'Professional', photo: '/images/events/careerspring.jpg' },
  { title: 'ALPFAmilia Welcome Mixer', date: '2026-10-28', category: 'Community', photo: '/images/events/welcome-mixer.jpg' },
]

/** Events shown on the "Plan your next event" calendar. */
export const calendarEvents: { title: string; date: string; highlight?: boolean }[] = [
  { title: 'Activities Fair', date: '2026-09-12' },
  { title: 'Amazon × ALPFA', date: '2026-09-17', highlight: true },
  { title: 'Resume Workshop', date: '2026-09-22' },
  { title: 'ALPFAmilia Social', date: '2026-09-26' },
]

export const upcomingEvent = {
  title: 'Amazon × ALPFA',
  date: '2026-09-17',
  photo: '/images/events/amazon.jpg',
}

export function formatEventDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
}
