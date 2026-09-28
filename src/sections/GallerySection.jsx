const photographs = [
  {
    label: 'El territorio',
    src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85',
    alt: 'Luz de la mañana sobre un paisaje de montaña',
  },
  {
    label: 'El proceso',
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85',
    alt: 'Preparación manual de café',
  },
  {
    label: 'La taza',
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=85',
    alt: 'Granos de café tostado en primer plano',
  },
]

function GallerySection() {
  return (
    <section className="gallery-section" id="galeria" aria-labelledby="gallery-title">
      <div className="section-wrap">
        <div className="gallery-heading">
          <div>
            <p className="section-kicker">05 / Galería</p>
            <h2 id="gallery-title">Postales de nuestra cultura cafetera.</h2>
          </div>
          <p>El café se vive en los paisajes, los procesos y los encuentros.</p>
        </div>
        <div className="gallery-grid">
          {photographs.map((photo, index) => (
            <figure className="gallery-item" key={photo.label}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>
                <span>{photo.label}</span>
                <span>0{index + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection