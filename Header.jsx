import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { cart } = useCart()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
   
    <div>
      
      {/* header starts */}

      <div className="navbar bg-black text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/" className="btn btn-ghost text-xl text-white"> MR SHOES</Link>
  </div>
  <div className="navbar-end">
    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-yellow-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <Link to="/shop" className="relative btn btn-ghost btn-circle text-white" aria-label="Open shop point of sale">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
      {cartCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white" aria-live="polite">
          {cartCount}
        </span>
      )}
    </Link>
    <Link to="/login" className="btn btn-ghost btn-circle text-white" aria-label="Go to login">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg>
    </Link>
  

  </div>
</div>

    </div>
  )
}

export default Header;