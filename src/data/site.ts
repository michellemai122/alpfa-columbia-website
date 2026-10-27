// Site-wide links. Replace the "#" placeholders with the chapter's real URLs.
export const links = {
  linktree: '#',
  newsletter: '#',
  instagram: 'https://www.instagram.com/alpfacolumbia/',
  linkedin: 'https://www.linkedin.com/in/alpfacolumbiauniversity/',
  tiktok: '#',
  whatsapp: '#',
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
  { label: 'Join', to: links.linktree, external: true },
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
  detail: 'Finance Major • Class of 2026',
  quote:
    'ALPFA helped me find a community that challenges me to grow, lead, and create opportunities for others.',
  recognition:
    'Recognized for her leadership, mentorship, and dedication to the ALPFAMILIA.',
  photo: '/images/member-of-the-month.jpg',
}

export const networkLogos = [
  { name: 'Google', src: '/images/logos/google.png' },
  { name: 'Amazon', src: '/images/logos/amazon.png' },
  { name: 'Bank of America', src: '/images/logos/bank-of-america.png' },
  { name: 'UBS', src: '/images/logos/ubs.png' },
  { name: 'Visa', src: '/images/logos/visa.png' },
  { name: 'PwC', src: '/images/logos/pwc.png' },
]
