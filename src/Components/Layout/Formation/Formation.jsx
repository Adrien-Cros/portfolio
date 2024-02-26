import { useState } from 'react'

import formationData from '../../../Data/formation.json'

import FormationContainer from '../../FormationContainer/FormationContainer'

import './Formation.scss'

function Formation() {
  const [isDropdownActive, setIsDropdownActive] = useState(false)

  const formationList = formationData.formation

  const handleDropdown = () => {
    setIsDropdownActive(!isDropdownActive)
  }

  return (
    <section className="formation-container -padding-bot-40" id="formation">
      <h2 className="section-title">Mes Formations</h2>
      <div className="formation-list">
        <div className="formation">
          <div className="formation-title">
            <div className="formation-date bold">2011-2013</div>
            <div className="formation-name bold">
              BTS IRIS (Informatique et réseaux pour l'industrie et les services
              techniques)
            </div>
            <div className="formation-location">Lycée Astier - Aubenas</div>
          </div>

          <ul>
            <li>
              Architecture des machines informatique, microprocesseur, circuit
              de gestion du temps, périphérique parallèle.
            </li>
            <li>Programmation dans différents langages (C#, C++, Java)</li>
            <li>Langages d'Internet (PHP, HTML, JavaScript, CSS).</li>
            <li>
              Étude des communications : liaison série RS232 / RS422 / RS485,
              parallèle, réseau (TCP/IP), bus de terrains (bus CAN, I2C…).
            </li>
            <li>Physique Appliquée (Bande-passante, Amplificateur…).</li>
            <li>Mathématiques (Complexes, Matrices, Linéarisation…).</li>
          </ul>
        </div>
        <div className="formation">
          <div className="formation-title">
            <div className="formation-date bold"> 2023-2024 </div>
            <div className="formation-name bold">
              Développeur Web / Intégrateur Web
            </div>
            <div className="formation-location">OpenClassrooms</div>
          </div>
          <ul>
            <li>
              Créer une application web complète et responsive pour permettre à
              l’entreprise ou au client de vendre ses produits et services en
              ligne, sur tous types d’appareils.
            </li>
            <li>
              Dynamiser des pages web pour mieux mettre en valeur les produits
              et service de l’entreprise ou du client.
            </li>
            <li>
              Créer des interfaces communiquant avec le back-end du site pour
              élaborer des applications dynamiques et permettre aux clients de
              s’identifier sur le site.
            </li>
            <li>
              Optimiser les performances et réaliser la maintenance de sites web
              déjà existants pour permettre leur fonctionnement optimal et une
              bonne visibilité sur les moteurs de recherche.
            </li>
            <li>
              Gérer un projet web de A à Z : du chiffrage et découpage des
              tâches du projet à la présentation de la solution, en passant par
              la rédaction des spécifications techniques.
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`details-button ${isDropdownActive ? 'btn-selected' : ''}`}
        onClick={handleDropdown}
      >
        <div>Détails de la formation OpenClassrooms</div>
        <i
          className={`fa-solid fa-arrow-down ${
            isDropdownActive ? 'arrow-deactive' : 'arrow-active'
          }`}
        ></i>
      </div>
      <div
        className={`formation-details-container ${
          isDropdownActive ? 'formation-deactive' : 'formation-active'
        }`}
      >
        {isDropdownActive && (
          <>
            {formationList.map((formation, index) => (
              <FormationContainer
                key={index}
                projectNumber={formation.id}
                projetTitle={formation.title}
                projectDescription={formation.description}
              />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default Formation
