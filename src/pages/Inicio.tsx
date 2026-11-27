import type { Page } from '../App'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { ProductShowcase } from '../components/ProductShowcase'
import { Footer } from '../components/Footer'

interface InicioProps {
  onNavigate?: (page: Page) => void
}

export function Inicio({ onNavigate }: InicioProps) {
  return (
    <div className="bg-surface min-h-screen">
      <Header activePage="inicio" onNavigate={onNavigate} />
      <main>
        <HeroSection />
        {/* Section 2 – Ribbon (placeholder, sin contenido en diseño) */}
        <div className="h-8 bg-surface-container-low" />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}
