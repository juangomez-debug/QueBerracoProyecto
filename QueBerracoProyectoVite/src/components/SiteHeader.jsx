import { useState } from 'react'

const navigation = [
  { label: 'Productos', href: '#productos' },
  { label: 'Café', href: '#cafe' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Galería', href: '#galeria' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="¡Que Berraco café!, inicio">
        <img className="brand-logo" src="/logo-que-berraco.png" alt="¡Que Berraco café!" />
      </a>

      <div className="site-header__center">
        <span className="brand-name">
          <span>¡El Berraco café!</span>
        </span>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          id="site-navigation"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contacto"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader