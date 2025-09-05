import logo from '../../../../assets/public-logo.png'

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src={logo} alt="Logo" className="h-8" />
            <p className="mt-4 text-sm text-gray-600">
              JBUJB est une plateforme intelligente et fiable qui met en relation les clients avec des commerçants de
              confiance pour tous leurs besoins du quotidien. Nous simplifions les commandes pour qu'elles soient
              rapides, sûres et accessibles en quelques clics.
            </p>
            <div className="mt-6 flex space-x-2">
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
              >
                W
              </a>
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
              >
                in
              </a>
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
              >
                Ig
              </a>
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
              >
                Yt
              </a>
              <a
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300"
              >
                Tk
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Liens Utilisateur</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  Termes et Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  Enregistrement du Commerçant
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Assistance</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  Contactez nous
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-500">
                  Comment ça marche
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Entrer en contact</h3>
            <p className="mt-4 text-sm text-gray-600">Nous serions ravis de vous entendre.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="w-full rounded-l-md border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="rounded-r-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
              >
                Recevez
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} — Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
