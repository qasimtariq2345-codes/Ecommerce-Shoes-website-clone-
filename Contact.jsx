import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
   
    <div>

    
  <motion.section
    className="mx-auto max-w-5xl px-6 py-16"
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 }}
  >
    <motion.div variants={variants} className="text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Contact</p>
      <h1 className="mt-2 text-4xl font-semibold text-gray-900">Say hello to the team</h1>
      <p className="mt-4 text-gray-600">
        Reach out about wholesale inquiries, product questions, or partnerships. We read every
        message and typically respond within one business day.
      </p>
    </motion.div>

    <motion.div
      variants={variants}
      className="mt-10 grid gap-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:grid-cols-2"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Visit</p>
        <p className="mt-3 text-gray-900">123 Market Street, Suite 400</p>
        <p className="text-gray-600">San Francisco, CA 94103</p>
        <p className="mt-5 text-sm text-gray-500">Phone</p>
        <a href="tel:+14151234567" className="text-lg font-semibold text-gray-900">
          (415) 123-4567
        </a>
      </div>

      <form className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Name
          <input
            type="text"
            className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-black focus:ring-2 focus:ring-black/30"
            placeholder="Taylor Carter"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Email
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-black focus:ring-2 focus:ring-black/30"
            placeholder="you@example.com"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Message
          <textarea
            rows="4"
            className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-black focus:ring-2 focus:ring-black/30"
            placeholder="Tell us how we can help..."
          ></textarea>
        </label>
        <motion.button
          type="submit"
          className="w-full rounded-xl bg-black px-5 py-3 text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send message
        </motion.button>
      </form>
    </motion.div>
  </motion.section>
    </div>
  )
}

export default Contact;