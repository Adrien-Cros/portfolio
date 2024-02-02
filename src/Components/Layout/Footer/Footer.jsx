import linkedinIcon from '../../../Assets/linkedin.png'
import githubIcon from '../../../Assets/github.png'

import './Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="copyright">@Copyright Adrien Cros</div>
      <div className="contact-container">
        <div>
          <img src={linkedinIcon} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/adrien-cros-b87350278/">
            Linkedin
          </a>
        </div>
        <div>
          <img src={githubIcon} alt="Github" />
          <a href="https://github.com/Adrien-Cros">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
