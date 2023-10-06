// components/Carousel.js
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import leftarrow from '../../../img/left-arrow.svg'

const images = [
  {
    src: '/telecofondo.jpg',
    alt: 'Image 1',
    icon: '/avion-removebg-preview.png',
    text: 'Podrás viajar por todo el mundo'
  },
  {
    src: '/telecofondo.jpg',
    alt: 'Image 2',
    icon: '/guitarra-clasica.png',
    text: 'Aprende a tocar o perfecciona un instrumento'
  },
  {
    src: '/telecofondo.jpg',
    alt: 'Image 3',
    icon: '/dinero-removebg-preview.png',
    text: 'Sin gastarte nada'
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
            } transition-opacity duration-500 ease-in-out `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
            <div className='absolute top-0 left-0 h-full w-full text-white flex items-center justify-center flex-col gap-4'>
          <div className=' w-4/6 h-1/2 flex justify-end items-end pb-4'>
            <div className='h-auto w-full flex justify-center'>
              <p className='w-full text-center text-xl font-thin border-2  md:text-3xl px-2 pb-2 pt-1 bg-black/80'>{image.text}</p>
            </div>
          </div>
          <div className=' h-1/2 pt-4 shakeanimation'>
          <Image
              src={image.icon}
              alt={image.alt}

              objectFit="cover"
              width={90}
              height={90}
              style={{ objectFit:'cover',filter: 'brightness(0) invert(1)', borderBottom:'2px solid white'}}
            />
          </div>
      </div>

          </div>

        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white md:px-2 py-1 h-full w-1/4 flex justify-start items-center"
      >
            <Image
                src={leftarrow}
                style={{ width: '40px', height:'50px', objectFit:'cover'}}
                alt="coverbg"
                />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-2/4  text-white md:px-2 py-1 h-full w-1/4 flex justify-end items-center"
      >
        <Image
                src={leftarrow}
                style={{ width: '40px', height:'50px', objectFit:'cover', transform: 'scaleX(-1)'}}
                alt="coverbg"
                />
      </button>
    </div>
  );
};

export default Carousel;
