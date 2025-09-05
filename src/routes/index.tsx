import { createFileRoute } from '@tanstack/react-router'
import { lazy } from 'react'

const LandingPage = lazy(() =>
  import('../features/landing/public-api').then((m) => ({ default: m.LandingPage })),
)

export const Route = createFileRoute('/')({ component: () => <LandingPage /> })
