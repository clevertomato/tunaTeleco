import React, { forwardRef } from 'react';
import Image from 'next/image';
import sheeran from '../../img/sheeran2.png'
import barato from '../../img/barato2.png'
import hodor from '../../img/hodor2.png'

const Contacto = forwardRef((props, ref) => {

  return (
  <div className="h-contacto w-auto contacto-bg flex items-center justify-center" ref={ref}>
    <div className='h-contacto-form md:h-auto w-full flex md:flex-row flex-col gap-4 py-4'>
      <div className='md:w-4/6 flex flex-col justify-between align-middle items-end px-8 md:pr-0 md:py-8'>
        <div className='h-full md:w-4/6 3xl:w-3/5 w-full flex flex-col justify-between gap-4' >
          <div className="text-2xl md:text-3xl text-white grid place-content-center w-full mt-4 md:m-0">
            <h2 className='text-center p-2 border-y-2'>¡Contacta con nosotros!</h2>
          </div>
          <div className="h-contacto-form  w-full form-bg border-2 border-white shadow-lg p-4 grid gap-4 text-sm" >
            <div className="w-full h-full">
              <div className="md:h-full flex flex-col justify-between w-full text-sm ">
                <div className='w-full md:h-full gap-2 flex flex-col justify-between'>
                  <div className="w-full">
                    <label className='text-white text-lg'>Nombre:</label>
                    <input type="text" name="full_name" id="full_name" className="text-lg text-white bg-black/20 h-10 border-2 mt-1 mb-1 rounded-sm px-4 w-full " required />
                  </div>
                  <div className="">
                    <label className='text-white text-lg'>Correo:</label>
                    <input type="email" name="email" id="email" className="text-lg text-white bg-black/20 h-10 border-2 mt-1 mb-1 rounded-sm px-4 w-full " required />
                  </div>
                  <div className="">
                    <label className='text-white text-lg'>Teléfono:</label>
                    <input type="tel" name="tel" id="tel" className="text-lg text-white bg-black/20 h-10 border-2 mt-1 mb-1 rounded-sm px-4 w-full " placeholder="*Opcional*" />
                  </div>
                  <div className='flex align-middle w-full h-full'>
                    <div className="w-full h-auto">
                      <label className='text-white text-lg'>Mensaje:</label>
                      <textarea name="text" rows={7} className="pt-1 text-lg text-white bg-black/20 border-2 mt-1 mb-1 rounded-sm px-4 w-full " required/>
                    </div>
                  </div>
                  <div className="text-right grid place-content-end">
                    <button className="border-2 border-white text-white font-bold py-2 px-4  rounded-sm text-xl hover:shadow-sm  hover:border-my-3purple transition-all duration-300 hover:cursor-pointer"> Enviar  </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 flex flex-col justify-between align-middle items-start py-8 md3:pr-28'>
        <div className="md2:w-5/6 md3:w-4/6 3xl:w-3/6 w-full flex flex-col items-start h-full gap-4 px-8 ">
          <div className='w-full'>
            <div className="text-2xl md:text-3xl text-white grid place-content-center w-full ">
              <h2 className='text-center p-2 border-y-2'>¡Llámanos!</h2>
            </div>
          </div>
          <div className='w-full h-full flex flex-col justify-between text-white'>
          <div className='h-full form-bg  md:h-contacto-foto 2xl:h-contacto-foto2  w-full border-2 flex flex-row mb-4 md:m-0'>
                <div className='h-full w-1/2 border-r-2'>
                      <Image
                      src={sheeran}
                      alt="sheeran"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                </div>
                <ul className=' flex flex-col justify-between w-full px-4 p-8 '>
                  <li className='text-left text-xl'>
                      Sheeran (Pablo)
                  </li>
                  <li className='text-left text-xl'>
                    ☏ 620178222
                  </li>
                </ul>
            </div>
            <div className=' form-bg h-contacto-foto 2xl:h-contacto-foto2 h-min w-full border-2 flex flex-row  mb-4 md:m-0'>
                <div className='h-full w-1/2 border-r-2'>
                      <Image
                      src={barato}
                      alt="barato"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                </div>
                <ul className=' flex flex-col justify-between w-full px-4 p-8'>
                  <li className='text-left text-xl'>
                      Barato (Pedro)
                  </li>
                  <li className='text-left text-xl'>
                    ☏ 620178222
                  </li>
                </ul>
            </div>
            <div className='form-bg h-contacto-foto 2xl:h-contacto-foto2 w-full border-2 flex flex-row'>
                <div className='h-full w-1/2 border-r-2'>
                      <Image
                      src={hodor}
                      alt="hodor"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                </div>
                <ul className=' flex flex-col justify-between w-full px-4 p-8'>
                  <li className='text-left text-xl'>
                      Hodor (Santi)
                  </li>
                  <li className='text-left text-xl'>
                    ☏ 620178222
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
});

export default Contacto
