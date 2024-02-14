import { useState, useEffect } from 'react'
import './Header.scss'

function Header() {
  const [currentSection, setCurrentSection] = useState('introduction')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'presentation', 'projets', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const currentSection = sections.find((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = section.offsetTop + section.offsetHeight
          return scrollPosition >= sectionTop && scrollPosition <= sectionBottom
        }
        return false
      })
      setCurrentSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          className={`header-part ${
            currentSection === 'introduction' ? '-selected' : ''
          }`}
        >
          Introduction
        </div>
        <div
          onClick={() => scrollToSection('presentation')}
          className={`header-part ${
            currentSection === 'presentation' ? '-selected' : ''
          }`}
        >
          Présentation
        </div>
        <div
          onClick={() => scrollToSection('projets')}
          className={`header-part ${
            currentSection === 'projets' ? '-selected' : ''
          }`}
        >
          Projets
        </div>
        <div
          onClick={() => scrollToSection('contact')}
          className={`header-part ${
            currentSection === 'contact' ? '-selected' : ''
          }`}
        >
          Contact
        </div>
      </nav>
    </header>
  )
}

export default Header
