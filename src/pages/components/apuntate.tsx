import React from 'react'
import Image from 'next/image'
import logoupv from '../../img/UPV.gif';
import email from '../../img/email.svg'
import Carousel from './carousel/carousel';
function Apuntate() {
  const goUpv = () => {
    window.location.replace('https://www.upv.es/es');
  };

  return (
    <div className=' h-quienes md:h-auto w-full  border-t-2 border-white '>
        <div className='h-min md:h-full w-full flex md:flex-row flex-col gap-4 md:gap-0 '>
            <div className='hidden md:block h-auto w-full  md:w-1/2 md:h-apuntate'>
                <Carousel/>
            </div>
            <div className='h-min md:h-full w-full md:w-1/2 flex flex-col md:justify-between gap-8 form-bg'>
              <div className="text-xl md:text-3xl text-white grid place-content-center w-full mt-4 md:m-0 md:pt-8 pt-4 px-8">
                  <p className='text-center border-y-2 py-1 px-2'>ÚNETE A LA TUNA</p>
              </div>
              <div className='md:h-2/6 h-min grid place-content-center px-8  md:px-16'>
               <p className=' text-black text-lg text-center '>Si tienes pasión por la música, ansías explorar nuevos horizontes, disfrutas de las aventuras y buscas la oportunidad de conocer personas increíbles, entonces este es el lugar para ti. 
               <br></br>Forma parte de nuestra Tuna Universitaria y descubre las emocionantes experiencias que te aguardan. No dudes más, ¡es hora de unirte a nosotros!</p>
              </div>
              
              <div className='md:h-1/6 h-min w-full grid place-content-center md:pb-8'>
                  <button className="border-2 border-white text-white font-medium py-2 px-4  rounded-sm text-xl hover:shadow-sm  hover:border-my-orange transition-all duration-300 hover:cursor-pointer"> Apúntate  </button>
              </div>
              <div className='md:hidden md:h-full w-full  md:w-1/2 h-apuntate pt-0 p-8 md:pt-8 pb-4 mb-8'>
                <Carousel/>
              </div>
            </div>
        </div>
       <div className='apuntate-bg-back w-auto h-full flex md:flex-row flex-col justify-between text-white border-t-2 px-8 text-base md:text-xl'>
          <div className='md:hidden h-12 md:h-28 px-auto flex flex-row items-center gap-1 justify-center'>
          <p className='md:mr-8'>TunaTeleco Copyright 2023 </p>
            </div>
          <div className='h-12 md:h-24 px-auto flex flex-row items-center gap-1 justify-center'>
            <p className='md:block hidden md:mr-8 text-center'>TunaTeleco Copyright 2023 </p>
            <Image
                src={email}
                alt="email"
                style={{ height:'20px',width:'20px', marginTop:'auto', marginBottom: 'auto'}} // optional
            />    
            <p>tunateleco@gmail.com </p>
          </div>
          <div className='h-24 md:px-8 flex flex-row items-center justify-center gap-1 md:p-2'>
          <p className='mr-8 text-center '>Universidad Politécnica de Valencia </p>
          <Image
              src={logoupv}
              alt="logoupv"
              onClick={goUpv}
              style={{ height:'5rem',width:'5rem'}} // optional
        />
  </div>
          
        </div>
    </div>
  )
}

export default Apuntate