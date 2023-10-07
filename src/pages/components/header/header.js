import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import instagram from '../../../img/instagram.svg'
import logoupv from '../../../img/UPV.gif';
import spotify from '../../../img/spotify.svg'

export default function Header({ showNav, scrollToForm }) {
  const [openedMenu, setOpenedMenu] = useState(true);


  const openMenu = () => {
    setOpenedMenu(!openedMenu);
  };
  const goInstagram = () => {
    window.open('https://www.instagram.com/tunateleco/', "_blank", "noreferrer");
  };
  const goSpotify = () => {
    window.open('https://open.spotify.com/intl-es/artist/00ZgjNqUvATaSpK6o1BxtR?si=OvBfc_j_QUqGk14TEVwgfg', "_blank", "noreferrer");
  };
  const goUpv = () => {
    window.open('https://www.upv.es/es', "_blank", "noreferrer");
  };

  return (
    <div id='navBar' className={`${!showNav ? 'opacity-0' : 'opacity-100 '}  z-20  top-0 right-0 w-full transition-all ease-in-out delay-300 duration-500 absolute `}>
      <div className='hidden md:flex items-center justify-between w-full'>

          <div className='flex flex-row text-md md:text-3xl lg:text-4xl 3xl:text-4xl text-black px-4 py-2 float-right transform hover:cursor-pointer font-normal ease-in-out border-b-3 border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 ml-4' onClick={goInstagram}>
            <Image
                  src={instagram}
                  width={35}
                  height={35}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem', border: ''}}
            />
            <p className='my-auto pl-2 font-light'>TUNATELECO</p>
          </div>
        <ul className='py-4 pl-6 flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 md:max-md:flex-col text-sm lg:text-xl text-black/70 font-normal '>
        <li className='filter hover:drop-shadow-lg shadow-white hover:cursor-pointer hover:scale-105 transition-all duration-300'><Image
              src={spotify}
              width={80}
              height={80}
              alt="logoupv"
              onClick={goSpotify}
              style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem'}} // optional
        /></li>
          <li className='mt-4 text-md md:text-xl lg:text-2xl 3xl:text-4xl  overflow-hidden border-b-3 rounded-sm border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 hover:cursor-pointer' onClick={scrollToForm} >CONTACTO</li>
          <li className='mt-4 text-md md:text-xl lg:text-2xl 3xl:text-4xl overflow-hidden border-b-3 rounded-sm border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 ease-in-out hover:cursor-pointer'>CANCIONERO</li>
          <li className='mt-4 text-md md:text-xl lg:text-2xl 3xl:text-4xl overflow-hidden border-b-3 rounded-sm border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400  hover:cursor-pointer'>HISTORIA</li>
          <li className='hover:cursor-pointer mr-3 hover:scale-105 transition-all duration-300 hover:drop-shadow-lg'><Image
              src={logoupv}
              width={80}
              height={80}
              alt="logoupv"
              onClick={goUpv}
              style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem'}} // optional
        /></li>
        </ul>
        
      </div>
      <div className='flex items-center justify-between md:hidden w-full '>
        <div>
        <div className='py-4 flex flex-row text-2xl text-black px-4 pb-2 float-right transform hover:cursor-pointer font-normal ease-in-out border-b-3 border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 ml-4' onClick={goInstagram}>
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
        <button onClick={openMenu} class="w-1/3 grid place-content-end h-full">
          <div class={`${openedMenu ? 'space-y-2 ' : ''} w-1/2 px-6 hover:cursor-pointer transition-all duration-300 h-full`}>
          <div class={`${openedMenu ? '' : 'origin-center rotate-45 absolute mt-05'} -ml-8 w-8 h-0.5 bg-white transition-all duration-300 mt-4`}></div>
          <div class={`${openedMenu ? '' : 'opacity-0'}  -ml-8 w-8 h-0.5 bg-white diagonal-fractions transition-all duration-300 `}></div>
          <div class={`${openedMenu ? '' : 'origin-center -rotate-45 absolute'} -ml-8 w-8 h-0.5 bg-white rounded-xl transition-all duration-300 mb-4`}></div>
          </div>
        </button>

      </div>
      <div className={`${openedMenu ? '-mt-16' : 'mt-8'} md:hidden w-full  flex flex-col  px-4 pr-6 font-normal transition-all ease-in-out duration-300`}>
        <ul className='w-full h-full text-xl flex flex-row justify-between'>
        <li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-300  grid place-content-end`}>
            <p className='border-b-2 border-white text-center ' onClick={scrollToForm}>CONTACTO</p>
          </li>
          <li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-300  grid place-content-end`}>
            <p className='border-b-2 border-white text-center  '>CANCIONERO</p>
          </li>
          <li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-300  grid place-content-end`}>
            <p className='border-b-2 border-white  text-center '>HISTORIA</p>
          </li>
          
        </ul>
        <button onClick={goSpotify} className={`${openedMenu ? '-mt-32' : 'mt-4'} md:hidden w-full  flex justify-center  px-4  font-normal transition-all ease-in-out duration-300`}><Image
              src={spotify}
              width={45}
              height={45}
              alt="logoupv"

        /></button>
      </div>
    </div>
  );
}
