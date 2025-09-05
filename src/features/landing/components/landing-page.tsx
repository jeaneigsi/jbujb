import { useEffect, useRef, useState } from 'react'
import image_001 from '../../../../assets/image_001.jpeg'
import image_002 from '../../../../assets/image_002.jpeg'
import image_003 from '../../../../assets/image_003.jpeg'
import { Navbar, SearchBar } from '../../../shared/public-api'
import { CATEGORIES } from '../categories'
import { LandingIcons } from '../icons'

const SERVICES = [
  {
    title: 'Expériences uniques',
    description: 'Découvrez des activités locales et des lieux insolites.',
    image: image_001,
  },
  {
    title: 'Gastronomie locale',
    description: 'Savourez les meilleurs plats et boissons de la région.',
    image: image_002,
  },
  {
    title: 'Culture et patrimoine',
    description: 'Explorez les musées, monuments et traditions locales.',
    image: image_003,
  },
]

export function LandingPage() {
  const [isSearchInNavbar, setIsSearchInNavbar] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSearchInNavbar(!entry.isIntersecting)
      },
      { threshold: 0 },
    )

    const currentRef = triggerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar>{isSearchInNavbar ? <SearchBar /> : null}</Navbar>

      <section className="relative z-0 overflow-hidden" style={{ backgroundColor: '#f5c318' }}>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 pb-24 sm:py-16 md:py-20 md:pb-40">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Trouve tout près de chez toi
          </h1>

          <div className="mx-auto mt-6 max-w-3xl sm:mt-8" style={{ visibility: isSearchInNavbar ? 'hidden' : 'visible' }}>
            <SearchBar />
          </div>

          <div ref={triggerRef}>
            <h2 className="mt-10 text-center text-xl font-bold text-gray-800 sm:mt-12">Catégories populaires</h2>
            <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm transition hover:shadow"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gray-50">{LandingIcons[c.iconKey]}</span>
                  <span className="text-sm font-medium text-gray-800">{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-white/70">
              Voir toutes
            </button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">Nos Services</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl">
                <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">© {new Date().getFullYear()} — Tous droits réservés.</div>
      </footer>
    </div>
  )
}
