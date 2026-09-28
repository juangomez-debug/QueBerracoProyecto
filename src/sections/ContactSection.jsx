function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="section-wrap contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">06 / Contacto</p>
          <h2 id="contact-title">El café siempre abre la conversación.</h2>
          <p>
            Muy pronto compartiremos aquí los canales oficiales para estar en
            contacto. Mientras tanto, nos encontramos en Copacabana, Antioquia.
          </p>
        </div>
        <div className="contact-location">
          <span>Estamos en</span>
          <p>Copacabana, Antioquia</p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection