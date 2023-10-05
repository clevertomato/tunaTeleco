// components/Carousel.js
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import leftarrow from '../../../img/left-arrow.svg'

const images = [
  {
    src: '/telecofondo.jpg', // Path to your images
    alt: 'Image 1',
    text: 'Podrás viajar por todo el mundo'
  },
  {
    src: '/telecofondo2v.jpg',
    alt: 'Image 2',
    text: 'Aprende a tocar o perfecciona un instrumento'
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to automatically go to the next slide every 3 seconds
  const autoNextSlide = () => {
    nextSlide();
  };

  // Set up a timer to trigger the autoNextSlide function
  useEffect(() => {
    const timer = setInterval(autoNextSlide, 3750);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full border-2 md:border-l-0 md:border-y-0 border-white h-full md:h-apuntate">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500 ease-in-out`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
            <div className='absolute top-0 left-0 h-full w-full text-white flex items-center justify-center'>
          <div className='text-center text-2xl border-2  md:text-3xl px-2 py-1 bg-black/50 w-4/6'>{image.text}</div>
      </div>
          </div>

        ))}
      </div>
      
      {/*<button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-2 py-1"
      >
            <Image
                src={leftarrow}
                style={{ width: '50px', height:'50px', objectFit:'cover'}}
                alt="coverbg"
                />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white px-2 py-1"
      >
        <Image
                src={leftarrow}
                style={{ width: '50px', height:'50px', objectFit:'cover', transform: 'scaleX(-1)'}}
                alt="coverbg"
                />
      </button>*/}
    </div>
  );
};

export default Carousel;
