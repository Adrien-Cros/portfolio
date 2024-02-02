import projectData from '../../../Data/project.json'
import technoData from '../../../Data/techno.json'

import githubIcon from '../../../Assets/github.png'

import './Project.scss'

function Project() {
  const projectList = projectData.project
  const technoDataList = technoData.techno

  return (
    <section className="project" id="projets">
      {projectList.map((project, index) => (
        <article key={index}>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} />
          <div className="github-container">
            <img src={githubIcon} alt="Github" />
            <a href={project.github}>GitHub</a>
          </div>

          <div className="project-techno">
            {project.techo.map((techno) => (
              <div key={techno}>{techno}</div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}

export default Project
