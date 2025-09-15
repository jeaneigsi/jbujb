import { useTranslation } from 'react-i18next'
import logo from '../../../../assets/public-logo.png'

export function Footer() {
  const { t } = useTranslation('landing')
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src={logo} alt="Logo" className="h-8" />
            <p className="mt-4 text-sm text-gray-600">{t('footer.aboutText')}</p>
            <div className="mt-6 flex space-x-2">
              {['W', 'in', 'Ig', 'Yt', 'Tk'].map((txt) => (
                <a
                  key={txt}
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
                >
                  {txt}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{t('footer.userLinks.title')}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  {t('footer.userLinks.home')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  {t('footer.userLinks.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  {t('footer.userLinks.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  {t('footer.userLinks.merchant')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{t('footer.support.title')}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  {t('footer.support.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">{t('footer.support.faq')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  {t('footer.support.howItWorks')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{t('footer.contact.title')}</h3>
            <p className="mt-4 text-sm text-gray-600">{t('footer.contact.subtitle')}</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder={t('footer.contact.emailPlaceholder')}
                className="w-full rounded-l-md border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="rounded-r-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
              >
                {t('footer.contact.subscribe')}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          {t('footer.copyright', { year })}
        </div>
      </div>
    </footer>
  )
}

