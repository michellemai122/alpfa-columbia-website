import { links } from '../data/site'
import { Icon, type IconName } from './Icon'
import { Logo } from './Logo'

const socials: { name: IconName; href: string; label: string }[] = [
  { name: 'instagram', href: links.instagram, label: 'Instagram' },
  { name: 'linkedin', href: links.linkedin, label: 'LinkedIn' },
  { name: 'tiktok', href: links.tiktok, label: 'TikTok' },
  { name: 'whatsapp', href: links.whatsapp, label: 'WhatsApp' },
  { name: 'mail', href: links.email, label: 'Email' },
]

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <Logo stacked />

        <div className="footer__newsletter">
          <h2>Stay Connected</h2>
          <p>Get chapter updates, opportunities, and event announcements.</p>
          <a className="btn btn--cream" href={links.lionhub} target="_blank" rel="noreferrer">
            Join our LionHub <Icon name="external" size={16} />
          </a>
        </div>

        <div className="footer__social">
          <div className="footer__icons">
            {socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                <Icon name={s.name} size={30} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© {year} ALPFA Columbia. All rights reserved.</p>
      </div>
    </footer>
  )
}
