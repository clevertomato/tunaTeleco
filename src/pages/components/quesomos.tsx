import React from 'react'
import Slide from 'react-reveal/Fade';
import Image from 'next/image';
import satellite from '../../img/satellite.png'

export default function Quesomos() {

    const satStyleMob = {
      width: '100%',
      height: '100%',
    };
    const satStyle = {
        width: '100%',
        height: '100%',
      };

  return (
    <div className='h-quienes w-auto quienes-bg flex flex-col md:flex-row overflow-x-hidden border-t-2 border-white overflow-y-hidden '>
        <div className='h-max md:h-full py-8 px-8 md3:pl-28 md:pr-16 md w-full lg:w-1/2 relative'>
            <div className='quienes-img border-2 border-white rounded-sm h-70-screen'></div>
            <div className='hidden md:block mr-4 pt-16 absolute z-0 right-0 top-0  overflow-y-hidden overflow-x-hidden' style={satStyleMob}>
                <div className='satelliteanimation'>
                <Image
                src={satellite}
                alt="satellite"
                style={{ width: '20%', height:'20%', objectFit:'contain', filter: 'drop-shadow(4px 4px 4px #222)'}} // optional
                />
                </div>
            </div>
        </div>
        <div className='hidden h-min md:h-full w-full lg:w-4/6 sm:text-sm md:text-sm md3:text-lg lg:text-xl 3xl:text-3xl md2:flex flex-col relative overscroll-y-none'>
            <div className=' h-min md:h-full w-full py-0 mt-0 px-8 md3:pr-28 md:pl-0 md:py-8 lg:absolute z-10 flex flex-col justify-between'>
            <Slide right duration={1500}>
                <div className='md:border-right-top-right2 3xl:border-right-top-right h-full lg:h-5/6 grid place-content-center gap-4 md:gap-8 3xl:gap-16  sm:w-full md:w-full text-center pb-4 px-2 md:p-8 3xl:px-16 text-quienes'>
                    <p className='grid place-content-center letter-spacing-011'>La Tuna Universitaria de Ingenieros de Telecomunicaciones de Valencia es una agrupación formada en el año 1992. Desde el principio estos tunos ingenieros entonan melodías tradicionales y contemporáneas, acompañados de guitarras, bandurrias, laúdes y otros instrumentos característicos de la tuna. </p>
                    <p className='grid place-content-center letter-spacing-011'>Reconocidos por su participación en eventos académicos, festivales culturales, su atuendo distintivo y su energía contagiosa, que los convierten en un símbolo de la tradición y avanguardia en Valencia.</p>
                </div>
            </Slide>
            <Slide right duration={1000}>
                <div className='grid place-content-center md:-mt-2 pt-2 pb-8 md:py-0'>
                <p className='text-white text-md md2:2xl md:text-lg lg:text-2xl xl:text-3xl 3xl:text-4xl cajatexto overflow-hidden text-center border-2 border-x-0 border-my- grid place-content-center py-2'>Te arreglamos el wifi y te tocamos una canción</p>
                </div>
            </Slide>
            </div>
        </div>
        <Slide right duration={1000}>
            <p className='md2:hidden px-8 pb-4 grid place-content-center letter-spacing-011 text-center'>La Tuna Universitaria de Ingenieros de Telecomunicaciones de Valencia es una agrupación formada en el año 1992. Desde el principio estos tunos ingenieros entonan melodías tradicionales y contemporáneas, acompañados de guitarras, bandurrias, laúdes y otros instrumentos característicos de la tuna. </p>
        </Slide>
        <Slide right duration={1000}>
            <p className='md2:hidden px-8 pb-8 grid place-content-center letter-spacing-011 text-center'>Reconocidos por su participación en eventos académicos, festivales culturales, su atuendo distintivo y su energía contagiosa, que los convierten en un símbolo de la tradición y avanguardia en Valencia.</p>
        </Slide>
        <Slide right duration={1000}>
            <div className='md2:hidden px-8 grid place-content-center md:-mt-2 pt-2 pb-8 md:py-0'>
                    <p className='text-white text-md md2:2xl md:text-lg lg:text-2xl xl:text-3xl 3xl:text-4xl cajatexto overflow-hidden text-center border-2 border-x-0 border-my- grid place-content-center py-2'>Te arreglamos el wifi y te tocamos una canción</p>
            </div>
        </Slide>
    </div>

  )
}
