import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/site'
import { Logo } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" onClick={close} aria-label="ALPFA Columbia home">
          <Logo />
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) =>
            item.external ? (
              <a key={item.label} href={item.to} target="_blank" rel="noreferrer" onClick={close}>
                {item.label}
              </a>
            ) : (
              <NavLink key={item.label} to={item.to} end={item.to === '/'} onClick={close}>
                {item.label}
              </NavLink>
            ),
          )}
          <Link className="btn btn--light btn--sm" to="/sponsors" onClick={close}>
            Become a Sponsor
          </Link>
        </nav>
      </div>
    </header>
  )
}
