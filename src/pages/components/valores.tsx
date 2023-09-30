import React from 'react'
import Image from 'next/image'
import logoupv from '../../img/UPV.gif'

export default function Valores() {
  return (
    <div className='h-valores w-full backgroundfixed flex flex-col overflow-x-hidden border-y-2 border-white justify-between py-4 lg:py-0'>
        <div className='h-2/5 text-white text-xl md:text-2xl md2:text-3xl lg:text-3xl xl:text-4xl grid place-content-center text-center py-4'><p className='border-y-2 pb-2 border-white valores-text '>Nuestros valores</p></div>
        <ul className='h-3/5 w-full text-white flex flex-col md:flex-row py-4 text-center px-16 lg:px-32 gap-8'>
            <li className='w-full md:w-1/2 flex flex-row justify-between gap-8'>
                <div className='h-full w-1/2 md:auto flex flex-col '>
                <Image
                        src={logoupv}
                        alt="logoupv"
                        style={{ height: '100%', width:'100%', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                    <div className='w-full h-full grid place-content-center'>
                        <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                            Mantener la Tradición
                        </p>
                    </div>
                </div>
                <div className='h-full w-1/2 md:auto flex flex-col '>
                    <Image
                        src={logoupv}
                        alt="logoupv"
                        style={{ height: '100%', width:'100%', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                    <div className='w-full h-full grid place-content-center'>
                        <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                            Fomentar el Folclore
                        </p>
                    </div>
                </div>
            </li>
            <li className='w-full md:w-1/2 flex flex-row gap-8'>
            <div className='h-full w-1/2 md:auto flex flex-col '>
                    <Image
                        src={logoupv}
                        alt="logoupv"
                        style={{ height: '100%', width:'100%', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                    <div className='w-full h-full grid place-content-center'>
                        <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                            Vivir nuevas experiencias
                        </p>
                    </div>
                </div>
                <div className='h-full w-1/2 md:auto flex flex-col '>
                    <Image
                        src={logoupv}
                        alt="logoupv"
                        style={{ height: '100%', width:'100%', marginLeft: 'auto', marginRight: 'auto',  padding: '0.2rem'}}></Image>
                    <div className='w-full h-full grid place-content-center'>
                        <p className='text-center text-xl lg:text-xl 3xl:text-3xl  w-fit'>
                            Disfrutar de la Vida
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
