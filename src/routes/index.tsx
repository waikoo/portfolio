import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="justify-center gap-10 bg-gray-500 p-3 flex">
      <Link to="/evelin" >
        Evelin
      </Link>

      <Link to="/barna" >
        Barna
      </Link>
    </div>
  )
})
