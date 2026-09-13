import { useEffect, useState } from 'react'

/* Retourne l'id de la section visible, pour surligner le lien correspondant */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join('|')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const onScroll = () => {
      const scrollY = window.scrollY
      let current = ids[0]

      sections.forEach((section) => {
        const top = section.offsetTop - 50
        if (scrollY > top && scrollY <= top + section.offsetHeight) current = section.id
      })

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
