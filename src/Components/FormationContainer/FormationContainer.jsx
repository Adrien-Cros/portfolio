import './FormationContainer.scss'
function FormationContainer({
  projectNumber,
  projetTitle,
  projectDescription,
}) {
  return (
    <div className="formation-projet">
      <div className="barre-container">
        <div className="point"></div>
        <div className="barre"></div>
      </div>
      <div>
        <div className="formation-projet-number">
          Projet {projectNumber} <i className="fa-solid fa-check"></i>
        </div>
        <div className="formation-projet-title">{projetTitle}</div>
        <div className="formation-projet-description">{projectDescription}</div>
      </div>
    </div>
  )
}

export default FormationContainer
