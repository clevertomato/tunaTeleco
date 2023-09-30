import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import instagram from '../../../img/instagram.svg'
import logoupv from '../../../img/UPV.gif';

export default function Header({ showNav }) {
  const [openedMenu, setOpenedMenu] = useState(true);

  const openMenu = () => {
    setOpenedMenu(!openedMenu);
  };
  const goInstagram = () => {
    window.location.replace('https://www.instagram.com/tunateleco/');
  };

  return (
    <div id='navBar' className={`${!showNav ? 'opacity-0' : 'opacity-100 '}  z-20  top-0 right-0 w-full transition-all ease-in-out delay-300 duration-500 absolute `}>
      <div className='hidden md:flex items-center justify-between w-full'>
        <div>
        <div className='flex flex-row text-md md:text-3xl lg:text-4xl 3xl:text-4xl text-black px-4 py-2 float-right transform hover:cursor-pointer font-normal ease-in-out border-b-3 border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 ml-4' onClick={goInstagram}>
          <Image
                src={instagram}
                width={35}
                height={35}
                alt="logoupv"
                style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem'}}
          />
          <p className='my-auto pl-2'>TUNATELECO</p></div>
        </div>  
        <ul className='py-4 px-6 flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 md:max-md:flex-col text-sm lg:text-xl text-black/70 font-normal '>
          <li className='py-1 text-md md:text-xl lg:text-2xl 3xl:text-4xl  overflow-hidden border-b-3 rounded-sm border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 hover:cursor-pointer'>CONTACTO</li>
          <li className='py-1 text-md md:text-xl lg:text-2xl 3xl:text-4xl overflow-hidden border-b-3 rounded-sm border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 ease-in-out hover:cursor-pointer'>CANCIONERO</li>
          <li className='py-1 text-md md:text-xl lg:text-2xl 3xl:text-4xl overflow-hidden border-b-3 rounded-sm border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400  hover:cursor-pointer'>HISTORIA</li>
          <li><Image
              src={logoupv}
              width={80}
              height={80}
              alt="logoupv"
              style={{  paddingRight: '1.5rem'}} // optional
        /></li>
        </ul>
        
      </div>
      <div className='flex items-center justify-between md:hidden w-full pt-4'>
        <div>
        <div className='flex flex-row text-2xl text-black px-4 pb-2 float-right transform hover:cursor-pointer font-normal ease-in-out border-b-3 border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 ml-4' onClick={goInstagram}>
          <Image
                src={instagram}
                width={26}
                height={26}
                alt="logoupv"
                style={{ marginTop: '2px', paddingRight: '0.2rem'}}
          />
          <div className='py-auto'>
            <p className='my-auto pl-2 '>TUNATELECO</p>
          </div>
          </div>
          </div>  
        <button onClick={openMenu} class="space-y-2 pr-6 hover:cursor-pointer">
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white rounded-xl"></div>
        </button>

      </div>
      <div className="md:hidden w-full  flex flex-row mt-4 px-4 pr-6">
        <ul className='w-full h-full text-lg flex flex-row justify-between'>
          <li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all delay-200 duration-200 grid place-content-end`} >
            <p className='border-b-2 border-white  pb-1 text-center'>CONTACTO</p>
          </li>
          <li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all delay-200 duration-200  grid place-content-end`}>
            <p className='border-b-2 border-white  pb-1 text-center'>CANCIONERO</p>
          </li>
          <li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all delay-200 duration-200 grid place-content-end`} >
            <p className='border-b-2 border-white  pb-1 text-center px-auto'>HISTORIA</p>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
