import { useState } from 'react'

const navigation = [
  { label: 'Productos', href: '#productos', className: 'nav-contact' },
  { label: 'Café', href: '#cafe' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto', className: 'nav-contact' },
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
          <a
            key={item.href}
            className={item.className}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader