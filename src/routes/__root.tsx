import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import type { QueryClient } from '@tanstack/react-query'

type RouterContext = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Suspense fallback={<div className="p-4">Chargement…</div>}>
        <Outlet />
      </Suspense>
      {import.meta.env.DEV ? (
        <TanStackRouterDevtools position="bottom-right" />
      ) : null}
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-4 text-red-600">Erreur: {(error as Error).message}</div>
  ),
})

