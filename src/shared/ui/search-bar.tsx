import { useEffect, useRef, useState } from 'react'

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
    </svg>
  )
}

export function SearchBar(props: { variant?: 'default' | 'navbar' } = {}) {
  const cities = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fès',
    'Tanger',
    'Agadir',
    'Meknès',
    'Oujda',
    'Tétouan',
    'Salé',
  ]
  const typedCity = useTypedPlaceholder(cities, { typeMs: 70, deleteMs: 35, holdMs: 900 })
  const variant = props.variant ?? 'default'
  const formBase =
    'mx-auto flex w-full max-w-3xl flex-col items-stretch gap-2 overflow-visible rounded-2xl sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-full sm:p-2'
  const formClass =
    variant === 'navbar'
      ? `${formBase} bg-white shadow-lg ring-1 ring-gray-200`
      : `${formBase} sm:bg-white sm:shadow-lg`

  return (
    <form action="#" className={formClass}>
      <input
        aria-label="Recherche"
        placeholder="Que cherches‑tu ?"
        className="min-w-0 flex-1 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none sm:rounded-full sm:border-0"
      />
      <div className={variant === 'navbar' ? 'flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-gray-600' : 'flex items-center gap-2 rounded-2xl border border-white/30 bg-white px-3 py-2 text-gray-500 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-3 sm:py-0'}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
        <input aria-label="Ville" placeholder={typedCity || 'Ville'} className="min-w-0 flex-1 rounded-full px-1 py-2 outline-none text-gray-900 placeholder:text-gray-500" />
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

function useTypedPlaceholder(items: string[], opts?: { typeMs?: number; deleteMs?: number; holdMs?: number }) {
  const typeMs = opts?.typeMs ?? 80
  const deleteMs = opts?.deleteMs ?? 40
  const holdMs = opts?.holdMs ?? 1200

  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('typing')
  const [text, setText] = useState('')
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const current = items[index % items.length] ?? ''

    const schedule = (fn: () => void, ms: number) => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(fn, ms)
    }

    if (phase === 'typing') {
      if (text.length < current.length) {
        schedule(() => setText(current.slice(0, text.length + 1)), typeMs)
      } else {
        schedule(() => setPhase('holding'), holdMs)
      }
    } else if (phase === 'holding') {
      schedule(() => setPhase('deleting'), holdMs)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        schedule(() => setText(current.slice(0, text.length - 1)), deleteMs)
      } else {
        schedule(() => {
          setPhase('typing')
          setIndex((i) => (i + 1) % items.length)
        }, 300)
      }
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [deleteMs, holdMs, index, items, phase, text.length, typeMs])

  return text
}
