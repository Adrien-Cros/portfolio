import './ModalProject.scss'
import githubImg from '../../../Assets/github.png'
import technoData from '../../../Data/techno.json'
import GithubLanguages from '../../GithubLanguages/GithubLanguages'

function ModalProject({ projet, OnClick }) {
  const technoList = technoData.techno

  return (
    <div className="modal-project modal-apparition">
      <div className="modal-project-header">
        <h4>{projet.name}</h4>
        <div onClick={OnClick} className="modal-project-close">
          X
        </div>
      </div>

      <div className="modal-project-container">
        <a
          href={projet.github}
          className="modal-github-link"
          target="_blank"
          rel="noreferrer"
        >
          <img className="github-img" src={githubImg} alt="Github Icon" />
          Github
        </a>
        <img className="modal-image" src={projet.image} alt={projet.name} />
        <div className="modal-informations">
          <div className="modal-description">{projet.description}</div>
          <div className="modal-objectif">
            <ul>
              {projet.objectif.map((objectif, index) => (
                <li key={index}>{objectif}</li>
              ))}
            </ul>
          </div>
          <div className="modal-techno">
            {projet.techno.map((technoName, index) => {
              const technoImg = technoList.find(
                (techno) => techno.name === technoName
              )
              return (
                technoImg && (
                  <img
                    className="modal-tech-image"
                    key={technoImg.id}
                    src={technoImg.icon}
                    alt={technoImg.name}
                  />
                )
              )
            })}
          </div>

          <div className="modal-language">
            <GithubLanguages repoName={projet?.repoName} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProject
