import React from 'react'
import Image from 'next/image';
import logoupv from '../../../img/UPV.gif';
import marcaUPV from '../../../img/marcaUPV.png'
import email from '../../../img/email.svg'


function Footer() {
  const goUpv = () => {
    window.open('https://www.upv.es/es', "_blank", "noreferrer");
  };
  return (
    <div className='apuntate-bg-back w-auto h-full flex md:flex-row flex-col justify-between text-white border-t-2 px-8 text-base md:text-xl py-2 md:py-4 md:pt-8'>
          <div className='md:hidden h-12 md:h-32 px-auto flex flex-row items-center gap-1 justify-center'>
          <p className='md:mr-8'>TunaTeleco Copyright 2024 </p>
            </div>
          <div className='h-12 md:h-24 px-auto flex flex-row items-center gap-1 justify-center -mt-4 md:mt-2'>
            <p className='md:block hidden md:mr-8 text-center'>TunaTeleco Copyright 2024 </p>
            <Image
                src={email}
                alt="email"
                style={{ height:'20px',width:'20px', marginTop:'auto', marginBottom: 'auto'}} // optional
            />    
            <p>tunateleco@gmail.com </p>
          </div>
          <div className='h-24 w-full md:w-auto md:px-8 flex flex-col md:flex-row items-center justify-center gap-1 md:p-2 mt-2'>
          <button onClick={goUpv} className='hidden md:block'>          <Image
              src={marcaUPV}
              alt="logoupv"
              onClick={goUpv}
              style={{ height:'5rem',width:'auto'}} // optional
        /></button>
        <button onClick={goUpv} className='md:hidden pt-2'>          <Image
              src={marcaUPV}
              alt="logoupv"
              onClick={goUpv}
              style={{ height:'5rem',width:'auto'}} // optional
        /></button>

  </div>
          
        </div>
  )
}

export default Footer