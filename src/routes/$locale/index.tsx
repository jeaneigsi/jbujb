import { createFileRoute, redirect } from '@tanstack/react-router'
import { lazy } from 'react'
import { z } from 'zod'
import { ensureI18nLocale } from '../../shared/lib/i18n'

const LandingPage = lazy(() =>
  import('../../features/landing/public-api').then((m) => ({ default: m.LandingPage })),
)

const LocaleSchema = z.union([z.literal('fr'), z.literal('en')])

export const Route = createFileRoute('/$locale/')({
  loader: async ({ params }) => {
    const parsed = LocaleSchema.safeParse(params.locale)
    if (!parsed.success) {
      throw redirect({ to: '/$locale', params: { locale: 'fr' } })
    }
    await ensureI18nLocale(parsed.data, ['common', 'landing'])
    return { locale: parsed.data }
  },
  component: () => <LandingPage />,
})

