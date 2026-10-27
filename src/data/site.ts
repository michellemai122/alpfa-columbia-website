// Site-wide links. Replace the "#" placeholders with the chapter's real URLs.
export const links = {
  /** Columbia LionHub page: members join here and get the newsletter. */
  lionhub: '#',
  instagram: 'https://www.instagram.com/alpfacolumbia/',
  linkedin: 'https://www.linkedin.com/in/alpfacolumbiauniversity/',
  tiktok: 'https://www.tiktok.com/@cualpfa',
  whatsapp: 'https://chat.whatsapp.com/BVmsSk4fj4YLRbexd43Bkn',
  email: 'mailto:communicationsalpfacolumbia@gmail.com',
  googleCalendar: '#',
  /** Columbia SecurePay page where sponsors pick a tier and pay. */
  sponsorshipPayment: 'https://securepay.cuit.columbia.edu/payment/pub/hts5637FGer35WTIS/',
  sponsorshipPackage: '/ALPFA-Columbia-Sponsorship-Package-2026-2027.pdf',
  shareEventIdea: '#',
} as const

export type NavItem = { label: string; to: string; external?: boolean }

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Convention', to: '/convention' },
  { label: 'Events', to: '/events' },
  { label: 'Team', to: '/team' },
]

export const stats = [
  { value: '2022', label: 'Reestablished at Columbia', icon: 'calendar' },
  { value: '83', label: 'Active members', icon: 'people' },
  { value: '20+', label: 'Yearly events', icon: 'ticket' },
  { value: '100K+', label: 'National ALPFAmilia', icon: 'globe' },
] as const

export const nextEvent = {
  title: 'Amazon × ALPFA',
  date: 'September 17',
}

export const memberOfTheMonth = {
  month: 'October',
  name: 'Member of the Month',
  // Placeholder until this month's member is chosen.
  detail: 'Name • Major • Class of 20XX',
  quote: 'Member quote goes here.',
  recognition: 'Why they were recognized goes here.',
  photo: '/images/member-of-the-month.jpg',
}

/** Not shown right now: the Home "Our Network" section was removed until real partner logos are ready. */
export const networkLogos = [
  { name: 'Google', src: '/images/logos/google.png' },
  { name: 'Amazon', src: '/images/logos/amazon.png' },
  { name: 'Bank of America', src: '/images/logos/bank-of-america.png' },
  { name: 'UBS', src: '/images/logos/ubs.png' },
  { name: 'Visa', src: '/images/logos/visa.png' },
  { name: 'PwC', src: '/images/logos/pwc.png' },
]
