import { useTranslation } from 'react-i18next'

export function ContactSection() {
  const { t } = useTranslation('landing')
  return (
    <section className="bg-gray-50 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('contact.title')}</h2>
        <p className="mt-4 text-gray-600">{t('contact.subtitle')}</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col sm:flex-row">
          <input
            type="email"
            placeholder={t('contact.emailPlaceholder')}
            className="w-full rounded-md border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="mt-3 w-full flex-shrink-0 rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            {t('contact.subscribe')}
          </button>
        </form>
      </div>
    </section>
  )
}

