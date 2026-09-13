import { useScrolled } from '../hooks/useScrolled'

export default function ScrollUp() {
  const visible = useScrolled(560)

  return (
    <a
      href="#home"
      className={visible ? 'scrollup show-scroll' : 'scrollup'}
      id="scroll-up"
      aria-label="Revenir en haut"
    >
      <i className="fas fa-arrow-up scrollup-icon"></i>
    </a>
  )
}
