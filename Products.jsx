import React from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: 'Nike 123',
    description: 'Nike Air Max plus',
    price: 169,
    image: '/Images/img1.jpeg',
  },
  {
    id: 2,
    name: 'Nike 234',
    description: 'Nike Air Max Plus',
    price: 129,
    image: '/Images/img2.avif',
  },
  {
    id: 3,
    name: 'Nike 244',
    description: 'Nike Air Max Plus',
    price: 159,
    image: '/Images/img3.avif',
  },
  {
    id: 4,
    name: 'Nike 100',
    description: 'Nike Air Max Plus',
    price: 219,
    image: '/Images/img4.avif',
  },
  {
    id: 5,
    name: 'Nike 999',
    description: 'Nike Air Max Plus',
    price: 79,
    image: '/Images/img5.avif',
  },
  {
    id: 6,
    name: 'Nike 887',
    description: 'Nike Air Max Plus',
    price: 49,
    image: '/Images/img6.avif',
  },
  {
    id: 7,
    name: 'Nike 132',
    description: 'Nike Air Max Plus',
    price: 349,
    image: '/Images/img7.avif',
  },
  {
    id: 8,
    name: 'Nike 231',
    description: 'Nike Air Max Plus.',
    price: 89,
    image: '/Images/img8.avif',
  },
  {
    id: 9,
    name: 'Nike 444',
    description: 'Nike Air Max Plus',
    price: 59,
    image: '/Images/img9.avif',
  },
  {
    id: 10,
    name: 'Nike 107',
    description: 'Nike Air Max Plus',
    price: 299,
    image: '/Images/img10.avif',
  },
  {
    id: 11,
    name: 'Nike 343',
    description: 'Nike Air Max Plus',
    price: 74,
    image: '/Images/img11.avif',
  },
  {
    id: 12,
    name: 'Nike 665',
    description: 'Nike Air Max Plus',
    price: 99,
    image: '/Images/img12.avif',
  },
]

const Products = () => {
  const { addItem } = useCart()

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const handleBuyNow = (product) => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
      },
      1,
    )
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const cardsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.section
      className="px-6 py-12 lg:px-16"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeOut', staggerChildren: 0.25 }}
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={sectionVariants}
      >
        <motion.header className="mb-10 text-center" variants={sectionVariants}>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">
            Available Stock
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Check Our New Stock 
          </h1>
        </motion.header>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              variants={cardsVariants}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div>
                <div className="mb-4 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transition duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-slate-500">{product.description}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">{formatter.format(product.price)}</span>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-500"
                >
                  Shop Now
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Products