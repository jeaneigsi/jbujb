import { Navbar } from '../../shared/public-api'
import { CATEGORIES } from './categories'
import { LandingIcons } from './icons'

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
    </svg>
  )
}

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative z-0 overflow-hidden" style={{ backgroundColor: '#f5c318' }}>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 pb-24 sm:py-16 md:py-20 md:pb-40">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Trouve tout près de chez toi
          </h1>

          <form
            action="#"
            className="mx-auto mt-6 flex max-w-3xl flex-col items-stretch gap-2 overflow-visible rounded-2xl sm:mt-8 sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-full sm:bg-white sm:p-2 sm:shadow-lg"
          >
            <input
              aria-label="Recherche"
              placeholder="Que cherches‑tu ?"
              className="min-w-0 flex-1 rounded-2xl border border-white/30 bg-white px-4 py-3 outline-none sm:rounded-full sm:border-0"
            />
            <div className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white px-3 py-2 text-gray-500 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-3 sm:py-0">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <input aria-label="Ville" defaultValue="Paris" className="w-28 rounded-full px-1 py-2 outline-none" />
            </div>
            <button
              type="submit"
              className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full sm:ml-2"
              style={{ backgroundColor: '#111827' }}
              aria-label="Rechercher"
            >
              <IconSearch />
            </button>
          </form>

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

          <div className="mt-6 text-center">
            <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-white/70">
              Voir toutes
            </button>
          </div>
        </div>

        <img
          src="/assets/image_004.png"
          alt=""
          role="presentation"
          className="pointer-events-none absolute bottom-0 left-0 z-0 hidden select-none md:block"
          style={{ height: '22rem' }}
        />
        <img
          src="/assets/image_013.png"
          alt=""
          role="presentation"
          className="pointer-events-none absolute bottom-4 right-6 z-0 hidden select-none md:block"
          style={{ height: '18rem' }}
        />
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">© {new Date().getFullYear()} JBJB — Tous droits réservés.</div>
      </footer>
    </div>
  )
}

