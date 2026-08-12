import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import EditorialImage from '@/components/EditorialImage'
import { fadeUp, staggerContainer } from '@/lib/motion'

function Row({ reverse, eyebrow, title, body, image }: {
  reverse?: boolean
  eyebrow: string
  title: string
  body: string
  image: { src: string; alt: string }
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  return (
    <section ref={ref} className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
      <div className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${reverse ? 'md:[&>*:first-child]:col-start-8' : ''}`}>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={`md:col-span-5 ${reverse ? 'md:col-start-8' : ''}`}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">{eyebrow}</motion.p>
          <motion.h2 variants={fadeUp} className="heading-hero font-display text-[32px] md:text-[42px]">{title}</motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-[15px] leading-relaxed text-ash">{body}</motion.p>
        </motion.div>
        <div className={`md:col-span-6 ${reverse ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7'}`}>
          <EditorialImage image={{ ...image, orientation: 'landscape' }} className="aspect-[4/5] md:aspect-[3/4]" />
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <section className="relative flex h-[70svh] w-full items-end overflow-hidden bg-ink px-6 pb-16 md:px-10 md:pb-20">
        <img
          src="https://picsum.photos/seed/about-hero/2400/1400"
          alt="Photographer working on location with camera in hand"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <h1 className="heading-hero relative font-display text-[13vw] text-paper md:text-[80px]">I&rsquo;m Rowan.</h1>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <p className="text-[17px] leading-relaxed text-ash">
          I started photographing weddings the way I photographed everything else —
          by getting close and staying quiet. Eleven years on, that instinct hasn&rsquo;t
          changed, even if the locations have gotten wilder.
        </p>
      </section>

      <Row
        eyebrow="Approach"
        title="I document, I don't direct."
        body="Most of what you'll see in your gallery happened whether or not I was there to see it. My job is to be close enough, and quiet enough, that it happens anyway."
        image={{ src: 'https://picsum.photos/seed/about-1/1400/1750', alt: 'Photographer crouched low, camera raised, on a hillside' }}
      />
      <Row
        reverse
        eyebrow="Style"
        title="Built for weather, not around it."
        body="Rain, wind and low cloud aren't obstacles here — they're the reason to book Scotland in the first place. Every story in this portfolio was shot in whatever the sky provided that day."
        image={{ src: 'https://picsum.photos/seed/about-2/1400/1750', alt: 'Camera bag and waterproof gear laid out before a shoot' }}
      />
      <Row
        eyebrow="Off Duty"
        title="Family, on the same hillsides."
        body="When I'm not shooting, I'm usually back on the same trails with my own family, scouting the next spot before I know whose wedding it's for."
        image={{ src: 'https://picsum.photos/seed/about-3/1400/1750', alt: 'Family walking together on a Highland trail' }}
      />
    </>
  )
}
