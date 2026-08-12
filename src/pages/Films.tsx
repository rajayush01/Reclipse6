import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { films } from '@/data/films'

export default function Films() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-28 pt-36 md:px-10 md:pt-44">
      <SectionHeading eyebrow="Motion" title="Cinematic Films" className="mb-16 md:mb-24" />

      <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3">
        {films.map((film) => (
          <Link
            key={film.slug}
            to={`/films/${film.slug}`}
            data-cursor="PLAY"
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-mist"
          >
            <img
              src={film.poster}
              alt={`${film.couple}, ${film.location}`}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
            <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-paper/70 text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Play size={14} fill="currentColor" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-5">
              <p className="font-display text-lg text-paper">{film.couple}</p>
              <p className="eyebrow mt-1" style={{ color: '#D8D4CB' }}>{film.location} — {film.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
