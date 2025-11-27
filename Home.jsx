import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
   
    <div>
     
     <motion.section
      className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2, duration: 0.6, ease: 'easeOut' }}
    >
  <motion.div
    className="p-8 md:p-12 lg:px-16 lg:py-24"
    variants={heroVariants}
  >
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
     Most Premium Quality Shoes, that made you comfortable!
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
        sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
        volutpat quisque ut interdum tincidunt duis.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded-sm bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"

        >
          Get Started Today
        </a>
      </div>
    </div>
    
  </motion.div>

  <motion.img
    alt=""
    src="/Images/img6.avif"
    className="h-56 w-full object-cover sm:h-full"
    variants={imageVariants}
  />
</motion.section>


    </div>
  )
}


export default Home

