import React from 'react'
import Image from 'next/image';
import sheeran from '../../img/sheeran2.png'
import barato from '../../img/barato2.png'
import hodor from '../../img/hodor2.png'

function Contacto() {
  return (
  <div className="h-contacto w-auto p-6 contacto-bg flex items-center justify-center">
    <div className='h-auto md:h-full w-full flex md:flex-row flex-col gap-8 py-8'>
      <div className='h-full w-full md:w-3/5 flex justify-center align-middle items-end flex-col gap-8'>
        <div className="text-3xl text-white grid place-content-center md:w-3/5 w-full">
          <h2 className='text-center py-2 border-y-2'>¡Contacta con nosotros!</h2>
        </div>
        <div className="h-3/5 md:w-3/5 w-full form-bg border-2 border-white shadow-lg p-2 px-2 md:p-8 grid gap-4 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-3 h-full">
            <div className="md:h-full grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label className='text-white text-lg'>Nombre:</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded-sm px-4 w-full bg-gray-50" required />
              </div>
              <div className="md:col-span-5">
                <label className='text-white text-lg'>Correo:</label>
                <input type="email" name="email" id="email" className="h-10 border mt-1 rounded-sm px-4 w-full bg-gray-50" required />
              </div>
              
              <div className="md:col-span-5">
                <label className='text-white text-lg'>Teléfono:</label>
                <input type="tel" name="tel" id="tel" className="h-10 border mt-1 rounded-sm px-4 w-full bg-gray-50" placeholder="*Opcional*" />
              </div>

              <div className="md:col-span-5 ">
                <label className='text-white text-lg'>Mensaje:</label>
                <textarea name="text" rows={4} className="border mt-1 mb-2 rounded-sm px-4 w-full bg-gray-50 required"/>
              </div>
              <div className="md:col-span-5 text-right grid place-content-end">
                <div className="inline-flex items-end">
                  <button className="border-2 border-white text-white font-bold py-2 px-4  rounded-sm text-xl hover:shadow-md hover:shadow-my-orange-700 hover:border-my-orange hover:bg-slate-50/20"> Enviar  </button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full md:w-2/5 w-full'>
        <div className='h-full w-full md:w-2/5 flex justify-center align-middle items-end flex-col gap-8'>
          <div className="text-3xl text-white grid place-content-center w-full">
            <h2 className='text-center py-2 border-y-2'>¡Llámanos!</h2>
          </div>
          <div className='h-3/5 w-full flex flex-col gap-4 text-white'>
            <div className='form-bg h-1/3 w-full border-2 flex flex-row'>
                <div className='h-full w-1/2 border-r'>
                      <Image
                      src={sheeran}
                      alt="sheeran"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                </div>
                <ul className=' flex flex-col md:flex-row justify-between w-full px-4 p-8'>
                  <li className='text-left text-xl'>
                      Sheeran (Pablo)
                  </li>
                  <li className='text-left text-xl'>
                    ☏ 620178222
                  </li>
                </ul>
            </div>
            <div className='form-bg h-1/3 w-full border-2 flex flex-row'>
                <div className='h-full w-1/2 border-r'>
                      <Image
                      src={barato}
                      alt="barato"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                </div>
                <ul className=' flex flex-col md:flex-row justify-between w-full px-4 p-8'>
                  <li className='text-left text-xl'>
                      Barato (Pedro)
                  </li>
                  <li className='text-left text-xl'>
                    ☏ 620178222
                  </li>
                </ul>
            </div>
            <div className='form-bg h-1/3 w-full border-2 flex flex-row'>
                <div className='h-full w-1/2 border-r'>
                      <Image
                      src={hodor}
                      alt="hodor"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                </div>
                <ul className=' flex flex-col md:flex-row justify-between w-full px-4 p-8'>
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