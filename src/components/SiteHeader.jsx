import { useState } from 'react'

const navigation = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Café', href: '#cafe' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Galería', href: '#galeria' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Que Berraco Café, inicio">
        <img className="brand-logo" src="/logo-que-berraco.png" alt="Que Berraco Café" />
        <span className="brand-name">
          <span>Que Berraco Café</span>  
        </span>
      </a>

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
    </header>
  )
}

export default SiteHeader