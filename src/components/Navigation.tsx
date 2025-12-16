import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 70
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">AM</div>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('sobre-mi')} aria-label="Ir a sección Sobre mí">Sobre mí</button></li>
            <li><button onClick={() => scrollToSection('proyectos')} aria-label="Ir a sección Proyectos">Proyectos</button></li>
            <li><button onClick={() => scrollToSection('experiencia')} aria-label="Ir a sección Experiencia">Experiencia</button></li>
            <li><button onClick={() => scrollToSection('contacto')} aria-label="Ir a sección Contacto">Contacto</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

