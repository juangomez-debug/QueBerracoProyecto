function ExperiencesSection() {
  return (
    <section
      className="experiences-section"
      id="experiencias"
      aria-labelledby="experiences-title"
    >
      <figure className="experiences-media">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
          alt="Paisaje de campos y montañas al amanecer"
          loading="lazy"
        />
      </figure>
      <div className="experiences-shade" aria-hidden="true" />
      <div className="experiences-copy">
        <p className="section-kicker">04 / Experiencias</p>
        <h2 id="experiences-title">El territorio también se saborea.</h2>
        <p>
          Montañas, historias y cultura cafetera. Una invitación a descubrir el
          café más allá de la taza y a conectar con el lugar donde todo empieza.
        </p>
        <a className="button-primary" href="#galeria">
          Mira de cerca <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default ExperiencesSection