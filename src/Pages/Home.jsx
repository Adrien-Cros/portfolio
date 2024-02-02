import portrait from '../Assets/adrien.jpg'

import Header from '../Components/Layout/Header/Header'
import Footer from '../Components/Layout/Footer/Footer'
import Project from '../Components/Layout/Project/Project'

import './Home.scss'

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="introduction">
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
          <div className="introduction-text">
            <h1>Adrien Cros</h1>
            <h2>Développeur Front-End</h2>
            <p>
              Jeune développeur de 31 ans, je suis passioné par le web depuis ma
              jeunesse.
            </p>
          </div>
          <img src={portrait} alt="Portrait de Adrien" />
        </section>
        <Project />
      </main>
      <Footer />
    </>
  )
}

export default Home
