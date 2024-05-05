import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import instagram from '../../../img/instagram.svg'
import instagramMobile from '../../../img/instagramMobile.svg'
import spotify from '../../../img/spotify.svg'
import spotifyMobile from '../../../img/spotifyMobile.svg'
import whatsapp from '../../../img/whatsapp.svg'

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
  const goWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=34640630916', "_blank", "noreferrer");
  };
  const goUpv = () => {
    window.open('https://www.upv.es/es', "_blank", "noreferrer");
  };

  return (
    <div id='navBar' className={`${!showNav ? 'opacity-0' : 'opacity-100 '} ${openedMenu ? '' : 'bg-black/40'} z-20  top-0 right-0 w-full transition-all ease-in-out  duration-500 absolute`}>
      <div className='hidden md:flex items-center justify-between w-full'>

      <div className='py-4 pl-6 flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 md:max-md:flex-col text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-black/70 font-normal '>
        
        <p className='my-auto text-lg md:text-3xl lg:text-4xl 3xl:text-5xl  overflow-hidden  hover:border-my-orange/60 hover:scale-105 transition-all duration-300 hover:cursor-default text-white px-1 hover:shadow-black drop-shadow-lg pb-1' >TUNATELECO</p>
        </div>
        <ul className='py-4 p-6 flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-6 md:max-md:flex-col text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-black/70 font-normal '>
          <li onClick={goInstagram} className='my-auto hover:drop-shadow-[0_7px_7px_rgba(255,255,255,0.3)] hover:cursor-pointer hover:scale-105 transition-all duration-150'><Image
                  src={instagram}
                  width={50}
                  height={50}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem'}}
            /></li>
          <li className='my-auto hover:drop-shadow-[0_7px_7px_rgba(255,255,255,0.3)] hover:cursor-pointer hover:scale-105 transition-all duration-150'><Image
              src={spotify}
              width={72}
              height={80}
              alt="logoupv"
              onClick={goSpotify}
              style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem'}} // optional
        /></li>
        <li className='my-auto hover:drop-shadow-[0_7px_7px_rgba(255,255,255,0.3)] hover:cursor-pointer hover:scale-105 transition-all duration-150'><Image
              src={whatsapp}
              width={72}
              height={80}
              alt="logoupv"
              onClick={goWhatsapp}
              style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem'}} // optional
        /></li>
          <li className='my-auto text-md md:text-xl lg:text-2xl 3xl:text-4xl  overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-150 text-white px-1 2xl:pb-1 shadow-black drop-shadow-lg my' onClick={scrollToForm} >CONTACTO</li>
        </ul>
      </div>
      <div className={`${openedMenu ? 'mb-12' : 'mb-0'} flex items-center justify-between md:hidden w-full h-24 transition-all duration-500`}>
        <div className=' h-full flex flex-row text-2xl text-black px-1 pb-1 float-right transform hover:cursor-pointer font-normal ease-in-out ml-4' >
          <p className='my-auto text-white'>TUNATELECO</p>
        </div>
        <button onClick={openMenu} className="flex justify-center h-full">
          <div className='my-auto'>
            <div className={`${openedMenu ? 'space-y-2 ' : ''} w-1/2 px-6 hover:cursor-pointer transition-all duration-500 h-full`}>
            <div className={`${openedMenu ? '' : 'origin-center rotate-45 absolute mt-05'} w-8 h-0.5 bg-white transition-all duration-500`}></div>
            <div className={`${openedMenu ? '' : 'opacity-0'}  w-8 h-0.5 bg-white diagonal-fractions transition-all duration-500 `}></div>
            <div className={`${openedMenu ? '' : 'origin-center -rotate-45 absolute'} w-8 h-0.5 bg-white rounded-xl transition-all duration-500 mb-4`}></div>
          </div>
          </div>
        </button>
      </div>
      <div className={`${openedMenu ? '-mt-36 pb-20' : 'mb-12'} h-24 md:hidden w-full  flex flex-col  px-4 pr-4 font-normal transition-all ease-in-out duration-500 gap-8`}>
      <ul className={`${openedMenu ? '-mt-40 pt-8' : ''} md:hidden flex flex-row justify-center transition-all ease-in-out duration-500`}>
        <li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} w-1/3 flex place-content-center my-auto transition-all ease-in-out duration-500`} onClick={scrollToForm}>
            <p className='text-xl text-center text-white' >CONTACTO</p>
          </li>
          
        </ul>
        <ul className={`${openedMenu ? '-mt-32 pb-8' : ''} md:hidden flex flex-row justify-between transition-all ease-in-out duration-500`}>
          <li className="w-1/3 flex place-content-center px-4">
            <Image
              src={instagramMobile}
              onClick={goInstagram}
              width={49}
              height={49}
              alt="logoupv"
              style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem'}}
            />
          </li>
          <li className="w-1/3 flex place-content-center font-normal " onClick={goUpv}>
            <Image
              src={spotifyMobile}
              onClick={goSpotify}
              width={45}
              height={45}
              alt="logo de la upv"
            />
          </li>
          <li className="w-1/3 flex place-content-center font-normal " onClick={goUpv}>
            <Image
              src={whatsapp}
              onClick={goWhatsapp}
              width={45}
              height={45}
              alt="logo de la upv"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
