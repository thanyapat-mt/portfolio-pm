import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-extrabold text-gray-200 mb-4">404</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
      <p className="text-gray-500 mb-8">
        That path doesn&apos;t exist. Try one of the role portfolios below.
      </p>
      <Link
        to="/"
        className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-700 transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
