import './Projects.css'

interface Project {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  demonstrates: string[]
}

const projects: Project[] = [
  {
    id: 'flashbank',
    title: 'FlashBank',
    description: 'Aplicación bancaria digital full-stack con visualizaciones financieras y arquitectura escalable',
    problem: 'Desarrollar una plataforma bancaria digital funcional que combine backend robusto con frontend moderno, gestión de datos financieros y visualizaciones en tiempo real para usuarios finales.',
    solution: 'Arquitectura full-stack: backend RESTful con Node.js y Express para gestión de transacciones y lógica de negocio, frontend responsive con JavaScript ES6+ y visualizaciones de datos mediante Chart.js. Implementación de diseño mobile-first, sistema de rutas, gestión de estado y animaciones CSS para optimizar la experiencia de usuario.',
    technologies: ['Node.js', 'Express', 'JavaScript ES6+', 'HTML5', 'CSS3 (Grid, Flexbox)', 'Chart.js'],
    demonstrates: [
      'Arquitectura full-stack completa y funcional',
      'Desarrollo de APIs REST y lógica de negocio backend',
      'Implementación de visualizaciones de datos complejas',
      'Diseño responsive mobile-first para múltiples dispositivos',
      'Integración de librerías de terceros (Chart.js)',
      'Manejo de datos financieros y transacciones'
    ]
  },
  {
    id: 'url-guard',
    title: 'URL-Guard',
    description: 'Herramienta de seguridad web para análisis de URLs y detección de amenazas',
    problem: 'Crear un sistema de análisis de URLs que detecte automáticamente amenazas de seguridad (phishing, XSS, typosquatting) mediante análisis local sin dependencia de servicios externos para evaluación básica.',
    solution: 'Motor de análisis que procesa URLs localmente analizando estructura, parámetros y patrones. Implementa detección de inyecciones XSS (script tags, javascript:, eventos inline), redirecciones maliciosas, typosquatting mediante algoritmos de distancia de edición, y detección de impersonación. Sistema de scoring de riesgo (0-100) con clasificación visual y opción de integración con listas de reputación externas (OpenPhish, SinkingYachts).',
    technologies: ['Node.js', 'Express', 'JavaScript', 'Algoritmos de detección', 'APIs de seguridad'],
    demonstrates: [
      'Desarrollo de herramientas de seguridad web funcionales',
      'Implementación de algoritmos de detección de patrones',
      'Análisis de estructura de URLs y parámetros',
      'Sistema de scoring y clasificación de riesgos',
      'Integración con APIs externas de seguridad',
      'Reducción de falsos positivos mediante allowlists',
      'Interfaz de usuario para presentar análisis técnicos'
    ]
  },
  {
    id: 'theweatherweb',
    title: 'TheWeatherWeb',
    description: 'Aplicación web de datos meteorológicos con integración de APIs y accesibilidad',
    problem: 'Desarrollar una aplicación que consuma datos meteorológicos en tiempo real desde APIs externas y los presente de forma accesible, cumpliendo estándares de accesibilidad web.',
    solution: 'Integración de APIs meteorológicas externas mediante JavaScript, procesamiento de datos en tiempo real y presentación en interfaz accesible. Implementación de buenas prácticas de accesibilidad web para usuarios con discapacidad auditiva, diseño responsive y gestión de estados de carga y error.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs REST', 'Accesibilidad Web'],
    demonstrates: [
      'Integración de APIs externas y consumo de datos en tiempo real',
      'Implementación de estándares de accesibilidad web (WCAG)',
      'Procesamiento y visualización de datos dinámicos',
      'Manejo de estados de carga, error y éxito',
      'Diseño responsive y adaptativo'
    ]
  },
  {
    id: 'subdomain-recon',
    title: 'Subdomain-Recon',
    description: 'Herramienta OSINT en Python para enumeración de subdominios y reconocimiento de superficie de ataque',
    problem: 'Automatizar el proceso de descubrimiento de subdominios mediante técnicas OSINT para análisis de superficie de ataque en auditorías de seguridad.',
    solution: 'Herramienta en Python que implementa múltiples técnicas OSINT para enumeración de subdominios: consultas DNS, búsquedas en motores de búsqueda, análisis de certificados SSL, y uso de APIs públicas. Procesamiento de resultados, filtrado y presentación estructurada para análisis de seguridad.',
    technologies: ['Python', 'OSINT', 'DNS', 'APIs', 'Linux'],
    demonstrates: [
      'Automatización de procesos de seguridad mediante scripting',
      'Implementación de técnicas OSINT y reconocimiento',
      'Análisis de infraestructura y superficie de ataque',
      'Procesamiento y filtrado de grandes volúmenes de datos',
      'Trabajo con protocolos de red (DNS, HTTP/HTTPS)'
    ]
  }
]

const Projects = () => {
  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-section">
                <h4>Objetivo</h4>
                <p>{project.problem}</p>
              </div>

              <div className="project-section">
                <h4>Implementación técnica</h4>
                <p>{project.solution}</p>
              </div>

              <div className="project-section">
                <h4>Tecnologías</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-section">
                <h4>Competencias técnicas demostradas</h4>
                <ul className="demonstrates-list">
                  {project.demonstrates.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

