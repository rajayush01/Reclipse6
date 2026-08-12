import { useParams, Navigate, Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play } from 'lucide-react'
import { fadeUp, staggerContainer, EASE } from '@/lib/motion'
import { films, getFilmBySlug } from '@/data/films'

export default function FilmDetail() {
  const { slug } = useParams()
  const film = getFilmBySlug(slug || '')
  if (!film) return <Navigate to="/films" replace />

  const introRef = useRef(null)
  const introInView = useInView(introRef, { once: true, margin: '-15% 0px' })
  const idx = films.findIndex((f) => f.slug === film.slug)
  const next = films[(idx + 1) % films.length]

  return (
    <>
      <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
        <motion.img
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          src={film.poster}
          alt={`${film.couple}, ${film.location}`}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="eyebrow"
            style={{ color: '#D8D4CB' }}
          >
            {film.location.toUpperCase()} — {film.year}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            className="heading-hero mt-4 font-display text-[13vw] text-paper md:text-[76px]"
          >
            {film.couple}
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
            data-cursor="PLAY"
            className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-paper/70 text-paper transition-colors hover:bg-paper hover:text-ink"
            aria-label="Play film"
          >
            <Play size={18} fill="currentColor" />
          </motion.button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 md:px-10">
        <div className="aspect-video w-full bg-ink">
          <div className="flex h-full w-full items-center justify-center text-mist">
            <p className="eyebrow">Film player — {film.couple}</p>
          </div>
        </div>
      </section>

      <section ref={introRef} className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          <motion.p variants={fadeUp} className="heading-hero font-display text-[28px] md:col-span-7 md:text-[38px]">
            The Story
          </motion.p>
          <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-ash md:col-span-4 md:col-start-9">
            {film.description}
          </motion.p>
        </motion.div>
      </section>

      {film.stills.length > 0 && (
        <section className="mx-auto max-w-[1600px] space-y-6 px-6 pb-24 md:px-10">
          {film.stills.map((still) => (
            <img
              key={still.src}
              src={still.src}
              alt={still.alt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
            />
          ))}
        </section>
      )}

      {film.quote && (
        <section className="bg-mist px-6 py-28 text-center md:px-10 md:py-36">
          <p className="heading-hero mx-auto max-w-2xl font-display text-[26px] leading-snug md:text-[36px]">
            &ldquo;{film.quote.text}&rdquo;
          </p>
          <p className="eyebrow mt-8">{film.quote.attribution}</p>
        </section>
      )}

      <Link to={`/films/${next.slug}`} className="group relative block h-[60svh] w-full overflow-hidden bg-ink">
        <img
          src={next.poster}
          alt={next.couple}
          className="h-full w-full object-cover opacity-70 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/30 text-center">
          <p className="eyebrow" style={{ color: '#D8D4CB' }}>Next Film</p>
          <p className="heading-hero mt-4 font-display text-[10vw] text-paper md:text-[48px]">{next.couple}</p>
        </div>
      </Link>
    </>
  )
}
