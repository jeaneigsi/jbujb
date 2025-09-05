function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
    </svg>
  )
}

export function SearchBar() {
  return (
    <form
      action="#"
      className="mx-auto flex w-full max-w-3xl flex-col items-stretch gap-2 overflow-visible rounded-2xl sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-full sm:bg-white sm:p-2 sm:shadow-lg"
    >
      <input
        aria-label="Recherche"
        placeholder="Que cherches‑tu ?"
        className="min-w-0 flex-1 rounded-2xl border border-white/30 bg-white px-4 py-3 outline-none sm:rounded-full sm:border-0"
      />
      <div className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white px-3 py-2 text-gray-500 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-3 sm:py-0">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
        <input aria-label="Ville" defaultValue="Paris" className="w-28 rounded-full px-1 py-2 outline-none" />
      </div>
      <button
        type="submit"
        className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full sm:ml-2"
        style={{ backgroundColor: '#111827' }}
        aria-label="Rechercher"
      >
        <IconSearch />
      </button>
    </form>
  )
}
