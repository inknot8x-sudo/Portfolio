import './Experience.css'

const Experience = () => {
  return (
    <section id="experiencia" className="experience">
      <div className="container">
        <h2>Experiencia Profesional</h2>
        <div className="experience-content">
          <div className="experience-item">
            <div className="experience-header">
              <h3>Desarrollador Backend y Frontend</h3>
              <span className="experience-company">Reparamostumovil</span>
              <span className="experience-location">Alcobendas, Madrid</span>
            </div>
            
            <div className="experience-details">
              <h4>Responsabilidades técnicas:</h4>
              <ul className="experience-list">
                <li>
                  <strong>Desarrollo completo del backend</strong> de una tienda online en producción: 
                  arquitectura de APIs, base de datos, lógica de negocio para e-commerce y gestión de 
                  transacciones.
                </li>
                <li>
                  <strong>Sistema de notificaciones por correo</strong>: implementación de servicio de 
                  envío de emails automatizados para confirmaciones, recordatorios y comunicación con clientes.
                </li>
                <li>
                  <strong>Módulo de gestión de calendario y horarios</strong>: desarrollo de funcionalidad 
                  para coordinación de citas, disponibilidad y reservas del negocio.
                </li>
                <li>
                  <strong>Lógica de negocio crítica</strong>: implementación de reglas de negocio, 
                  validaciones y flujos de trabajo para garantizar la integridad de los procesos comerciales.
                </li>
                <li>
                  <strong>Desarrollo frontend</strong>: implementación de interfaces con HTML, CSS, 
                  JavaScript vanilla y WordPress, asegurando consistencia visual y funcionalidad 
                  responsive.
                </li>
              </ul>

              <div className="experience-highlight">
                <strong>Entorno de producción:</strong> Trabajo directo en aplicación activa con usuarios 
                reales. Enfoque en calidad de código, rendimiento y cumplimiento de objetivos de negocio. 
                Resolución de problemas técnicos y mejora continua de funcionalidades existentes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

