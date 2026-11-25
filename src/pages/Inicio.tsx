import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { ProductShowcase } from '../components/ProductShowcase'
import { NewsletterBanner } from '../components/NewsletterBanner'
import { Footer } from '../components/Footer'

export function Inicio() {
  return (
    <div className="bg-surface min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* Section 2 – Ribbon (placeholder, sin contenido en diseño) */}
        <div className="h-8 bg-surface-container-low" />
        <ProductShowcase />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  )
}
