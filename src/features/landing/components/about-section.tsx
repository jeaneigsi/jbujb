import image_010 from '../../../../assets/image_010.png'

export function AboutSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-last md:order-first">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">À propos de nous</h2>
            <p className="mt-4 text-lg text-gray-600">
              Chez JBUJB, nous sommes une équipe passionnée avec une mission : digitaliser les services locaux au Maroc
              — pour rendre les expériences du quotidien plus intelligentes, plus rapides et mieux connectées.
            </p>
          </div>
          <div>
            <img
              src={image_010}
              alt="À propos de nous"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
