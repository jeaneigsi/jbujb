const brand = '#F75F16'

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/assets/public-logo.png" alt="JBUJB Logo" className="h-8 w-auto" />
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <a className="rounded-full border border-gray-300 px-3 py-1.5 hover:bg-gray-50" href="#register">
            + Inscrire une entreprise
          </a>
        </nav>
      </div>
    </header>
  )
}
