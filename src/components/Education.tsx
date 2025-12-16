import './Education.css'

interface EducationItem {
  degree: string
  institution: string
  status: string
}

const education: EducationItem[] = [
  {
    degree: 'Ingeniería de la Ciberseguridad',
    institution: 'Universidad Europea',
    status: 'En curso'
  },
  {
    degree: 'Grado Superior en Desarrollo de Aplicaciones Web',
    institution: 'MEDAC',
    status: 'Completado'
  }
]

const Education = () => {
  return (
    <section id="formacion" className="education">
      <div className="container">
        <h2>Formación</h2>
        <div className="education-grid">
          {education.map((item, idx) => (
            <div key={idx} className="education-item">
              <h3>{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <span className={`education-status ${item.status === 'En curso' ? 'status-current' : 'status-completed'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education


