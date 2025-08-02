'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, x: -50 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
}

export function MotionMain({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ ease: 'linear', duration: 0.3 }}
    >
      {children}
    </motion.main>
  )
}