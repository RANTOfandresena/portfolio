import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { projects } from '../data/portfolio'
import ProjectModal from './ProjectModal'

/* Les démos "galerie" utilisent les images folder/1..total-1 */
function buildMedia(demo) {
  if (demo.type === 'video') return [{ type: 'video', src: demo.src }]

  return Array.from({ length: demo.total - 1 }, (_, index) => ({
    type: 'image',
    src: `/img/${demo.folder}/${index + 1}.jpg`,
  }))
}

export default function Projects() {
  const swiperRef = useRef(null)
  const [media, setMedia] = useState(null)

  return (
    <section className="articles section" id="articles">
      <h2 className="section-title">Projet</h2>
      <span className="section-subtitle">Les projets que j'ai fait</span>

      <div className="articles-container container">
        <Swiper
          className="articles-swiper"
          modules={[Pagination]}
          loop
          pagination={{ el: '.swiper-pagination', clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="articles-content grid">
              <img
                src={project.image}
                alt={project.alt}
                className="article-img"
                style={project.imageStyle}
              />
              <div className="articles-data">
                <h3 className="articles-title">{project.title}</h3>
                <p className="articles-description">{project.description}</p>
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-flex button-small articles-button"
                >
                  {project.link.label}
                </a>
                <a
                  className="button button-flex button-small articles-button"
                  onClick={() => setMedia(buildMedia(project.demo))}
                >
                  Demo <i className="fas fa-arrow-right button-icon"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}>
          <i className="fas fa-angle-right swiper-articles-icon"></i>
        </div>
        <div className="swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}>
          <i className="fas fa-angle-left swiper-articles-icon"></i>
        </div>
        <div className="swiper-pagination"></div>
      </div>

      {media && <ProjectModal media={media} onClose={() => setMedia(null)} />}
    </section>
  )
}
