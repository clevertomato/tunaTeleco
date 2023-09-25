import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import logoupv from '../../../img/UPV.gif';


export default function Header({ showNav }) {
  const [openedMenu, setOpenedMenu] = useState(true);

  const openMenu = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <div id='navBar' className={`${!showNav ? 'opacity-0' : 'opacity-100 '}  z-20  top-0 right-0 w-full transition-all ease-in-out delay-300 duration-500 absolute `}>
      <div className='hidden md:flex items-center justify-between w-full'>
        <div>
        <div className='text-md md:text-3xl lg:text-4xl 3xl:text-4xl text-black px-4 py-2 float-right transform transition-all duration-400 hover:cursor-pointer font-normal  rounded-sm ease-in-out border-3 border-white hover:border-my-orange hover:shadow-gray-400 hover:shadow-sm ml-4'>@TUNATELECO</div>
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
      <div className='flex items-center justify-between md:hidden w-full'>
        <div>
          <div className='font-normal text-xl md:text-3xl lg:text-4xl shadowtext text-white px-6 py-4  float-right transform transition duration-500 hover:cursor-pointer ease-in-out'>@tunateleco</div>
        </div>  
        <button onClick={() => console.log()} class="space-y-2 pr-6 hover:cursor-pointer">
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white rounded-xl"></div>
        </button>
      </div>
    </div>
  );
}
