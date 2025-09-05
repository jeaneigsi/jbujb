import { Navbar } from '../../shared/public-api'

type Cat = {
  key: string
  label: string
  icon: JSX.Element
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
    </svg>
  )
}

// Minimal inline SVGs inspired by common icon sets (W3Schools examples)
const I = {
  pharma: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#22c55e" d="M11 2h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
    </svg>
  ),
  market: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#f59e0b" d="M3 4h18l-2 7H5L3 4Zm3 9h12l-1 7H7l-1-7Z" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#ef4444" d="M7 2h2v9H7V2Zm4 0h2v6c0 1.66-1.34 3-3 3h-1V2h2Zm6 0c1.66 0 3 1.34 3 3v8h-2v-4h-2v4h-2V5c0-1.66 1.34-3 3-3Z" />
    </svg>
  ),
  spa: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#06b6d4" d="M12 2c3 3 3 6 0 9-3-3-3-6 0-9Zm0 7c5 0 9 4 9 9H3c0-5 4-9 9-9Z" />
    </svg>
  ),
  hair: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#f59e0b" d="M4 4h2l6 6 6-6h2l-7 7 3 3-1 1-3-3-3 3-1-1 3-3L4 4Z" />
    </svg>
  ),
  doctor: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#22c55e" d="M11 14H8v3H6v-3H3v-2h3V9h2v3h3v2Zm1-12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" />
    </svg>
  ),
  dentist: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#60a5fa" d="M7 2h10c2.2 0 4 1.8 4 4 0 3.9-2.1 6-4 6-1.2 0-2-.6-3-1.5-.6-.6-1.4-.6-2 0C11 11.4 10.2 12 9 12 7.1 12 5 9.9 5 6 5 3.8 5.8 2 7 2Z" />
    </svg>
  ),
  plumber: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#fbbf24" d="M4 3h6v4H8v3h3v3H8v8H6V13H3V10h3V7H4V3Zm10 0h6v4h-2v3h3v3h-3v8h-2V13h-3V10h3V7h-2V3Z" />
    </svg>
  ),
  tire: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#65a30d" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
    </svg>
  ),
  accountant: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#60a5fa" />
      <path fill="#1e3a8a" d="M6 9h4v2H6V9Zm0 4h7v2H6v-2Z" />
    </svg>
  ),
}

const categories: Cat[] = [
  { key: 'pharma', label: 'Pharmacies', icon: I.pharma },
  { key: 'super', label: 'Supermarchés', icon: I.market },
  { key: 'food', label: 'Restaurants', icon: I.food },
  { key: 'spa', label: 'Esthéticiens', icon: I.spa },
  { key: 'hair', label: 'Coiffeurs', icon: I.hair },
  { key: 'doctor', label: 'Médecins', icon: I.doctor },
  { key: 'dent', label: 'Dentistes', icon: I.dentist },
  { key: 'plumb', label: 'Plombiers', icon: I.plumber },
  { key: 'tire', label: 'Pneus', icon: I.tire },
  { key: 'acct', label: 'Comptables', icon: I.accountant },
]

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative z-0 overflow-hidden" style={{ backgroundColor: '#f5c318' }}>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 pb-24 sm:py-16 md:py-20 md:pb-40">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Trouve tout près de chez toi
          </h1>

          {/* Search */}
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

          {/* Categories */}
          <h2 className="mt-10 text-center text-xl font-bold text-gray-800 sm:mt-12">Catégories populaires</h2>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm transition hover:shadow"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gray-50">{c.icon}</span>
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

        {/* Side illustrations, placed behind content and responsive */}
        <img
          src="/assets/fiorista.png"
          alt=""
          role="presentation"
          className="pointer-events-none absolute bottom-0 left-[-2rem] z-0 hidden select-none md:block"
          style={{ height: '36rem', width: 'auto' }}
        />
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">© {new Date().getFullYear()}  JBUJB — Tous droits réservés.</div>
      </footer>
    </div>
  )
}
