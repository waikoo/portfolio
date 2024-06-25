import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/barna')({
  component: () => <div>Hello /barna!</div>
})