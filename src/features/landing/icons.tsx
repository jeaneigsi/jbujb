import type { CategoryKey } from './types/Category'
import type { ReactElement } from 'react'

export const LandingIcons: Record<CategoryKey, ReactElement> = {
  pharma: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#22c55e" d="M11 2h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
    </svg>
  ),
  super: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#f59e0b" d="M3 4h18l-2 7H5L3 4Zm3 9h12l-1 7H7l-1-7Z" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#ef4444" d="M7 2h2v9H7V2Zm4 0h2v6c0 1.66-1.34 3-3 3h-1V2h2Zm6 0c1.66 0 3 1.34 3 3v8h-2v-4h-2v4h-2V5c0-1.66 1.34-3 3-3Z" />
    </svg>
  ),
  spa: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#06b6d4" d="M12 2c3 3 3 6 0 9-3-3-3-6 0-9Zm0 7c5 0 9 4 9 9H3c0-5 4-9 9-9Z" />
    </svg>
  ),
  hair: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#f59e0b" d="M4 4h2l6 6 6-6h2l-7 7 3 3-1 1-3-3-3 3-1-1 3-3L4 4Z" />
    </svg>
  ),
  doctor: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#22c55e" d="M11 14H8v3H6v-3H3v-2h3V9h2v3h3v2Zm1-12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" />
    </svg>
  ),
  dent: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#60a5fa" d="M7 2h10c2.2 0 4 1.8 4 4 0 3.9-2.1 6-4 6-1.2 0-2-.6-3-1.5-.6-.6-1.4-.6-2 0C11 11.4 10.2 12 9 12 7.1 12 5 9.9 5 6 5 3.8 5.8 2 7 2Z" />
    </svg>
  ),
  plumb: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#fbbf24" d="M4 3h6v4H8v3h3v3H8v8H6V13H3V10h3V7H4V3Zm10 0h6v4h-2v3h3v3h-3v8h-2V13h-3V10h3V7h-2V3Z" />
    </svg>
  ),
  tire: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#65a30d" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
    </svg>
  ),
  acct: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#60a5fa" />
      <path fill="#1e3a8a" d="M6 9h4v2H6V9Zm0 4h7v2H6v-2Z" />
    </svg>
  ),
}
