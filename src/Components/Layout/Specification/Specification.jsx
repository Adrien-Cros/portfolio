import './Specification.scss'

function Specification() {
  return (
    <>
      <hr />
      <section className="specification" id="specification">
        <div className="spec-overlay -top">
          <div className="spec-container">Veille</div>
          <div className="spec-bar rotate-up">
            <div className="fill-bar-animation"></div>
          </div>
        </div>
        <div className="spec-overlay -bot">
          <div className="spec-container">Innovation</div>
          <div className="spec-bar rotate-down">
            <div className="fill-bar-animation"></div>
          </div>
        </div>
        <div className="spec-overlay -top">
          <div className="spec-container">Intégration</div>
          <div className="spec-bar rotate-up">
            <div className="fill-bar-animation"></div>
          </div>
        </div>
        <div className="spec-overlay -bot">
          <div className="spec-container">SEO</div>
        </div>
      </section>
    </>
  )
}

export default Specification
