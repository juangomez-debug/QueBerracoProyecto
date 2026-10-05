function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#inicio">
        Que Berraco Café
      </a>
      <p>Copacabana, Antioquia · © {new Date().getFullYear()}</p>
      <a className="back-to-top" href="#inicio">
        Volver al inicio ↑
      </a>
    </footer>
  )
}

export default SiteFooter