import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/evelin')({
  component: () => <div>Hello /evelin!</div>
})