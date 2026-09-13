import { useState } from 'react'

import { education, work } from '../data/portfolio'

const tabs = [
  { id: 'education', icon: 'fas fa-graduation-cap', label: 'Formation', items: education },
  { id: 'work', icon: 'fas fa-briefcase', label: 'Experience', items: work },
]

function TimelineMarker() {
  return (
    <div>
      <span className="experience-rounder"></span>
      <span className="experience-line"></span>
    </div>
  )
}

function TimelineEntry({ title, subtitle, period, side }) {
  const content = (
    <div className="experience-data-alt">
      <h3 className="experience-title">{title}</h3>
      <span className="experience-subtitle">
        {subtitle.map((line, index) => (index === 0 ? line : [<br key={index} />, line]))}
      </span>
      <div className="experience-calendar">
        <i className="fas fa-calendar-alt"></i>
        {period}
      </div>
    </div>
  )

  return (
    <div className="experience-data">
      {side === 'left' ? (
        <>
          {content}
          <TimelineMarker />
        </>
      ) : (
        <>
          <div></div>
          <TimelineMarker />
          {content}
        </>
      )}
    </div>
  )
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work')

  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experience</h2>
      <span className="section-subtitle">Parcours professionnel</span>

      <div className="experience-container container">
        <div className="experience-tabs">
          {tabs.map(({ id, icon, label }) => (
            <div
              key={id}
              className={activeTab === id ? 'experience-tabs-button button-flex experience-active' : 'experience-tabs-button button-flex'}
              onClick={() => setActiveTab(id)}
            >
              <i className={`${icon} experience-icon`}></i>
              {label}
            </div>
          ))}
        </div>

        {/* `data-content` est le crochet utilisé par le CSS (.experience [data-content]) pour masquer le panneau inactif */}
        <div className="experience-sections">
          {tabs.map(({ id, items }) => (
            <div
              key={id}
              className={activeTab === id ? 'experience-content experience-active' : 'experience-content'}
              id={id}
              data-content="true"
            >
              {items.map((item) => (
                <TimelineEntry key={item.title} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
