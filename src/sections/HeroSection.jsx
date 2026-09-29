function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <figure className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85"
          alt="Preparación de café en un espacio cálido"
          fetchPriority="high"
        />
      </figure>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">Copacabana · Antioquia</p>
        <h1 id="hero-title">
          Que Berraco
          <em>Café</em>
        </h1>
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