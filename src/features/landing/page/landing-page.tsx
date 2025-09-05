import { Navbar } from '../../../shared/public-api'
import { AboutSection } from '../components/about-section'
import { ContactSection } from '../components/contact-section'
import { Footer } from '../components/footer'
import { HeroSection } from '../components/hero-section'
import { ServicesSection } from '../components/services-section'

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
