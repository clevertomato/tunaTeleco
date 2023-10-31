import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
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
    <div id='navBar' className={`${!showNav ? 'opacity-0' : 'opacity-100 '}  z-20  top-0 right-0 w-full transition-all ease-in-out delay-300 duration-500 absolute`}>
      <div className='hidden md:flex items-center justify-between w-full'>

          <div className='flex flex-row text-xl lg:text-2xl xl:text-3xl 3xl:text-3xl text-white  py-1 float-right transform hover:cursor-pointer font-normal ease-in-out border-b-3 border-transparent border-white hover:border-my-orange hover:shadow-sm transition-all duration-400 ml-4 my-auto px-1'>
            <p className='my-auto font-light'>TUNATELECO</p>
          </div>
          <div onClick={goInstagram} className='hover:drop-shadow-lg hover:cursor-pointer hover:scale-105 transition-all duration-150'><Image
                  src={instagram}
                  width={55}
                  height={55}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem', border: '',filter: 'brightness(0) invert(1)'}}
            /></div>
            <div className='filter hover:drop-shadow-lg shadow-white hover:cursor-pointer hover:scale-105 transition-all duration-150'><Image
              src={spotify}
              width={80}
              height={80}
              alt="logoupv"
              onClick={goSpotify}
              style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem'}} // optional
        /></div>
        <ul className='py-4 pl-6 flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 md:max-md:flex-col text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-black/70 font-normal '>
        
          <li className='my-auto text-md md:text-xl lg:text-2xl 3xl:text-4xl  overflow-hidden border-b-3  border-white/90  hover:border-my-orange/60 hover:shadow-sm transition-all duration-300 hover:cursor-pointer text-white px-1 shadow-black drop-shadow-lg my' onClick={scrollToForm} >CONTACTO</li>
          <Link href="/cancionero" className="my-auto text-md md:text-xl lg:text-2xl 3xl:text-4xl  overflow-hidden border-b-3  border-white/90  hover:border-my-orange/60 hover:shadow-sm transition-all duration-300 hover:cursor-pointer text-white px-1 shadow-black drop-shadow-lg"><li > CANCIONERO</li></Link>
          <Link href="/historia" className="my-auto text-md md:text-xl lg:text-2xl 3xl:text-4xl  overflow-hidden border-b-3  border-white/90  hover:border-my-orange/60 hover:shadow-sm transition-all duration-300 hover:cursor-pointer text-white px-1 shadow-black drop-shadow-lg"><li > HISTORIA</li></Link>
          <li className='hover:cursor-pointer mr-3 hover:scale-105 transition-all duration-150 hover:drop-shadow-lg'><Image
              src={logoupv}
              width={80}
              height={80}
              alt="logoupv"
              onClick={goUpv}
              style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem'}} // optional
        /></li>
        </ul>
        
      </div>
      <div className={`${openedMenu ? 'mb-12' : 'mb-4'} flex items-center justify-between md:hidden w-full h-20 transition-all duration-500`}>
        <div className='py-4 flex flex-row text-2xl text-black px-1 pb-1 float-right transform hover:cursor-pointer font-normal ease-in-out border-b-3 border-white hover:border-my-orange-clear hover:shadow-sm transition-all duration-400 ml-4' >
          <Link className='py-auto' href='/'>
            <p className=' text-white'>TUNATELECO</p>
          </Link>
        </div>
        <button onClick={openMenu} class="w-1/3 grid place-content-end h-full">
          <div class={`${openedMenu ? 'space-y-2 ' : ''} w-1/2 px-6 hover:cursor-pointer transition-all duration-500 h-full`}>
          <div class={`${openedMenu ? '' : 'origin-center rotate-45 absolute mt-05'} -ml-8 w-8 h-0.5 bg-white transition-all duration-500 mt-4`}></div>
          <div class={`${openedMenu ? '' : 'opacity-0'}  -ml-8 w-8 h-0.5 bg-white diagonal-fractions transition-all duration-500 `}></div>
          <div class={`${openedMenu ? '' : 'origin-center -rotate-45 absolute'} -ml-8 w-8 h-0.5 bg-white rounded-xl transition-all duration-500 mb-4`}></div>
          </div>
        </button>

      </div>
      <div className={`${openedMenu ? '-mt-36 pb-20' : 'mt-12'} md:hidden w-full  flex flex-col  px-4 pr-4 font-normal transition-all ease-in-out duration-500`}>
        <ul className='w-full h-full text-xl flex flex-row justify-between'>
          <Link href="/cancionero"><li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-500  grid place-content-end`}>
            <p className='border-b-3 border-white text-center pb-1 text-white' >CONTACTO</p>
          </li></Link>
          <Link href="/cancionero"><li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-500  grid place-content-end`}>
            <p className='border-b-3  text-center pb-1 border-white text-white'>CANCIONERO</p>
          </li></Link>
          <Link href="/historia"><li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-500  grid place-content-end`}>
          <p className='border-b-3  text-center pb-1 border-white text-white'>HISTORIA</p>
          </li></Link>
          
        </ul>
        <div className={`${openedMenu ? '-mt-32 pb-8' : 'mt-8'} md:hidden flex flex-row transition-all ease-in-out duration-500`}>
          <div className="w-full  flex justify-end  px-4"><Image
                  src={instagram}
                  onClick={goInstagram}
                  width={45}
                  height={45}
                  alt="logoupv"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem', border: '', filter: 'brightness(0) invert(1)'}}
            /></div>
            <div className="w-full  flex justify-start  px-4  font-normal "><Image
                  src={spotify}
                  onClick={goSpotify}
                  width={45}
                  height={45}
                  alt="logoupv"
            /></div>
        </div>
      </div>
    </div>
  );
}
