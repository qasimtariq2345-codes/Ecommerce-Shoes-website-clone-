import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
   
    <div>

<motion.section
  className="mx-auto max-w-4xl px-6 py-16 text-center"
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.6, ease: 'easeOut' }}
  variants={variants}
>
  <motion.h1
    className="text-4xl font-semibold text-gray-900"
    variants={variants}
  >
    About page
  </motion.h1>

  <motion.p className="mt-6 text-gray-600" variants={variants}>
    We obsess over building premium footwear that pairs modern aesthetics with all-day comfort.
    Every release goes through dozens of micro-adjustments to get the balance of style, durability,
    and sustainable materials just right.
  </motion.p>

  <motion.div
    className="mt-10 grid gap-6 text-left sm:grid-cols-2"
    variants={variants}
  >
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-emerald-500">Craft</p>
      <p className="mt-2 text-gray-700">
        Each pair is assembled by artisans with decades of experience so every seam and stitch
        feels intentional.
      </p>
    </div>
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-emerald-500">Community</p>
      <p className="mt-2 text-gray-700">
        We partner with local runners and shop owners to co-create collections that match how you
        actually move.
      </p>
    </div>
  </motion.div>
</motion.section>

    </div>
  )
}

export default About;