import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: () => {
    throw redirect({ to: '/$locale', params: { locale: 'fr' } })
  },
})
