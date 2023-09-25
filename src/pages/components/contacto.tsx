import React from 'react'
import Image from 'next/image';
import sheeran from '../../img/sheeran.PNG'
import barato from '../../img/barato.PNG'
import hodor from '../../img/hodor.PNG'

function Contacto() {
  const satStyle = {
    height: '15%',
  };
  const satStyle20 = {
    height: '20%',
  };
  const restStyle = {
    height: '85%',
  };
  return (
  <div className="h-auto p-6 contacto-bg flex items-center justify-center h-contacto">
    <div className="h-full container mx-auto">
      <div className="md:hidden text-3xl text-white grid place-content-center">
        <h2 className='text-center py-2 border-y-2'>¡Contacta con nosotros!</h2>
      </div>
      <div className='hidden md:flex flex-row justify-between items-center  mb-6' style={satStyle20}>
        <div className="text-4xl text-white grid place-content-center w-2/5" style={satStyle}>
                  <h2 className='text-center py-2 border-y-2'>¡Llámanos!</h2>
        </div>
        <div className="text-3xl text-white grid place-content-center w-3/5" style={satStyle}>
          <h2 className='text-center py-2 border-y-2'>¡Contacta con nosotros!</h2>
        </div>
      </div>
      <div className='h-auto'>
      <div className="mb-6 flex flex-col md:flex-row h-contacto-form gap-8 h-auto">
        <div className="hidden h-full text-white w-2/5 md:flex flex-col gap-4">
              <div className="md:hidden text-4xl text-white grid place-content-center w-2/5" style={satStyle}>
                <h2 className='text-center py-2 border-y-2'>¡Llámanos!</h2>
              </div>
              <div className='form-bg w-full rounded-sm border-white text-lg flex flex-row gap-4 border-2'>
                    <div className='h-full w-1/2 border-r'>
                      <Image
                      src={sheeran}
                      alt="sheeran"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                    </div>
                    <ul className=' flex md:flex-col flex-row justify-between w-full px-4 p-8'>
                      <li className='text-left text-2xl'>
                          Sheeran (Pablo)
                      </li>
                      <li className='text-left text-xl'>
                        ☏ 620178222
                      </li>
                  </ul>
              </div>
              
              <div className='form-bg w-full bg-white/20 rounded-sm border-white text-lg flex flex-row gap-4 border-2'>
                    <div className='h-full w-1/2 border-r'>
                      <Image
                      src={barato}
                      alt="barato"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                    </div>
                    <ul className=' flex md:flex-col flex-row justify-between w-full px-4 p-8'>
                      <li className='text-left text-2xl'>
                          Barato (Pedro)
                      </li>
                      <li className='text-left text-xl'>
                        ☏ 620178222
                      </li>
                  </ul>
              </div>
              <div className='form-bg w-full bg-white/20 rounded-sm border-white text-lg flex flex-row gap-4 border-2'>
                    <div className='h-full w-1/2 border-r'>
                      <Image
                      src={hodor}
                      alt="hodor"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
                    </div>
                    <ul className=' flex md:flex-col flex-row justify-between w-full px-4 p-8'>
                      <li className='text-left text-2xl'>
                          Hodor (Santi)
                      </li>
                      <li className='text-left text-xl'>
                        ☏ 620178222
                      </li>
                  </ul>
              </div>
          </div>
          <div className="form-bg border-2 border-white shadow-lg p-2 px-2 md:p-8 grid gap-4 text-sm grid-cols-1 lg:grid-cols-3 md:w-3/5 ">
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
                    <button className="border-2 border-white text-white font-bold py-2 px-4  rounded-sm">Enviar  </button>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="md:hidden h-auto text-white flex flex-col gap-4">
              <div className="md:hidden text-3xl text-white grid place-content-center">
                <h2 className='text-center py-2 border-y-2'>¡Llámanos!</h2>
              </div>
              <div className='h-auto flex flex-col gap-2'>
                <div className='form-bg h-1/3 w-full rounded-sm border-white text-lg flex flex-row gap-4 border-2'>
                      <div className='h-full w-1/2 border-r'>
                        <Image
                        src={sheeran}
                        alt="sheeran"
                        style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                      />
                      </div>
                      <ul className=' flex flex-col justify-between w-full px-4 p-8'>
                        <li className='text-left text-2xl'>
                            Sheeran (Pablo)
                        </li>
                        <li className='text-left text-xl'>
                          ☏ 620178222
                        </li>
                    </ul>
                </div>
                
                <div className='form-bg h-1/3 w-full bg-white/20 rounded-sm border-white text-lg flex flex-row gap-4 border-2'>
                      <div className='h-full w-1/2 border-r'>
                        <Image
                        src={barato}
                        alt="barato"
                        style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                      />
                      </div>
                      <ul className=' flex flex-col justify-between w-full px-4 p-8'>
                        <li className='text-left text-2xl'>
                            Barato (Pedro)
                        </li>
                        <li className='text-left text-xl'>
                          ☏ 620178222
                        </li>
                    </ul>
                </div>
                <div className='form-bg h-1/3 w-full bg-white/20 rounded-sm border-white text-lg flex flex-row gap-4 border-2'>
                      <div className='h-full w-1/2 border-r'>
                        <Image
                        src={hodor}
                        alt="hodor"
                        style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                      />
                      </div>
                      <ul className=' flex flex-col justify-between w-full px-4 p-8'>
                        <li className='text-left text-2xl'>
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
</div>
  )
}

export default Contacto