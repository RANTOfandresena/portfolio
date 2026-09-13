import { footerLinks, owner } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div className="footer-texts">
            <h1 className="footer-title">{owner.brand}</h1>
            <span className="footer-subtitle">developpeur</span>
          </div>

          <ul className="footer-links">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="footer-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-socials">
            <a href={owner.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in footer-social"></i>
            </a>
            <a href={`mailto:${owner.email}`}>
              <i className="far fa-envelope contact-icon"></i>
            </a>
          </div>
        </div>

        <p className="footer-copy">&#169; {owner.brand}</p>
      </div>
    </footer>
  )
}
