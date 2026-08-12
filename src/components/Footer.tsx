import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer } from '@/lib/motion'

const COLUMNS = [
  {
    heading: 'Studio',
    links: [
      { label: 'Photography', to: '/photography' },
      { label: 'Films', to: '/films' },
      { label: 'About', to: '/about' },
      { label: 'Journal', to: '/journal' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Enquire', to: '/enquire' },
      { label: 'Instagram', to: 'https://instagram.com' },
      { label: 'hello@RECLIPSEandlore.co', to: 'mailto:hello@RECLIPSEandlore.co' },
    ],
  },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <footer ref={ref} className="border-t border-line bg-bg px-6 pb-8 pt-24 md:px-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-[1600px]"
      >
        <motion.p
          variants={fadeUp}
          className="heading-hero font-display text-[13vw] leading-[0.9] md:text-[8vw]"
        >
          Let&rsquo;s tell your story.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-line pt-10 md:grid-cols-4">
          <motion.div variants={fadeUp}>
            <p className="font-display text-lg">RECLIPSE &amp; LORE</p>
            <p className="mt-2 text-sm text-ash">Isle of Skye, Scotland</p>
          </motion.div>

          {COLUMNS.map((col) => (
            <motion.div key={col.heading} variants={fadeUp}>
              <p className="eyebrow mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-ash transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col justify-between gap-2 text-xs text-ash md:flex-row"
        >
          <span>&copy; {new Date().getFullYear()} RECLIPSE &amp; Lore. All rights reserved.</span>
          <span>Cinematic elopement &amp; wedding photography</span>
        </motion.div>
      </motion.div>
    </footer>
  )
}
