import { useState } from 'react'
import projectData from '../../../Data/project.json'

import ModalProject from '../../Modals/ModalProject/ModalProject'

import './Projet.scss'

function Projet() {
  const [modalProjetInfo, setModalProjetInfo] = useState()
  const projetList = projectData.project

  const handleOpenModal = (projet) => {
    setModalProjetInfo(projet)
  }

  const handleCloseModal = () => {
    setModalProjetInfo()
  }

  return (
    <>
      <hr />
      <section className="projet -padding-bot-40" id="projets">
        <div className={modalProjetInfo ? 'overlay' : ''}>
          {modalProjetInfo && (
            <ModalProject projet={modalProjetInfo} OnClick={handleCloseModal} />
          )}
        </div>
        <h2>Mes Projets</h2>
        <div className="projet-container">
          {projetList.map((projet, index) => (
            <figure
              key={projet.name}
              className="projet-card"
              onClick={() => handleOpenModal(projet)}
            >
              <div className="projet-title">{projet.name}</div>
              <img className="projet-img" src={projet.icon} alt={projet.name} />
              <figcaption>{projet.description}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projet
