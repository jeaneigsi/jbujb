import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
  component: IndexPage,
})

function IndexPage() {
  const { data } = useSuspenseQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200))
      return { message: 'Bienvenue sur la base TanStack' }
    },
  })

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Accueil</h1>
      <p className="mt-2 text-gray-600">{data.message}</p>
    </main>
  )
}

