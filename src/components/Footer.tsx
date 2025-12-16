import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Alejandro Martínez Begines. Todos los derechos reservados.</p>
        <p className="footer-note">Desarrollador Web Junior | Madrid, España</p>
      </div>
    </footer>
  )
}

export default Footer


