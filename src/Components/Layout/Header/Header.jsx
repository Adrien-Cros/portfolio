import './Header.scss'

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav>
        <div
          onClick={() => scrollToSection('introduction')}
          className="header-part"
        >
          Introduction
        </div>
        <div
          onClick={() => scrollToSection('presentation')}
          className="header-part"
        >
          Présentation
        </div>
        <div onClick={() => scrollToSection('projets')} className="header-part">
          Projets
        </div>
        <div onClick={() => scrollToSection('contact')} className="header-part">
          Contact
        </div>
      </nav>
    </header>
  )
}

export default Header
