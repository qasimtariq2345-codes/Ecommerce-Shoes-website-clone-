import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const inventory = [
  { id: 'shoe-1', name: 'Runner Pro', price: 120 },
  { id: 'shoe-2', name: 'Street Classic', price: 90 },
  { id: 'shoe-3', name: 'Trail Max', price: 150 },
  { id: 'shoe-4', name: 'City Breeze', price: 110 },
];

const Shop = () => {
  const [selectedProductId, setSelectedProductId] = useState(inventory[0].id);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [amountReceived, setAmountReceived] = useState('');
  const { cart, addItem, removeItem, clearCart, cartSummary } = useCart();

  const handleAddToCart = () => {
    const product = inventory.find((item) => item.id === selectedProductId);
    if (!product || quantity < 1) return;

    addItem(product, quantity);
    setQuantity(1);
  };

  const { subTotal, tax, grandTotal } = cartSummary;
  const change =
    amountReceived && grandTotal
      ? Math.max(Number(amountReceived) - grandTotal, 0)
      : 0;

  return (
    <motion.div
      className="mx-auto max-w-6xl px-6 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Point of Sale
        </p>
        <h1 className="text-3xl font-semibold text-gray-900">
          In-store checkout
        </h1>
        <p className="mt-2 text-gray-600">
          Quickly add products to a customer order, accept payment, and print a
          receipt.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <label className="flex-1 text-sm font-medium text-gray-700">
              Product
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-gray-800 focus:border-black focus:ring-2 focus:ring-black/30"
              >
                {inventory.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} — ${item.price}
                  </option>
                ))}
              </select>
            </label>
            <label className="w-full text-sm font-medium text-gray-700 sm:w-32">
              Quantity
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 focus:border-black focus:ring-2 focus:ring-black/30"
              />
            </label>
            <button
              onClick={handleAddToCart}
              className="rounded-xl bg-black px-6 py-3 text-white transition-colors hover:bg-yellow-500"
            >
              Add item
            </button>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              <span>Item</span>
              <span className="w-36 text-right">Total</span>
            </div>

            {cart.length === 0 && (
              <div className="py-10 text-center text-gray-500">
                Nothing in the cart yet. Add an item to start the order.
              </div>
            )}

            <ul className="divide-y divide-gray-100">
              {cart.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex items-center justify-between py-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="w-24 text-right font-semibold text-gray-900">
                      ${item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-500"
                    >
                      Remove
                    </button>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Order summary
            </h2>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (7%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Payment details
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex gap-2">
                {['cash', 'card', 'upi'].map((method) => (
                  <button
                    key={method}
                    className={`flex-1 rounded-xl bg-black px-3 py-2 text-sm capitalize text-white transition-colors hover:bg-yellow-500 ${
                      paymentMethod === method ? 'ring-2 ring-yellow-400' : 'ring-1 ring-transparent'
                    }`}
                    onClick={() => setPaymentMethod(method)}
                  >
                    {method}
                  </button>
                ))}
              </div>

              <label className="text-sm font-medium text-gray-700">
                Amount received
                <input
                  type="number"
                  min="0"
                  value={amountReceived}
                  onChange={(e) => setAmountReceived(e.target.value)}
                  placeholder="0.00"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 focus:border-black focus:ring-2 focus:ring-black/30"
                />
              </label>

              <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Change due</span>
                  <span className="text-base font-semibold text-gray-900">
                    ${change.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={clearCart}
            disabled={cart.length === 0}
            className="w-full rounded-xl bg-black px-4 py-3 text-white transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-black/40 disabled:text-white/50 disabled:hover:bg-black/40"
          >
            Complete sale
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shop;