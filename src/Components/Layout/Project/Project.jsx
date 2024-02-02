import React from 'react'
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
          <div className="projet-img-container">
            {project.image.map((img, index) => (
              <img
                key={index}
                className="projet-img"
                src={img}
                alt={project.name}
              />
            ))}
          </div>
          <div className="github-container">
            <img src={githubIcon} alt="Github" />
            <a href={project.github}>GitHub</a>
          </div>

          <div className="project-techno">
            {project.techo.map((techno) => (
              <div key={techno}>
                {techno}
                {technoDataList
                  .filter((tech) => tech.name === techno)
                  .map((tech) => (
                    <img key={tech.id} src={tech.icon} alt={tech.name} />
                  ))}
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}

export default Project
