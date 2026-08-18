import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { guides } from '@/data/guides'

export default function Guides() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section ref={ref} className="border-t border-line bg-mist px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <p className="eyebrow mb-4">Plan Your Day</p>
        <h2 className="heading-hero font-display text-[32px] md:text-[44px]">Indian  Guides</h2>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3"
        >
          {guides.map((g) => (
            <motion.div key={g.slug} variants={fadeUp}>
              <Link to={`/journal/${g.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-paper">
                  <img
                    src={g.cover}
                    alt={g.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 font-display text-lg">{g.title}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
