import './Contact.css'

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <p className="contact-intro">
          Si buscas un desarrollador web junior con experiencia real y capacidad de aportar valor desde el primer día, 
          estaré encantado de conversar contigo.
        </p>
        <div className="contact-content">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:aleemnez@gmail.com" aria-label="Enviar email">
              aleemnez@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/alejandro-martinez-begines" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
            >
              linkedin.com/in/alejandro-martinez-begines
            </a>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <a 
              href="https://github.com/inknot8x-sudo" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
            >
              github.com/inknot8x-sudo
            </a>
          </div>
        </div>
        <div className="contact-cta">
          <p>
            <strong>Para recruiters:</strong> Puedes contactarme directamente a través de cualquiera de estos canales. 
            Estoy disponible para entrevistas y conversaciones sobre oportunidades laborales.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

