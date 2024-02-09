import './ContactForm.scss'

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <hr />
      <section className="contact -flex-center" id="contact">
        <form onSubmit={handleSubmit}>
          <div className="name-container -flex-center">
            <label htmlFor="nom">Nom: </label>
            <input type="text" name="nom" id="nom" />
            <label htmlFor="prenom">Prénom: </label>
            <input type="text" name="prenom" id="prenom" />
          </div>
          <div className="mail-container -flex-center">
            <label htmlFor="mail">Email: </label>
            <input type="email" name="mail" id="mail" />
          </div>
          <div className="informations-container -flex-center">
            <label htmlFor="informations">Informations: </label>
            <textarea name="informations" id="informations" />
          </div>
          <button className="submit-btn -flex-center">Envoyer</button>
        </form>
      </section>
    </>
  )
}

export default ContactForm
