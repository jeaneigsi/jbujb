import { useState } from 'react'
import { Navbar, SearchBar } from '../../../shared/public-api'
import { AboutSection } from '../components/about-section'
import { ContactSection } from '../components/contact-section'
import { Footer } from '../components/footer'
import { HeroSection } from '../components/hero-section'
import { ServicesSection } from '../components/services-section'

export function LandingPage() {
  const [isSearchInNavbar, setIsSearchInNavbar] = useState(false)

  return (
    <div>
      <Navbar>{isSearchInNavbar ? <SearchBar variant="navbar" /> : null}</Navbar>
      <HeroSection isSearchInNavbar={isSearchInNavbar} setIsSearchInNavbar={setIsSearchInNavbar} />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
