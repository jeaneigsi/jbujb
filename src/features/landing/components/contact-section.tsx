export function ContactSection() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Profitez de réductions supplémentaires en commandant sur notre plateforme
        </h2>
        <p className="mt-4 text-gray-600">Rejoignez-nous pour profiter de réductions et d'offres spéciales.</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Entrez votre e-mail"
            className="w-full rounded-md border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="mt-3 w-full flex-shrink-0 rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            S'abonner
          </button>
        </form>
      </div>
    </section>
  )
}
