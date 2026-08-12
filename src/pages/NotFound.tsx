import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="heading-hero font-display text-[48px] md:text-[64px]">Page not found.</h1>
      <Link to="/" className="eyebrow mt-8 border-b border-ink pb-1">
        Return Home →
      </Link>
    </section>
  )
}
