import linkedinIcon from '../../../Assets/linkedin.webp'
import githubIcon from '../../../Assets/github.webp'

import './Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="copyright">@Copyright Adrien Cros</div>
      <div className="copyright">En cour de construction</div>
      <div className="contact-container">
        <div>
          <img src={linkedinIcon} alt="Linkedin" />
          <a
            href="https://www.linkedin.com/in/adrien-cros-b87350278/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div>
          <img src={githubIcon} alt="Github" />
          <a
            href="https://github.com/Adrien-Cros"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
