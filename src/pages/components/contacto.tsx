import React from 'react'
import Image from 'next/image';
import sheeran from '../../img/sheeran2.png'
import barato from '../../img/barato2.png'
import hodor from '../../img/hodor2.png'

function Contacto() {
  return (
  <div className="h-contacto w-auto p-8 contacto-bg flex items-center justify-center">
    <div className='h-full md:h-auto w-full flex md:flex-row flex-col gap-8 py-4'>
      <div className='h-full w-full md:w-3/5 flex justify-center align-middle items-end flex-col gap-8'>
        <div className="text-3xl text-white grid place-content-center md:w-3/5 w-full">
          <h2 className='text-center py-2 border-y-2'>¡Contacta con nosotros!</h2>
        </div>
        <div className="h-contacto-form md:w-3/5 w-full form-bg border-2 border-white shadow-lg p-4 py-8 md:p-4 grid gap-4 text-sm">
          <div className="w-full h-full">
            <div className="md:h-full flex flex-col justify-between w-full text-sm ">
              <div className='w-full md:h-full 2xl:h-90 flex flex-col justify-between'>
                <div className="w-full">
                  <label className='text-white text-lg'>Nombre:</label>
                  <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 mb-1 rounded-sm px-4 w-full bg-gray-50" required />
                </div>
                <div className="">
                  <label className='text-white text-lg'>Correo:</label>
                  <input type="email" name="email" id="email" className="h-10 border mt-1 mb-1 rounded-sm px-4 w-full bg-gray-50" required />
                </div>
                
                <div className="">
                  <label className='text-white text-lg'>Teléfono:</label>
                  <input type="tel" name="tel" id="tel" className="h-10 border mt-1 mb-1 rounded-sm px-4 w-full bg-gray-50" placeholder="*Opcional*" />
                </div>
<div className='flex align-middle w-full h-full'>
                <div className="w-full h-auto">
                  <label className='text-white text-lg'>Mensaje:</label>
                  <textarea name="text" rows={7} className="border mt-1 rounded-sm px-4 w-full bg-gray-50 required"/>
                </div>
                </div>
              </div>
              <div className="text-right grid place-content-end">
                <div className="inline-flex items-end">
                  <button className="border-2 border-white text-white font-bold py-2 px-4  rounded-sm text-xl hover:shadow-md hover:shadow-my-orange-700 hover:border-my-orange hover:bg-slate-50/5 transition-all duration-300 hover:cursor-pointer"> Enviar  </button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-3/5 md:w-2/5 w-full'>
        <div className='h-full w-full md:w-2/5 flex align-middle items-end justify-between flex-col gap-8'>
          <div className="text-3xl text-white grid place-content-center w-full">
            <h2 className='text-center py-2 border-y-2'>¡Llámanos!</h2>
          </div>
          <div className='w-full flex flex-col justify-between text-white h-60'>
            <div className='form-bg h-30 w-full border-2 flex flex-row'>
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
            <div className='form-bg h-30 w-full border-2 flex flex-row m-0'>
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
            <div className='form-bg h-30 w-full border-2 flex flex-row'>
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
}

export default Contacto