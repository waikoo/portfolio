import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="relative">
      <div className="justify-center bg-white bg-opacity-10 gap-10 p-3 flex absolute top-0 right-0 left-0">
        <Link to="/evelin" >
          Evelin
        </Link>

        <Link to="/barna" >
          Barna
        </Link>
      </div>

      <video
        className="w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        src="/public/animated_gradient.mp4"></video>
    </div>
  )
})
