import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Contact from '../Pages/Contact'
import Login from '../Authentication/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes

