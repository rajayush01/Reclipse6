import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface Props {
  eyebrow?: string
  title: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({ eyebrow, title, align = 'left', className = '' }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer()}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow mb-4">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="heading-hero font-display text-[38px] sm:text-[52px] md:text-[64px]"
      >
        {title}
      </motion.h2>
    </motion.div>
  )
}
