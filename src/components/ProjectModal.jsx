import { useEffect, useState } from 'react'

export default function ProjectModal({ media, onClose }) {
  const [index, setIndex] = useState(0)
  const total = media.length
  const current = media[index]

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') setIndex((value) => (value + 1) % total)
      if (event.key === 'ArrowLeft') setIndex((value) => (value - 1 + total) % total)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, total])

  return (
    <div className="modal" style={{ display: 'block' }} onClick={onClose}>
      <span className="close cursor" style={{ zIndex: 1 }} onClick={onClose}>
        &times;
      </span>

      <div className="modal-content" id="list" onClick={(event) => event.stopPropagation()}>
        <div className="mySlides" style={{ display: 'flex' }}>
          {current.type === 'video' ? (
            <video key={current.src} src={current.src} style={{ height: '70vh' }} autoPlay muted controls />
          ) : (
            <img key={current.src} src={current.src} alt="" style={{ height: '70vh' }} />
          )}
        </div>

        {total > 1 && (
          <>
            <a className="prev" onClick={() => setIndex((index - 1 + total) % total)}>
              &#10094;
            </a>
            <a className="next" onClick={() => setIndex((index + 1) % total)}>
              &#10095;
            </a>
          </>
        )}

        <div id="apres" className="caption-container">
          <p id="caption">
            {index + 1} / {total}
          </p>
        </div>
      </div>
    </div>
  )
}
