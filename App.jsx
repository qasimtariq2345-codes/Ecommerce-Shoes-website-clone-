import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Carousel from './Layout/Carousel';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Layout/Footer';
import Login from './Authentication/Login';
import Shop from './Authentication/Shop';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<><Carousel/><Home /></>} />
          <Route path="/products" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        < Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;