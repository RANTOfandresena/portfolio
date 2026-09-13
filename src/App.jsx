import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import ScrollUp from './components/ScrollUp'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}
