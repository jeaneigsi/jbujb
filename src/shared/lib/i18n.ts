import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

export const SUPPORTED_LOCALES = ['fr', 'en'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'fr'

let initialized = false

function initI18n() {
  if (initialized) return
  i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend((lng: string, ns: string) =>
        // Vite will bundle these dynamic imports per locale/namespace
        import(`../../locales/${lng}/${ns}.ts`).then((m) => m.default),
      ),
    )
    .init({
      lng: DEFAULT_LOCALE,
      fallbackLng: DEFAULT_LOCALE,
      supportedLngs: [...SUPPORTED_LOCALES],
      defaultNS: 'common',
      interpolation: { escapeValue: false },
      react: { useSuspense: true },
    })
  initialized = true
}

export async function ensureI18nLocale(locale: Locale, namespaces: string[] = ['common']) {
  initI18n()
  const safeLocale: Locale = (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? locale
    : DEFAULT_LOCALE

  if (i18next.language !== safeLocale) {
    await i18next.changeLanguage(safeLocale)
  }
  // Preload required namespaces to avoid flashes under Suspense
  await i18next.loadNamespaces(namespaces)

  // Reflect in document for accessibility/SEO hints (CSR only)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = safeLocale
    const RTL_LOCALES = ['ar', 'he', 'fa', 'ur'] as const
    const isRtl = (RTL_LOCALES as readonly string[]).includes(safeLocale as unknown as string)
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }

  return safeLocale
}

export { i18next }
