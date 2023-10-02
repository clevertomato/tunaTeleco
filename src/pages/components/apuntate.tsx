import React from 'react'
import video from '../../img/telecovideo.mp4'

function Apuntate() {
  return (
    <div className='h-auto w-full form-bg border-y-2 border-white'>
        <div className='h-full w-full flex flex-col '>
            <div className="text-2xl md:text-3xl text-white grid place-content-center w-full mt-4 md:m-0 pt-8">
                <h2 className='text-center p-2 border-y-2'>¡Únete a la Tuna de ingenieros en Telecomunicaciones en Valencia!</h2>
            </div>
            <div className='w-full h-96 flex flex-row'>
              <div className='h-full w-3/5 p-16 grid place-content-center text-white text-2xl text-center'>
                Si tienes pasión por la música, ansías explorar nuevos horizontes, disfrutas de las aventuras y buscas la oportunidad de conocer personas increíbles, entonces este es el lugar para ti. Forma parte de nuestra Tuna Universitaria y descubre las emocionantes experiencias que te aguardan. No dudes más, ¡es hora de unirte a nosotros!
              </div>
              <div className='h-full w-2/5 p-8'>
                  <video className='object-fill h-full w-full border-2' src={video} autoPlay loop muted/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Apuntate