import { useRef, useState, useEffect } from 'react'

import portrait from '../Assets/adrien.webp'

import Header from '../Components/Layout/Header/Header'
import Footer from '../Components/Layout/Footer/Footer'
import Projet from '../Components/Layout/Projet/Projet'
import Presentation from '../Components/Layout/Presentation/Presentation'
import Specification from '../Components/Layout/Specification/Specification'
import Formation from '../Components/Layout/Formation/Formation'

import './Home.scss'

function Home() {
  const heroSection = useRef(null)
  const [showReturnToTop, setShowReturnToTop] = useState(false)

  const handleClick = () => {
    heroSection.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      const isHeroVisible = scrollTop < heroSection.current.offsetTop

      setShowReturnToTop(!isHeroVisible)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="introduction" ref={heroSection}>
          <div className="hero-container">
            <div className="introduction-text">
              <h1>Adrien Cros</h1>
              <h2>
                Développeur <span className="animated-text"> Front-End</span>
              </h2>
              <p>
                Jeune développeur de 31 ans, je suis passioné par le web depuis
                ma jeunesse.
              </p>
            </div>
            <img src={portrait} alt="Portrait de Adrien" />
          </div>
        </section>
        <Presentation />
        <Formation />
        <Specification />
        <Projet />
        {showReturnToTop && (
          <div className="return-to-top" onClick={handleClick}>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Home
