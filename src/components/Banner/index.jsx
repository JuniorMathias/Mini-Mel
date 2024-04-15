import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import banner1 from '../../assets/banners/b1.jpg'
import banner2 from '../../assets/banners/b4.jpg'
import banner3 from '../../assets/banners/b3.jpg'
import banner4 from '../../assets/banners/b5.jpg'

function Banner() {
  const slides = [
    { url: banner1,},
    { url: banner2,},
    { url: banner3,},
    { url: banner4,},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      
      <div className='max-w-[1400px] h-[480px] w-full m-auto py-5 px-4 relative group overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[580px] rounded bg-contain bg-no-repeat duration-500 transform transition-transform'
      ></div>

        <div className='group-hover:block absolute left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer top-1/2 sm:top-1/2 transform -translate-y-1/2'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default Banner;
