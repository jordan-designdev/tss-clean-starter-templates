import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  // Start building your UI here.
  return (
    <div className="flex min-h-svh items-center justify-center">
      <h1 className="font-medium text-7xl">Start building your UI here.</h1>
    </div>
  )
}
