import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@tanstack/react-router'
import logoUrl from '../../../assets/public-logo.png'

const LANGUAGES = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

export function Navbar(props: { children?: ReactNode }) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const { t, i18n } = useTranslation('common')
  const navigate = useNavigate()
  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0]

  return (
    <header className="sticky top-0 z-20 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:flex-nowrap">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
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
                <span>{t('nav.search')}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={`h-4 w-4 transition-transform ${isMobileSearchOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                id="navbar-mobile-search"
                className={`grid transition-all duration-300 ${isMobileSearchOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
                aria-hidden={!isMobileSearchOpen}
              >
                <div className="overflow-hidden">{props.children}</div>
              </div>
            </div>
            {/* Desktop: always visible */}
            <div className="mx-auto hidden w-full max-w-2xl sm:block">{props.children}</div>
          </div>
        ) : null}

        <nav className="flex items-center gap-3 text-sm flex-shrink-0">
          <a
            href="#register"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/50"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 4v12M4 10h12" />
            </svg>
            <span>{t('nav.register')}</span>
          </a>

          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="inline-flex items-center gap-2 rounded-md border border-gray-400/80 px-3 py-2 text-gray-800 bg-white/90 ring-1 ring-inset ring-gray-900/10 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
            >
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.name}</span>
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-gray-900/10">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setIsLangMenuOpen(false)
                      navigate({ to: '/$locale', params: { locale: lang.code as 'fr' | 'en' } })
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
