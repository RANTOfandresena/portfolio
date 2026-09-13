import { owner } from '../data/portfolio'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <span className="section-subtitle">Prenons le contact</span>

      <div className="contact-container container grid">
        <div className="contact-items">
          <div className="contact-information">
            <div className="contact-details">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div></div>
              <span className="contact-subtitle">{owner.address}</span>
            </div>
          </div>

          <div className="contact-information">
            <div className="contact-details">
              <i className="fas fa-phone contact-icon"></i>
              <div></div>
              <span className="contact-subtitle">{owner.phone}</span>
            </div>
          </div>

          <div className="contact-information">
            <a href={`mailto:${owner.email}`}>
              <div className="contact-details">
                <i className="far fa-envelope contact-icon"></i>
                <div></div>
                <span className="contact-subtitle">{owner.email}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
