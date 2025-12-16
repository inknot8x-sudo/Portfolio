import './Hero.css'

const Hero = () => {
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
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Alejandro Martínez Begines</h1>
          <p className="hero-subtitle">
            Desarrollador Web Junior | Full-Stack | Backend & Frontend | Experiencia en producción
          </p>
          <p className="hero-description">
            Desarrollo de aplicaciones web funcionales con arquitectura backend robusta e integración 
            de sistemas. Experiencia práctica en proyectos de negocio y entornos de producción.
          </p>
          <p className="hero-location">📍 Madrid, España</p>
          <div className="hero-buttons">
            <button 
              className="btn-primary" 
              onClick={() => scrollToSection('proyectos')}
              aria-label="Ver proyectos"
            >
              Ver proyectos
            </button>
            <a 
              href="#contacto" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contacto')
              }}
            >
              Contacto
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}cv-alejandro-martinez-begines.pdf`}
              className="btn-secondary"
              download="CV-Alejandro-Martinez-Begines.pdf"
              aria-label="Descargar CV"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

