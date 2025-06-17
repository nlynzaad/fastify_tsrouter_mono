import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello/')({
  loader: async () => {
    const response = await fetch('/api/hello')
    const data: {data: string} = await response.json()
    return data
  },
  component: RouteComponent,
})

function RouteComponent() {
  const {data} = Route.useLoaderData();

  return (
  <div>
    <h1>Hello</h1>
    <br />
    <p>Message: {data}</p>
  </div>
  )
}
