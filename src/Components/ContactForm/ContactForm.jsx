import './ContactForm.scss'
import { useEffect, useState } from 'react'

function ContactForm() {
  const [logMsg, setLogMsg] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const lastName = event.target.nom.value
    const firstName = event.target.prenom.value
    const mail = event.target.mail.value
    const info = event.target.informations.value

    if (lastName && firstName && mail && info) {
      setLogMsg('Les informations ont été envoyées avec succès. (pas vraiment)')
    } else {
      setLogMsg('Tout les champs doivent être remplis.')
    }
  }

  // Clear sending message
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLogMsg('')
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [logMsg])

  return (
    <>
      <hr />
      <section className="contact -flex-center" id="contact">
        <h4>Vous souhaitez me contacter ?</h4>
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
        {logMsg !== '' && <div>{logMsg}</div>}
      </section>
    </>
  )
}

export default ContactForm
