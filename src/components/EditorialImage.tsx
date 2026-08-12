import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { imageReveal } from '@/lib/motion'
import type { StoryImage } from '@/data/stories'

interface Props {
  image: StoryImage
  className?: string
  eager?: boolean
  cursorLabel?: string
}

export default function EditorialImage({ image, className = '', eager = false, cursorLabel }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden bg-mist ${className}`}
      variants={imageReveal}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      data-cursor={cursorLabel}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        className="h-full w-full object-cover"
      />
    </motion.div>
  )
}
