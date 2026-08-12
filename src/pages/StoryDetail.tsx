import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import EditorialImage from '@/components/EditorialImage'
import { fadeUp, staggerContainer, EASE } from '@/lib/motion'
import { getStoryBySlug, stories } from '@/data/stories'

function StoryHero({ story }: { story: NonNullable<ReturnType<typeof getStoryBySlug>> }) {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <motion.img
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        src={story.heroImage.src}
        alt={story.heroImage.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="relative flex h-full flex-col items-start justify-end px-6 pb-20 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="eyebrow"
          style={{ color: '#D8D4CB' }}
        >
          {story.location.toUpperCase()} — {story.category.toUpperCase()} — {story.year}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
          className="heading-hero mt-4 font-display text-[13vw] text-paper md:text-[80px]"
        >
          {story.title}
        </motion.h1>
      </div>
    </section>
  )
}

function StoryIntro({ story }: { story: NonNullable<ReturnType<typeof getStoryBySlug>> }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  return (
    <section ref={ref} className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 gap-10 md:grid-cols-12"
      >
        <motion.p variants={fadeUp} className="heading-hero font-display text-[32px] md:col-span-7 md:text-[44px]">
          The Story
        </motion.p>
        <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-ash md:col-span-4 md:col-start-9">
          {story.description}
        </motion.p>
      </motion.div>
    </section>
  )
}

function ImageSequence({ story }: { story: NonNullable<ReturnType<typeof getStoryBySlug>> }) {
  const blocks: ReactNode[] = []
  const imgs = story.images

  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i]

    if (img.orientation === 'landscape') {
      blocks.push(<EditorialImage key={img.src} image={img} className="aspect-[16/9] w-full md:aspect-[21/9]" />)
      continue
    }

    const next = imgs[i + 1]
    if (next && next.orientation === 'portrait') {
      blocks.push(
        <div key={img.src} className="grid grid-cols-2 gap-6">
          <EditorialImage image={img} className="aspect-[3/4]" />
          <EditorialImage image={next} className="mt-16 aspect-[3/4]" />
        </div>,
      )
      i += 1
      continue
    }

    blocks.push(
      <div key={img.src} className="mx-auto max-w-[520px]">
        <EditorialImage image={img} className="aspect-[3/4]" />
      </div>,
    )
  }

  return <section className="mx-auto max-w-[1600px] space-y-6 px-6 pb-24 md:px-10">{blocks}</section>
}

function StoryQuote({ quote }: { quote: NonNullable<NonNullable<ReturnType<typeof getStoryBySlug>>['quote']> }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  return (
    <section ref={ref} className="bg-mist px-6 py-28 md:px-10 md:py-36">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p variants={fadeUp} className="heading-hero font-display text-[26px] leading-snug md:text-[36px]">
          &ldquo;{quote.text}&rdquo;
        </motion.p>
        <motion.p variants={fadeUp} className="eyebrow mt-8">
          {quote.attribution}
        </motion.p>
      </motion.div>
    </section>
  )
}

function NextStory({ current }: { current: string }) {
  const idx = stories.findIndex((s) => s.slug === current)
  const next = stories[(idx + 1) % stories.length]
  return (
    <Link to={`/photography/${next.slug}`} className="group relative block h-[70svh] w-full overflow-hidden bg-ink">
      <img
        src={next.heroImage.src}
        alt={next.heroImage.alt}
        className="h-full w-full object-cover opacity-70 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/30 text-center">
        <p className="eyebrow" style={{ color: '#D8D4CB' }}>Next Story</p>
        <p className="heading-hero mt-4 font-display text-[10vw] text-paper md:text-[56px]">{next.title}</p>
      </div>
    </Link>
  )
}

export default function StoryDetail() {
  const { slug } = useParams()
  const story = getStoryBySlug(slug || '')

  if (!story) return <Navigate to="/photography" replace />

  return (
    <>
      <StoryHero story={story} />
      <StoryIntro story={story} />
      <ImageSequence story={story} />
      {story.quote && <StoryQuote quote={story.quote} />}
      <NextStory current={story.slug} />
    </>
  )
}
