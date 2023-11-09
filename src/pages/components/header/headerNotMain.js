import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import instagram from '../../../img/instagram.svg'
import logoupv from '../../../img/UPV.gif';
import spotify from '../../../img/spotify.svg'

export default function HeaderNotMain({type }) {
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
    <div id='navBar' className="z-20  top-0 right-0 w-full transition-all ease-in-out delay-300 duration-500 md:shadow-inset-top ">
      <div className='hidden md:flex items-center justify-between w-full'>

      <Link href='/' className='py-4 pt-6 pl-6 flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 md:max-md:flex-col text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-black/70 font-normal hover:cursor-pointer'>
        
        <p className='my-auto text-lg md:text-3xl lg:text-4xl 3xl:text-5xl  overflow-hidden  hover:border-my-orange/60 hover:scale-105 transition-all duration-300  text-white px-1 hover:shadow-black drop-shadow-lg border-y-2 border-white pb-1' >TUNATELECO</p>
        </Link>
          <div className='ml-2 filter drop-shadow-lg hover:drop-shadow-xl shadow-white hover:cursor-pointer hover:scale-105 transition-all duration-150' onClick={goInstagram}><Image
                  src={instagram}
                  width={48}
                  height={48}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem', border: ''}}
            /></div>
          <div className='hover:cursor-pointer hover:scale-105 transition-all duration-150 drop-shadow-lg hover:drop-shadow-xl'><Image
              src={spotify}
              width={72}
              height={72}
              alt="logoupv"
              onClick={goSpotify}
              style={{marginTop: 'auto', marginBottom: 'auto', paddingLeft: '0.5rem', paddingRight: '0.75rem'}} // optional
        /></div>
        <ul className='py-4 pl-6 flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 md:max-md:flex-col text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-black/70 font-normal '>

          <li className={`my-auto text-md overflow-hidden border-b-3  border-white/90  hover:border-my-orange-clear hover:shadow-sm transition-all duration-200 ease-in-out hover:cursor-pointer text-white shadowNav px-1`}>CONTACTO</li>
          <Link href="/cancionero" className={`my-auto text-md  overflow-hidden border-b-3    transition-all duration-200   px-1 ${type === 'cancionero' ? 'border-white/40 text-white/40 hover:cursor-default' : 'border-white/90 text-white shadowNav hover:border-my-orange-clear'}`}><li > CANCIONERO</li></Link>
          <Link href="/historia" className={`my-auto text-md  overflow-hidden border-b-3    transition-all duration-200   px-1 ${type === 'historia' ? 'border-white/40 text-white/40 hover:cursor-default' : 'border-white/90 text-white shadowNav hover:border-my-orange-clear'}`}><li > HISTORIA</li></Link>
          <li className='hover:cursor-pointer mr-3 hover:scale-105 transition-all duration-150 drop-shadow-lg hover:drop-shadow-xl'><Image
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
 
        <div onClick={openMenu} className="w-1/3 grid place-content-end h-full py-auto">
          <div className={`${openedMenu ? 'space-y-2 ' : ''} w-1/2 px-6 py-1 hover:cursor-pointer transition-all duration-500 h-full`}>
            <div className={`${openedMenu ? '' : 'origin-center rotate-45 absolute mt-05'} -ml-8 w-8 h-0.5 bg-white transition-all duration-500 mt-4`}></div>
            <div className={`${openedMenu ? '' : 'opacity-0'}  -ml-8 w-8 h-0.5 bg-white diagonal-fractions transition-all duration-500 `}></div>
            <div className={`${openedMenu ? '' : 'origin-center -rotate-45 absolute'} -ml-8 w-8 h-0.5 bg-white rounded-xl transition-all duration-500 mb-4`}></div>
          </div>
        </div>

      </div>
      <div className={`${openedMenu ? '-mt-36 pb-20' : 'mt-12'} md:hidden w-full  flex flex-col  px-4 pr-4 font-normal transition-all ease-in-out duration-500`}>
        <ul className='w-full h-full text-xl flex flex-row justify-between'>
          <Link href="/cancionero"><li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-500  grid place-content-end`}>
            <p className='border-b-3 border-white text-center pb-1 text-white' >CONTACTO</p>
          </li></Link>
          <Link href="/cancionero"><li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-500  grid place-content-end`}>
            <p className={`border-b-3  text-center pb-1   ${type === 'cancionero' ? 'border-white/40 text-white/40 hover:cursor-default' : 'border-white text-white'}`}>CANCIONERO</p>
          </li></Link>
          <Link href="/historia"><li className={`${openedMenu ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-500  grid place-content-end`}>
          <p className={`border-b-3  text-center pb-1   ${type === 'historia' ? 'border-white/40 text-white/40 hover:cursor-default' : 'border-white text-white'}`}>HISTORIA</p>
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
