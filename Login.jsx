import React from 'react'
import { motion } from 'framer-motion'

const Login = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-gray-100 bg-white/70 p-10 shadow-sm lg:grid-cols-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="flex flex-col justify-between space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Welcome back
            </p>
            <h1 className="mt-2 text-4xl font-semibold text-gray-900">
              Sign in to continue
            </h1>
            <p className="mt-3 text-gray-600">
              Access your dashboard, manage in-store orders, and stay in sync
              with the rest of your team. Use your work email and password to
              sign in securely.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-900/5 p-6 text-sm text-gray-700">
            <p className="font-semibold text-gray-900">Need an account?</p>
            <p className="mt-2 text-gray-600">
              Contact your store administrator to receive an invitation to the
              platform.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <form className="space-y-5">
            <label className="block text-sm font-medium text-gray-700">
              Email address
              <input
                type="email"
                placeholder="you@store.com"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/30"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Password
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-2 focus:ring-black/30"
              />
            </label>

            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black/40" />
                Remember me
              </label>
              <button
                type="button"
                className="rounded-full bg-black px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-500"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-black px-5 py-3 text-white transition-colors hover:bg-yellow-500"
            >
              Sign in
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Login;