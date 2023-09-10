import React from 'react'

function Contacto() {
  return (
<div className="min-h-screen p-6 contacto-bg flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <p className="text-4xl text-white mb-4">¡Contacta con nosotros!</p>

      <div className="form-bg border-2 border-white shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className=" text-white border-r-2">
            <p className="font-medium text-lg">Nuestras personitas</p>
            <div className='h-full flex flex-col p-4 md3:p-8 pl-0 md3:pl-0 gap-4 '>
                <div className='h-1/3 w-full bg-white/25 rounded-sm p-4 flex'>
                    <div>
                        Barato
                    </div>
                </div>
                <div className='h-1/3 w-full bg-white/25 rounded-sm p-4'>
                        Sheeran
                </div>
                <div className='h-1/3 w-full bg-white/25 rounded-sm p-4'>
                        Hodor
                </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 ">
              <div className="md:col-span-5">
                <label className='text-white text-lg' for="full_name">Nombre:</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded-sm px-4 w-full bg-gray-50" required />
              </div>

              <div className="md:col-span-5">
                <label className='text-white text-lg' for="email">Correo:</label>
                <input type="email" name="email" id="email" className="h-10 border mt-1 rounded-sm px-4 w-full bg-gray-50" required />
              </div>
              
              <div className="md:col-span-5">
                <label className='text-white text-lg' for="tel">Teléfono:</label>
                <input type="tel" name="tel" id="tel" className="h-10 border mt-1 rounded-sm px-4 w-full bg-gray-50" placeholder="Opcional" />
              </div>

              <div className="md:col-span-5 ">
                <label className='text-white text-lg' for="email">Mensaje:</label>
                <textarea name="text" rows={4} className="border mt-1 mb-2 rounded-sm px-4 w-full bg-gray-50 required"/>
              </div>
      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="border-2 border-white text-white font-bold py-2 px-4  rounded-sm">Enviar  </button>
                </div>
              </div>

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