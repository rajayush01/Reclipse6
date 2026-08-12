import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

export default function Preloader() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('RECLIPSE-visited'))

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('RECLIPSE-visited', '1')
    }, 1500)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-bg"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="font-display text-2xl tracking-[0.1em]"
          >
            RECLIPSE &amp; LORE
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
            className="eyebrow mt-3"
            style={{ color: '#A8A29A' }}
          >
            Scotland &amp; Beyond
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
