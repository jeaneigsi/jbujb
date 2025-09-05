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
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0])

  return (
    <header className="sticky top-0 z-20 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/assets/public-logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {props.children ? (
          <div className="flex-1 px-4 sm:px-20">
            <div className="mx-auto max-w-md">{props.children}</div>
          </div>
        ) : null}

        <nav className="flex items-center gap-3 text-sm">
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
          <a
            className="hidden rounded-full border border-gray-300 px-3 py-1.5 hover:bg-gray-50 sm:block"
            href="#register"
          >
            + Inscrire une entreprise
          </a>
        </nav>
      </div>
    </header>
  )
}
