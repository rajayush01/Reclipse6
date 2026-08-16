import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { Camera, Play, Share2 } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Stories', to: '/photography' },
  { label: 'Films', to: '/films' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/enquire' },
]

const SOCIALS = [
  { icon: Camera, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Play, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Share2, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <footer ref={ref} className="bg-bg px-6 pb-8 pt-10 md:px-10 max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-[1600px]"
      >
        {/* top rule */}
        <motion.div variants={fadeUp} className="border-t border-line" />

        {/* brand + nav row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-10 pt-10 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <p className="font-display text-[13vw] leading-none tracking-wide md:text-[3vw]">
              RECLIPSE
            </p>

            <div className="mt-6 flex items-center gap-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-ink transition-opacity hover:opacity-60"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:pt-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="eyebrow text-ink transition-colors hover:text-ash"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-16 text-center font-display text-lg italic text-ash md:text-xl"
        >
          Cinematic elopement &amp; wedding photography, capturing real stories
          across Scotland
        </motion.p>

        {/* bottom rule */}
        <motion.div variants={fadeUp} className="mt-14 border-t border-line" />

        {/* copyright */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-ash md:flex-row"
        >
          <span>
            &copy; {new Date().getFullYear()} RECLIPSE | Isle of Skye, Scotland
          </span>
          <span className="flex items-center gap-1">
            Site by{' '}
            <a
              href="#"
              className="underline decoration-ash/40 underline-offset-2 hover:text-ink"
            >
              Studio
            </a>
            {' '}| Sitemap &amp; Privacy
          </span>
        </motion.div>
      </motion.div>
    </footer>
  )
}