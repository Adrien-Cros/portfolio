import { useState, useEffect } from 'react'
import './Header.scss'

function Header() {
  const [currentSection, setCurrentSection] = useState('introduction')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'presentation',
        'formation',
        'projets',
        'contact',
      ]
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
      // Creating offset for the header
      if (section.id === 'introduction') {
        const yOffset = -100
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      } else {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header>
      <div className="header-title">Adrien Cros</div>
      <nav>
        <div
          onClick={() => scrollToSection('introduction')}
          className={` ${currentSection === 'introduction' ? 'selected' : ''}`}
        >
          Introduction
        </div>
        <div
          onClick={() => scrollToSection('presentation')}
          className={` ${currentSection === 'presentation' ? 'selected' : ''}`}
        >
          Présentation
        </div>
        <div
          onClick={() => scrollToSection('formation')}
          className={` ${currentSection === 'formation' ? 'selected' : ''}`}
        >
          Mes formations
        </div>
        <div
          onClick={() => scrollToSection('projets')}
          className={` ${currentSection === 'projets' ? 'selected' : ''}`}
        >
          Projets
        </div>
        <div
          onClick={() => scrollToSection('contact')}
          className={` ${currentSection === 'contact' ? 'selected' : ''}`}
        >
          Contact
        </div>
      </nav>
    </header>
  )
}

export default Header
