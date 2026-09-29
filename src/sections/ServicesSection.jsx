const services = ['Producción', 'Transformación', 'Comercialización']

function ServicesSection() {
  return (
    <section
      className="services-section"
      id="servicios"
      aria-labelledby="services-title"
    >
      <div className="section-wrap">
        <div className="services-heading">
          <div>
            <p className="section-kicker">03 / Lo que hacemos</p>
            <h2 id="services-title">Un mismo origen, muchas formas.</h2>
          </div>
          <p>
            El mundo del café reúne distintas manos, saberes y momentos. Estas
            son algunas de las áreas que hacen parte de Que Berraco Café.
          </p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service}</h3>
              <span className="service-note">Cultura cafetera</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection