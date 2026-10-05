import { useState } from 'react'
import { siteContent } from '../data/siteContent.js'

function ProductsBanner() {
  const products = siteContent.products
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProduct = products[activeIndex]

  function showPreviousProduct() {
    setActiveIndex((index) => (index === 0 ? products.length - 1 : index - 1))
  }

  function showNextProduct() {
    setActiveIndex((index) => (index + 1) % products.length)
  }

  return (
    <section
      className="products-banner"
      id="productos"
      aria-labelledby="products-title"
    >
      <div className="section-wrap">
        
        <div className="products-carousel">
          <div className="products-carousel__viewport">
            <button
              type="button"
              className="products-carousel__arrow products-carousel__arrow--left"
              aria-label="Ver producto anterior"
              aria-controls="product-slide"
              onClick={showPreviousProduct}
            >
              <span aria-hidden="true">←</span>
            </button>

            <article className="product-card" id="product-slide" aria-live="polite">
              <div className="product-card__background" aria-hidden="true">
                <img src={activeProduct.image} alt="" />
              </div>
              <div className="product-card__overlay" aria-hidden="true" />
              <div className="product-card__content">
                <p className="product-card__category">{activeProduct.category}</p>
                <h3>{activeProduct.name}</h3>
                <div className="product-card__details">
                  <span>{activeProduct.presentation}</span>
                  <strong>{activeProduct.price}</strong>
                </div>
              </div>
            </article>

            <button
              type="button"
              className="products-carousel__arrow products-carousel__arrow--right"
              aria-label="Ver producto siguiente"
              aria-controls="product-slide"
              onClick={showNextProduct}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="products-carousel__controls" aria-label="Controles de productos">
            <span aria-live="polite">
              {activeIndex + 1} / {products.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsBanner