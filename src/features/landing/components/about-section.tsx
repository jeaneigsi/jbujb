import { useTranslation } from 'react-i18next'
import image_010 from '../../../../assets/image_010.png'

export function AboutSection() {
  const { t } = useTranslation('landing')
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-last md:order-first">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('about.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('about.body')}</p>
          </div>
          <div>
            <img src={image_010} alt={t('about.imageAlt')} className="w-full rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

