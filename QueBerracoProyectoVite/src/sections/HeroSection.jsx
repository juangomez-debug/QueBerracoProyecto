function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <figure className="hero-media">
        <img
          src="/camisa_fondo.jpeg"
          alt="Familia Berraca"
          fetchPriority="high"
        />
      </figure>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        
        <p className="hero-description">
          Una historia de café, territorio y tradición hecha para compartir.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#nosotros">
            Conoce nuestra historia <span aria-hidden="true">↗</span>
          </a>
          <a className="button-text" href="#cafe">
            Explora el café <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <p className="hero-location">Café con raíz antioqueña</p>
    </section>
  )
}

export default HeroSection