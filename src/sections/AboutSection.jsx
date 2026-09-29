function AboutSection() {
  return (
    <section className="about-section" id="nosotros" aria-labelledby="about-title">
      <div className="section-wrap about-grid">
        <div>
          <p className="section-kicker">01 / Nuestra raíz</p>
          <div className="about-mark" aria-hidden="true">
            <div>
              Q<span>de aquí</span>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <h2 id="about-title">El café también cuenta quiénes somos.</h2>
          <p>
            Que Berraco Café nace del vínculo con el café y con la tierra
            antioqueña. Un proyecto que celebra el trabajo, la cultura y esos
            momentos sencillos que se disfrutan mejor alrededor de una taza.
          </p>
          <span className="about-location">De Copacabana, Antioquia</span>
        </div>
      </div>
    </section>
  )
}

export default AboutSection