import { techSkills } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">compétences</h2>

      <div className="skills-container container grid" style={{ maxWidth: 'max-content' }}>
        <div className="tech-section">
          {techSkills.map(({ label, variant }) => (
            <h3 className={`tech-item ${variant}`} key={variant}>
              {label}
            </h3>
          ))}
        </div>
      </div>
    </section>
  )
}
