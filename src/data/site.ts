// Site-wide links. Replace the "#" placeholders with the chapter's real URLs.
export const links = {
  /** Columbia LionHub page: members join here and get the newsletter. */
  /** ALPFA national membership sign-up / login. */
  alpfaNational: 'https://membership.alpfaplus.org/login',
  lionhub: 'https://lionhub.columbia.edu/AG003390/club_signup',
  instagram: 'https://www.instagram.com/alpfacolumbia/',
  linkedin: 'https://www.linkedin.com/in/alpfacolumbiauniversity/',
  tiktok: 'https://www.tiktok.com/@cualpfa',
  whatsapp: 'https://chat.whatsapp.com/BVmsSk4fj4YLRbexd43Bkn',
  email: 'mailto:communicationsalpfacolumbia@gmail.com',
  /** Columbia SecurePay page where sponsors pick a tier and pay. */
  sponsorshipPayment: 'https://securepay.cuit.columbia.edu/payment/pub/hts5637FGer35WTIS/',
  sponsorshipPackage: '/ALPFA-Columbia-Sponsorship-Package-2026-2027.pdf',
} as const

export type NavItem = { label: string; to: string; external?: boolean }

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Programs', to: '/programs' },
  { label: 'Convention', to: '/convention' },
  { label: 'Team', to: '/team' },
]

export const stats = [
  { value: '2022', label: 'Re-established at Columbia', icon: 'calendar' },
  { value: '100+', label: 'Active members', icon: 'people' },
  { value: '20+', label: 'Yearly events', icon: 'ticket' },
  { value: '100K+', label: 'National ALPFAmilia', icon: 'globe' },
] as const

export const memberOfTheMonth = {
  month: 'November',
  name: 'Marvin Fuentes',
  detail: "Marvin Fuentes • Financial Economics • CC'30",
  quote: "ALPFA has helped me meet some of my best friends, and I've been able to reconnect with my culture a lot more.",
  recognition: 'Recognized for his incredible attendance and addition to our community. Favorite ALPFA memory: the entire stop light party night.',
  photo: '/images/member-of-the-month-2026-11.jpg',
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
