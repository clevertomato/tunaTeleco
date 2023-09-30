import React from 'react'
import Image from 'next/image'
import logoupv from '../../img/UPV.gif'

export default function Valores() {
  return (
    <div className='h-auto w-full backgroundfixed flex flex-col border-y-2 border-white gap-4 py-4'>
        <div className='text-white text-xl md:text-2xl md2:text-3xl lg:text-3xl xl:text-4xl text-center py-4 grid place-content-center relative'>
            <p className='border-y-2 p-2 border-white valores-text'>
                Nuestros valores
            </p>
        </div>
        <div className='flex flex-wrap text-white h-3/5 relative'>
            <div className='w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4'>
                <Image
                        src={logoupv}
                        alt="logoupv"
                        height={40}
                        style={{ width:'auto', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                <div className='w-full h-full grid place-content-center'>
                    <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                        Mantener la Tradición
                    </p>
                </div>
            </div>
            <div className='w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4'>
                <Image
                        src={logoupv}
                        alt="logoupv"
                        height={40}
                        style={{ width:'auto', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                <div className='w-full h-full grid place-content-center'>
                    <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                        Fomentar el Folclore
                    </p>
                </div>
            </div>
            <div className='w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4'>
                <Image
                        src={logoupv}
                        alt="logoupv"
                        height={40}
                        style={{ width:'auto', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                <div className='w-full h-full grid place-content-center'>
                    <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                    Vivir nuevas experiencias
                    </p>
                </div>
            </div>
            <div className='w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4'>
                <Image
                        src={logoupv}
                        alt="logoupv"
                        height={40}
                        style={{ width:'auto', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                <div className='w-full h-full grid place-content-center'>
                    <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                    Disfrutar de la Vida
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}