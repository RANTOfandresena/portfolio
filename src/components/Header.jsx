import { useState } from 'react'

import { navLinks, owner } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { useTheme } from '../hooks/useTheme'

const sectionIds = navLinks.map((link) => link.id)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrolled(80)
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className={scrolled ? 'header scroll-header' : 'header'} id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          {owner.brand}
        </a>

        {/* Navigation */}
        <div className={menuOpen ? 'nav-menu show-menu' : 'nav-menu'} id="nav-menu">
          <ul className="nav-list grid">
            {navLinks.map(({ id, href, icon, label }) => (
              <li className="nav-item" key={id}>
                <a
                  href={href}
                  className={activeSection === id ? 'nav-link active-link' : 'nav-link'}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className={`${icon} nav-link-icon`}></i> {label}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="fas fa-times nav-close"
            id="nav-close"
            role="button"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        <div className="nav-btns">
          {/* Theme toggler */}
          <i
            className={theme === 'dark' ? 'fas fa-sun change-theme' : 'fas fa-moon change-theme'}
            id="theme-button"
            role="button"
            aria-label="Changer de thème"
            onClick={toggleTheme}
          ></i>

          <div
            className="nav-toggle"
            id="nav-toggle"
            role="button"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
          >
            <i className="fas fa-qrcode"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}
