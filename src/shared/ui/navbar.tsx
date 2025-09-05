import { ReactNode, useState } from 'react'

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
]

export function Navbar(props: { children?: ReactNode }) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0])

  return (
    <header className="sticky top-0 z-20 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="/assets/public-logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {props.children ? (
          <div className="order-3 w-full sm:order-none sm:flex-1 sm:px-6">
            {/* Mobile: accordion toggle for the SearchBar */}
            <div className="sm:hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-2 text-left text-sm font-medium text-gray-900 shadow ring-1 ring-gray-200"
                aria-controls="navbar-mobile-search"
                aria-expanded={isMobileSearchOpen}
                onClick={() => setIsMobileSearchOpen((v) => !v)}
              >
                <span>Recherche</span>
                <span className={`transition-transform ${isMobileSearchOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <div
                id="navbar-mobile-search"
                className={`grid transition-all duration-300 ${isMobileSearchOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
                aria-hidden={!isMobileSearchOpen}
              >
                <div className="overflow-hidden">
                  {props.children}
                </div>
              </div>
            </div>
            {/* Desktop: always visible */}
            <div className="mx-auto hidden w-full max-w-2xl sm:block">{props.children}</div>
          </div>
        ) : null}

        <nav className="flex items-center gap-3 text-sm flex-shrink-0">
           <a
             className="hidden rounded-full border border-gray-300 px-3 py-1.5 hover:bg-gray-50 sm:block"
             href="#register"
           >
             + Inscrire une entreprise
           </a>
          
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-50"
            >
              <span>{selectedLang.flag}</span>
              <span className="hidden sm:inline">{selectedLang.name}</span>
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang)
                      setIsLangMenuOpen(false)
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-gray-100"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
         
        </nav>
      </div>
    </header>
  )
}
