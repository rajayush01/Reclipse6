import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import logo from '@/assests/logo5.png'

type NavLink = {
  label: string
  to: string
  hasDropdown?: boolean
}

const LINKS: NavLink[] = [
  { label: 'Photography', to: '/stories' },
  { label: 'Films', to: '/films' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/enquire' },

  // If you need dropdowns later:
  // { label: 'Elopement Guides', to: '/elopement-guides', hasDropdown: true },
  // { label: 'Education', to: '/education', hasDropdown: true },
]

const LEFT_LINKS = LINKS.slice(0, 2)
const RIGHT_LINKS = LINKS.slice(2)

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const renderLink = (link: NavLink) => (
    <li key={link.to} className="relative">
      <Link
        to={link.to}
        className="eyebrow flex items-center gap-1 text-[11px] font-medium tracking-[0.18em] text-ink transition-colors hover:text-ink/50"
      >
        {link.label.toUpperCase()}

        {link.hasDropdown && (
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            className="mt-px opacity-60"
          >
            <path
              d="M1 2.5L4 5.5L7 2.5"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        )}
      </Link>
    </li>
  )

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink bg-paper">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">

          {/* Left links */}
          <ul className="hidden flex-1 items-center justify-start gap-9 lg:flex">
            {LEFT_LINKS.map(renderLink)}
          </ul>

          {/* Centered logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center justify-center lg:mx-8"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Right links */}
          <ul className="hidden flex-1 items-center justify-end gap-9 lg:flex">
            {RIGHT_LINKS.map(renderLink)}
          </ul>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="absolute right-6 flex h-8 w-8 flex-col items-end justify-center gap-[6px] lg:hidden"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 4, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              className="h-px bg-ink"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -4, width: 24 }
                  : { rotate: 0, y: 0, width: 16 }
              }
              className="h-px bg-ink"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-8 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                    delay: 0.15 + i * 0.06,
                  }}
                >
                  <Link
                    to={link.to}
                    className="font-display flex items-center gap-2 text-4xl text-ink"
                  >
                    {link.label}

                    {link.hasDropdown && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 8 8"
                        className="opacity-50"
                      >
                        <path
                          d="M1 2.5L4 5.5L7 2.5"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                        />
                      </svg>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}