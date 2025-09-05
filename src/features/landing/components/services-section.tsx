import image_001 from '../../../../assets/image_001.jpeg'
import image_002 from '../../../../assets/image_002.jpeg'
import image_003 from '../../../../assets/image_003.jpeg'
import image_004 from '../../../../assets/image_004.png'

const SERVICES = [
  {
    title: 'Expériences uniques',
    description: 'Découvrez des activités locales et des lieux insolites.',
    image: image_001,
  },
  {
    title: 'Gastronomie locale',
    description: 'Savourez les meilleurs plats et boissons de la région.',
    image: image_002,
  },
  {
    title: 'Culture et patrimoine',
    description: 'Explorez les musées, monuments et traditions locales.',
    image: image_003,
  },
  {
    title: 'Aventures en plein air',
    description: 'Profitez de la nature avec nos randonnées et excursions.',
    image: image_004,
  },
]

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          Découvrez nos services
        </h2>
        <div className="mt-12 rounded-2xl border bg-white p-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="flex flex-col items-start">
                <img src={service.image} alt={service.title} className="h-40 w-full rounded-lg object-cover" />
                <h3 className="mt-4 text-lg font-bold text-gray-800">{service.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                <button
                  type="button"
                  className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-500"
                >
                  Découvrir &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
