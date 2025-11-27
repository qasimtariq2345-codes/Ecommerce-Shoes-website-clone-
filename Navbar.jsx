import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* navbar starts */}
      <div className="navbar bg-black text-white shadow-sm px-4">
        <div className="navbar-start">
          <nav className="flex items-center gap-6 text-sm uppercase tracking-wide">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/products" className="hover:text-gray-300 transition-colors">Products</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
          </nav>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl text-white">MR SHOES</Link>
        </div>
        <div className="navbar-end">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
            </svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> 
            </svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> 
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

