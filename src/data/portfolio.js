export const owner = {
  name: 'Herimandranto Fandresena',
  brand: 'Ranto',
  email: 'herimandrantofandresen@gmail.com',
  phone: '+261346756924',
  address: 'Antsirabe Mahazoarivo',
  linkedin: 'https://www.linkedin.com/in/herimandranto-rakotomalala-956064243',
}

export const navLinks = [
  { id: 'home', href: '#home', icon: 'fas fa-home', label: 'Accueil' },
  { id: 'about', href: '#about', icon: 'fas fa-user', label: 'A propos' },
  { id: 'skills', href: '#skills', icon: 'fas fa-tools', label: 'compétences' },
  { id: 'experience', href: '#experience', icon: 'fas fa-suitcase', label: 'Experience' },
  { id: 'articles', href: '#articles', icon: 'fas fa-file-alt', label: 'Projets' },
  { id: 'contact', href: '#contact', icon: 'fas fa-envelope', label: 'Contact' },
]

export const techSkills = [
  { label: 'Frontend : React', variant: 'react' },
  { label: 'Backend : Django', variant: 'django' },
  { label: 'Application Mobile : Java / Kotlin, Jetpack Compose', variant: 'mobile' },
]

/* `side` place les éléments à gauche ou à droite de la timeline */
export const education = [
  {
    title: 'Master II en Informatique',
    subtitle: ['ESP-Antsirabe'],
    period: '2024 - 2026',
    side: 'right',
  },
  {
    title: 'Licence en Genie Logiciel',
    subtitle: ['IES-AV'],
    period: '2021 - 2024',
    side: 'left',
  },
  {
    title: 'Baccalauréat serie C',
    subtitle: ['Lycee Antanifotsy'],
    period: '2020',
    side: 'right',
  },
]

export const work = [
  {
    title: 'ONG DEFI',
    subtitle: ['Refonte de la plateforme SODINA', 'Django, React, TypeScript et Docker'],
    period: '2026',
    side: 'right',
  },
  {
    title: 'Développeur Fullstack Freelance (React et Django)',
    subtitle: ["Conception, développement et déploiement d'une application web"],
    period: 'Janvier 2025 - Juin 2025',
    side: 'left',
  },
  {
    title: 'SmartOne.ai',
    subtitle: ["Amélioration des applicarion web utiliés par l'entreprise", 'codeIgniter, Symfony, Django et React'],
    period: '2024',
    side: 'right',
  },
  {
    title: 'Open Data',
    subtitle: ['Stagiaire tant que developpeur VueJs'],
    period: '2023 (Stage 4 mois)',
    side: 'left',
  },
]

/*
 * `demo` décrit la démo affichée dans la modale :
 * - { type: 'video', src } figure dans public/assets
 * - { type: 'gallery', folder, total } affiche les images `folder`/1..total-1
 */
export const projects = [
  {
    id: 'alarme',
    title: 'Application mobile: Alarme',
    description: 'Kotlin :Jetpack Compose',
    image: `${import.meta.env.BASE_URL}assets/logo_alarme.png`,
    alt: 'Alarme',
    link: { href: 'https://github.com/RANTOfandresena/Alarme', label: 'code source' },
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}assets/alarme.mp4` },
  },
  {
    id: 'camshield',
    title: 'Application mobile: Camshield',
    description: 'Java, Django, IOT',
    image: `${import.meta.env.BASE_URL}assets/logo_camshield.png`,
    alt: 'Camshield',
    link: { href: 'https://github.com/tynaandritahina/Porte-Ouverte', label: 'code source' },
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}assets/camshield.mp4` },
  },
  {
    id: 'handeha',
    title: 'Application mobile de reservation de transport public "Handeha"',
    description: 'Java,Django,Postgres et SQLite',
    image: `${import.meta.env.BASE_URL}img/article-1.png`,
    alt: 'Handeha',
    link: { href: 'https://github.com/RANTOfandresena/app_android_handeha', label: 'code source' },
    demo: { type: 'gallery', folder: '1', total: 13 },
  },
  {
    id: 'bloc-note',
    title: 'Application mobile:Bloc note',
    description: 'Java,SQLite',
    image: `${import.meta.env.BASE_URL}img/note.png`,
    alt: 'Bloc note',
    imageStyle: { width: '100%' },
    link: { href: 'https://github.com/RANTOfandresena/Block-Note', label: 'code source' },
    demo: { type: 'gallery', folder: '4', total: 5 },
  },
  {
    id: 'hearme',
    title: 'Application Web: Hearme',
    description: 'Django, React, Postgres',
    image: `${import.meta.env.BASE_URL}assets/logo_hearme.jpg`,
    alt: 'Hearme',
    imageStyle: { height: '150px' },
    link: { href: 'https://hearme.digital', label: 'hearme.digital' },
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}assets/hearme.mp4` },
  },
  {
    id: 'hackathon',
    title: 'Hackathon 2025 (Projet fait en 20 heurs)',
    description: 'Django, React',
    image: `${import.meta.env.BASE_URL}assets/logo_hui.png`,
    alt: 'Hui',
    link: { href: 'https://github.com/RANTOfandresena/hackathon', label: 'code source' },
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}assets/hui.mp4` },
  },
  {
    id: 'ludo',
    title: 'Application web:Ludo multiJoueur en ligne',
    description: 'Java,Javascript,MySQL',
    image: `${import.meta.env.BASE_URL}img/article-2.png`,
    alt: 'Ludo',
    link: { href: 'https://github.com/RANTOfandresena/LudoJava', label: 'code source' },
    demo: { type: 'gallery', folder: '3', total: 8 },
  },
  {
    id: 'faritany',
    title: 'Application web (multiJoueur): Faritany',
    description: 'Rust, React',
    image: `${import.meta.env.BASE_URL}assets/logo_faritany.png`,
    alt: 'Faritany',
    link: { href: 'https://github.com/RANTOfandresena/list_jeu_rust', label: 'code source' },
    demo: { type: 'video', src: `${import.meta.env.BASE_URL}assets/faritany.mp4` },
  },
]

export const footerLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#articles', label: 'Projet' },
  { href: '#contact', label: 'Contact' },
]
