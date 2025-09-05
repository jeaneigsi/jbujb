import { Navbar } from '../../../shared/public-api'
import { AboutSection } from './about-section'
import { ContactSection } from './contact-section'
import { Footer } from './footer'
import { HeroSection } from './hero-section'
import { ServicesSection } from './services-section'

export function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
