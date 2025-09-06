import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchBar } from '../../../shared/public-api'
import { CATEGORIES } from '../constants/CATEGORIES'
import { LandingIcons } from '../icons'
import image_008 from '../../../../assets/image_008.png'

interface HeroSectionProps {
  isSearchInNavbar?: boolean
  setIsSearchInNavbar?: (isSearchInNavbar: boolean) => void
}

export function HeroSection({ isSearchInNavbar, setIsSearchInNavbar }: HeroSectionProps) {
  const { t } = useTranslation(['landing', 'common'])
  const triggerRef = useRef<HTMLDivElement>(null)
  const [localIsSearchInNavbar, setLocalIsSearchInNavbar] = useState(false)
  const effectiveIsSearchInNavbar = isSearchInNavbar ?? localIsSearchInNavbar
  const setEffectiveIsSearchInNavbar = setIsSearchInNavbar ?? setLocalIsSearchInNavbar
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEffectiveIsSearchInNavbar(!entry.isIntersecting)
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
    <section className="relative z-0 overflow-hidden" style={{ backgroundColor: 'rgba(255, 109, 39, 0.97)' }}>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 pb-24 sm:py-16 md:py-20 md:pb-40">
        <h1 className="text-center text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          {t('hero.title')}
        </h1>

        <div className="mx-auto mt-6 max-w-3xl sm:mt-8">
          {/* Mobile: accordion toggle */}
          {!effectiveIsSearchInNavbar ? (
            <div className="sm:hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl bg-white/95 px-4 py-3 text-left text-sm font-medium text-gray-900 shadow"
                aria-controls="hero-mobile-search"
                aria-expanded={isMobileSearchOpen}
                onClick={() => setIsMobileSearchOpen((v) => !v)}
              >
                <span>{t('common:nav.search')}</span>
                <span className={`transition-transform ${isMobileSearchOpen ? 'rotate-180' : ''}`}>â–¾</span>
              </button>
              <div
                id="hero-mobile-search"
                className={`grid transition-all duration-300 ${isMobileSearchOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
                aria-hidden={!isMobileSearchOpen}
              >
                <div className="overflow-hidden">
                  <SearchBar />
                </div>
              </div>
            </div>
          ) : null}
          {/* Desktop: always visible when not moved to navbar */}
          <div className="hidden sm:block" style={{ visibility: effectiveIsSearchInNavbar ? 'hidden' : 'visible' }}>
            <SearchBar />
          </div>
        </div>

        <div ref={triggerRef}>
          <h2 className="mt-10 text-center text-xl font-bold text-white sm:mt-12">{t('hero.popular')}</h2>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm transition hover:shadow"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gray-50">{LandingIcons[c.iconKey]}</span>
                <span className="text-sm font-medium text-gray-800">{t('categories.' + c.key)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-white/70">
            {t('hero.seeAll')}
          </button>
        </div>
      </div>

      {/* Decorative hero image positioned to the right for visibility */}
      <img
        src={image_008}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="pointer-events-none select-none absolute bottom-[-4rem] right-[-6rem] hidden w-[26rem] opacity-95 blur-[1px] sm:block sm:w-[32rem] md:bottom-[-6rem] md:right-[-8rem] md:w-[40rem] lg:w-[48rem]"
      />
    </section>
  )
}



