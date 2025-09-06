import { useTranslation } from 'react-i18next'
import image_001 from '../../../../assets/image_001.jpeg'
import image_002 from '../../../../assets/image_002.jpeg'
import image_003 from '../../../../assets/image_003.jpeg'
import image_004 from '../../../../assets/image_004.png'

export function ServicesSection() {
  const { t } = useTranslation('landing')
  const items = t('services.items', { returnObjects: true }) as { title: string; description: string }[]
  const IMAGES = [image_001, image_002, image_003, image_004]
  return (
    <section className="bg-gray-50 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">{t('services.title')}</h2>
        <div className="mt-12 rounded-2xl border bg-white p-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((service, idx) => (
              <div key={service.title} className="flex flex-col items-start">
                <img src={IMAGES[idx]} alt={service.title} className="h-40 w-full rounded-lg object-cover" />
                <h3 className="mt-4 text-lg font-bold text-gray-800">{service.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                <button
                  type="button"
                  className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-500"
                >
                  {t('services.discover')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

