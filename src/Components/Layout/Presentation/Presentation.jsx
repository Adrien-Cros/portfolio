import './Presentation.scss'
import techData from '../../../Data/techno.json'

function Presentation() {
  const techList = techData.techno
  const connaissanceTechList = techData.connaissance

  return (
    <>
      <section className="presentation -padding-bot-40" id="presentation">
        <h2 className="section-title">Présentation</h2>
        <div className="presentation-text">
          <p>
            Je suis un <span>développeur junior</span> passionné par le web et
            désireux d'apprendre et de progresser dans ce domaine dynamique et
            en constante évolution.
            <span>
              {' '}
              Actuellement à la recherche d'une opportunité professionnelle
            </span>
            , je suis enthousiaste à l'idée de contribuer à des projets
            stimulants et de développer mes compétences.
          </p>
          <p>
            Je suis capable d'intégrer des maquettes web en version dynamique ou
            statique, et je possède également des connaissances en développement
            backend, notamment avec Node.js, Express et MongoDB. Je suis motivé,
            curieux et prêt à relever de nouveaux défis.
          </p>
        </div>
        <div className="presentation-tech">
          <h3>J'ai déjà travaillé avec: </h3>
          <div className="presentation-tech-container">
            {techList.map((tech, index) => (
              <div key={tech.name}>
                <span>{tech.name}</span>
                <img src={tech.icon} alt={tech.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="presentation-tech">
          <h3>Je suis en train d'apprendre: </h3>
          <div className="presentation-tech-container">
            {connaissanceTechList.map((tech, index) => (
              <div key={tech.name}>
                <span>{tech.name}</span>
                <img src={tech.icon} alt={tech.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Presentation
