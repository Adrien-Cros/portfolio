import './Contact.scss'
import githubIcon from '../../../Assets/github.webp'
import linkedinIcon from '../../../Assets/linkedin.webp'

function Contact() {
  return (
    <section className="contact -padding-bot-40" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="link-container">
        <div className="contact-container">
          <img src={linkedinIcon} alt="Gihub link" />
          <a
            href="https://www.linkedin.com/in/adrien-cros-b87350278/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="contact-container">
          <img src={githubIcon} alt="Gihub link" />
          <a
            href="https://github.com/Adrien-Cros"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
