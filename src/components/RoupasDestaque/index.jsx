import React, { useState, useEffect } from 'react';

const slides = [
  { url: "https://readymadeui.com/images/product1.webp"},
  { url: "https://readymadeui.com/images/product2.webp"},
  { url: "https://readymadeui.com/images/product3.webp"},
  { url: "https://readymadeui.com/images/product4.webp"},
  { url: "https://readymadeui.com/images/product5.webp"},
  { url: "https://readymadeui.com/images/product9.webp"}
];
function RoupasDestaque() {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(slides.slice(0, 1));

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setVisibleSlides(slides.slice(currentIndex, currentIndex + 3));
  }, [currentIndex]);

  return (
    <>
    <div class="font-[sans-serif]">
      <div class="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-12">SUCESSOS DE VENDA</h2>
        



        <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleSlides.map((slide, index) => (
          <div key={index} className={`bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all ${index === 1 ? 'border-2 border-blue-500' : ''}`}>
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src={slide.url} alt={`Product ${currentIndex + index + 1}`} className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Product {currentIndex + index + 1}</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <p className="text-lg text-gray-700">$10</p>
                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Próximo</button>
      </div>
    </div>






      
          
         
      </div>
    </div>
      
    </>
  );
}

export default RoupasDestaque;
