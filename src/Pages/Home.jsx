import portrait from '../Assets/adrien.png'

import Header from '../Components/Layout/Header/Header'
import Footer from '../Components/Layout/Footer/Footer'
import Projet from '../Components/Layout/Projet/Projet'
import ContactForm from '../Components/ContactForm/ContactForm'
import Presentation from '../Components/Layout/Presentation/Presentation'

import './Home.scss'

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="introduction">
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
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </section>
        <Presentation />
        <Projet />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default Home
