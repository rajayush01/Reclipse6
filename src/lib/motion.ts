// Single source of truth for the site's animation language.
// Everything reveals with the same easing so the site feels like one hand did it.

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const DURATION = {
  image: 1,
  text: 0.7,
  hover: 0.7,
  page: 0.7,
} as const

export const STAGGER = 0.1

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.text, ease: EASE },
  },
}

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.04, clipPath: 'inset(8% 0 8% 0)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: DURATION.image, ease: EASE },
  },
}

export const staggerContainer = (stagger = STAGGER, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})
