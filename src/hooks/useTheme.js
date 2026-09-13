import { useEffect, useState } from 'react'

const THEME_KEY = 'selected-theme'

/* Applique le thème sombre sur <body> et le mémorise dans le localStorage */
export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) ?? 'light')

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
