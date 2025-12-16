import './About.css'

const About = () => {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <h2>Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Desarrollador Web Junior con experiencia práctica en desarrollo full-stack y proyectos 
              en producción. Especializado en aplicaciones funcionales con arquitectura backend robusta 
              e integración de sistemas.
            </p>
            <p>
              Desarrollo código mantenible y escalable, con enfoque en calidad y rendimiento. 
              Experiencia trabajando en entornos de producción reales donde la fiabilidad del código 
              y el cumplimiento de objetivos de negocio son críticos.
            </p>
            <p>
              Formación técnica en desarrollo web y conocimientos complementarios en ciberseguridad, 
              lo que permite abordar proyectos con perspectiva de seguridad desde el diseño.
            </p>
            <div className="about-highlight">
              <strong>Valor inmediato:</strong> Experiencia en producción, capacidad de desarrollar 
              backend y frontend, comprensión de lógica de negocio y experiencia en integración de 
              sistemas y APIs.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

