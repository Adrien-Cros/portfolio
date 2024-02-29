import { useState } from 'react'
import projectData from '../../../Data/project.json'

import ModalProject from '../../Modals/ModalProject/ModalProject'

import './Projet.scss'

function Projet() {
  const [modalProjetInfo, setModalProjetInfo] = useState()
  const projetList = projectData.project
  const projetPerso = projectData.perso

  const handleOpenModal = (projet) => {
    setModalProjetInfo(projet)
  }

  const handleCloseModal = () => {
    setModalProjetInfo()
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal()
    }
  }

  return (
    <>
      <section className="projet -padding-bot-40" id="projets">
        <div
          onClick={handleOverlayClick}
          className={modalProjetInfo ? 'overlay' : ''}
        >
          {modalProjetInfo && (
            <ModalProject projet={modalProjetInfo} OnClick={handleCloseModal} />
          )}
        </div>
        <h2 className="section-title">Projets Formation</h2>
        <div className="projet-container">
          {projetList.map((projet, index) => (
            <figure
              key={projet.name}
              className="projet-card"
              onClick={() => handleOpenModal(projet)}
            >
              <div className="projet-title">{projet.name}</div>
              <img
                className="projet-img"
                src={projet.icon}
                alt={projet.name}
                loading="lazy"
              />
              <figcaption>{projet.description}</figcaption>
            </figure>
          ))}
        </div>
        <div className="cut"></div>
        <h2 className="section-title">Projets Perso</h2>
        <div className="projet-container">
          {projetPerso.map((projet, index) => (
            <figure
              key={projet.name}
              className="projet-card"
              onClick={() => handleOpenModal(projet)}
            >
              <div className="projet-title">{projet.name}</div>
              <img
                className="projet-img"
                src={projet.icon}
                alt={projet.name}
                loading="lazy"
              />
              <figcaption>{projet.description}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projet
