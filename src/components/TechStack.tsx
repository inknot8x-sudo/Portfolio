import './TechStack.css'

interface TechCategory {
  name: string
  technologies: string[]
}

const techStack: TechCategory[] = [
  {
    name: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'WordPress']
  },
  {
    name: 'Backend',
    technologies: ['PHP', 'Node.js', 'APIs REST', 'Sistemas de correo', 'Lógica de negocio']
  },
  {
    name: 'Seguridad / OSINT',
    technologies: ['Python', 'OSINT', 'Linux', 'Reconocimiento de seguridad']
  },
  {
    name: 'Herramientas',
    technologies: ['Git', 'Control de versiones', 'Desarrollo en producción']
  }
]

const TechStack = () => {
  return (
    <section id="stack" className="tech-stack">
      <div className="container">
        <h2>Stack Tecnológico</h2>
        <div className="tech-grid">
          {techStack.map((category) => (
            <div key={category.name} className="tech-category">
              <h3>{category.name}</h3>
              <div className="tech-items">
                {category.technologies.map((tech) => (
                  <span key={tech} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack


