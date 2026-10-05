import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import CoffeeSection from './sections/CoffeeSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import ExperiencesSection from './sections/ExperiencesSection.jsx'
import GallerySection from './sections/GallerySection.jsx'
import HeroSection from './sections/HeroSection.jsx'
import ProductsBanner from './sections/ProductsBanner.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import './App.css'
import './styles/responsive.css'

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <HeroSection />
        <ProductsBanner />
        <CoffeeSection />
        <ServicesSection />
        <ExperiencesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
