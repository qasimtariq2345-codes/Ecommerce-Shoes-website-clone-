import React from 'react'

const Carousel = () => {
  return (
    <div>

    {/* carousel */}
    
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/Images/img1.jpeg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Flat 30% OFF</h1>
          <p className="mb-5">
          Up to 30% OFF on our all products. Buy now Style Now! Score big 
          on thousands of New Styles.
          </p>
          <button className="rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-yellow-500">
            Shop Now
          </button>
        </div>
      </div>
    </div>
    
    {/* carousel */}
    
    
    
        </div>
  )
}

export default Carousel; 