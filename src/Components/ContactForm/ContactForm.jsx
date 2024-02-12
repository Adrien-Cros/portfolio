import { useState } from 'react'

import './ContactForm.scss'
import { useEffect } from 'react'

function ContactForm() {
  const [informationsSent, setInformationsSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const lastName = event.target.nom.value
    const firstName = event.target.prenom.value
    const mail = event.target.mail.value
    const info = event.target.informations.value

    if (lastName === '') {
      console.log('Le nom ne doit pas être vide.')
    }
    if (firstName === '') {
      console.log('Le prenom ne doit pas être vide.')
    }
    if (mail === '') {
      console.log('Le mail ne doit pas être vide.')
    }
    if (info === '') {
      console.log('Les informations ne doivent pas être vide.')
    }

    if (lastName && firstName && mail && info) {
      setInformationsSent(true)
      console.log('Les informations on été envoyer avec succès.')
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInformationsSent(false)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [informationsSent])

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
        {informationsSent && (
          <div>Les informations ont été envoyées avec succès.</div>
        )}
      </section>
    </>
  )
}

export default ContactForm
