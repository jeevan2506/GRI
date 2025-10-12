import React from 'react'
import { motion } from 'framer-motion'

export default function PageTransition({ children }){
  return (
    <motion.main
      className="container section"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}
