import React from 'react'
import Image from 'next/image';
import logoupv from '../../../img/UPV.gif';
import marcaUPV from '../../../img/marcaUPV.png'
import email from '../../../img/email.svg'
import tunito from '../../../img/tunito.png'

function Footer() {
  const goUpv = () => {
    window.open('https://www.upv.es/es', "_blank", "noreferrer");
  };
  const goTunaUpv = () => {
    window.open('https://tuna.upv.es/', "_blank", "noreferrer");
  };
  const goEmail = () => {
    window.location = 'mailto:tunateleco@gmail.com'
  };
  return (
    <div className='apuntate-bg-back w-auto h-full flex md:flex-row flex-col justify-between text-white border-t-2 px-8 text-base md:text-xl py-2 md:py-4 md:pt-8'>
          <div className='md:hidden h-12 md:h-32 px-auto flex flex-row items-center gap-1 justify-center'>
          <p className='md:mr-8'>TunaTeleco Copyright 2024 </p>
            </div>
          <div className='h-12 md:h-24 px-auto flex flex-row items-center gap-1 justify-center -mt-4 md:mt-2' onClick={goEmail}>
            <p className='md:block hidden md:mr-8 text-center'>TunaTeleco Copyright 2024 </p>
            <div className='flex flex-row gap-1 align-middle justify-center hover:cursor-pointer'>            <Image
                src={email}
                alt="email"
                style={{ height:'20px',width:'20px', marginTop:'auto', marginBottom: 'auto'}} // optional
            />    
            <p>tunateleco@gmail.com </p></div>

          </div>
          <div className='h-24 w-full md:w-auto md:px-8 flex flex-col md:flex-row items-center justify-center gap-1 md:p-2 mt-2'>
          <a href='https://www.upv.es/es' onClick={goUpv} className='hidden md:block'>          <Image
              src={marcaUPV}
              alt="logoupv"
              onClick={goUpv}
              style={{ height:'5rem',width:'auto'}} // optional
        /></a>
        <div className='flex flex-row align-middle justify-center place-content-center'>
        <a href='https://www.upv.es/es' onClick={goUpv} className='md:hidden pt-2'>          <Image
              src={marcaUPV}
              alt="logoupv"
              onClick={goUpv}
              style={{ height:'5rem',width:'auto'}} // optional
        /></a>
        <a className='md:hidden hover:cursor-pointer' href='https://tuna.upv.es/' onClick={goTunaUpv}><Image
              src={tunito}
              alt="un dibujo de un tunito"
              onClick={goUpv}
              style={{ height:'5rem',width:'auto'}} // optional
        /></a>
        <a onClick={goTunaUpv} href='https://tuna.upv.es/' className='hidden md:block hover:cursor-pointer'>          
          <Image
              src={tunito}
              alt="un dibujo de un tunito"
              onClick={goUpv}
              style={{ height:'4.5rem',width:'auto'}} // optional
          />
        </a>
        </div>

  </div>
          
        </div>
  )
}

export default Footer