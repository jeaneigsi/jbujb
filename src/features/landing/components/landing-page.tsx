import { useEffect, useRef, useState } from 'react'
import image_001 from '../../../../assets/image_001.jpeg'
import image_002 from '../../../../assets/image_002.jpeg'
import image_003 from '../../../../assets/image_003.jpeg'
import image_004 from '../../../../assets/image_004.png'
import logo from '../../../../assets/public-logo.png'
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
  {
    title: 'Aventures en plein air',
    description: 'Profitez de la nature avec nos randonnées et excursions.',
    image: image_004,
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

      <section className="bg-gray-50 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Découvrez nos services
          </h2>
          <div className="mt-12 rounded-2xl border bg-white p-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <div key={service.title} className="flex flex-col items-start">
                  <img src={service.image} alt={service.title} className="h-40 w-full rounded-lg object-cover" />
                  <h3 className="mt-4 text-lg font-bold text-gray-800">{service.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                  <button
                    type="button"
                    className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-500"
                  >
                    Découvrir &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <img src={logo} alt="Logo" className="h-8" />
              <p className="mt-4 text-sm text-gray-600">
                JBUJB est une plateforme intelligente et fiable qui met en relation les clients avec des commerçants de
                confiance pour tous leurs besoins du quotidien. Nous simplifions les commandes pour qu'elles soient
                rapides, sûres et accessibles en quelques clics.
              </p>
              <div className="mt-6 flex space-x-2">
                <a
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
                >
                  W
                </a>
                <a
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
                >
                  in
                </a>
                <a
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
                >
                  Ig
                </a>
                <a
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
                >
                  Yt
                </a>
                <a
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
                >
                  Tk
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Liens Utilisateur</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Politique de Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Termes et Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Enregistrement du Commerçant
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Assistance</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Contactez nous
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Comment ça marche
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Entrer en contact</h3>
              <p className="mt-4 text-sm text-gray-600">Nous serions ravis de vous entendre.</p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full rounded-l-md border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
                >
                  Recevez
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} — Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}
