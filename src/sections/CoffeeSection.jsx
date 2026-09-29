function CoffeeSection() {
  return (
    <section className="coffee-section" id="cafe" aria-labelledby="coffee-title">
      <div className="section-wrap coffee-grid">
        <div className="coffee-copy">
          <p className="section-kicker">02 / Café</p>
          <h2 id="coffee-title">De la montaña, a tu manera.</h2>
          <p>
            Cada taza empieza mucho antes de llegar a la mesa. Para nosotros,
            el café es una forma de compartir lo que somos y el lugar del que
            venimos.
          </p>
          <a className="coffee-link" href="#servicios">
            Descubre lo que hacemos <span aria-hidden="true">→</span>
          </a>
        </div>
        <figure className="coffee-photo">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85"
            alt="Taza de café servida sobre una mesa"
            loading="lazy"
          />
          <figcaption className="photo-caption">Tiempo para el café</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default CoffeeSection