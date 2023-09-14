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
        <p className='px-8 pb-4 grid place-content-center letter-spacing-011'>La Tuna Universitaria de Ingenieros de Telecomunicaciones de Valencia es una agrupación formada en el año 1992. Desde el principio estos tunos ingenieros entonan melodías tradicionales y contemporáneas, acompañados de guitarras, bandurrias, laúdes y otros instrumentos característicos de la tuna. </p>
        <p className='px-8 pb-8 grid place-content-center letter-spacing-011'>Reconocidos por su participación en eventos académicos, festivales culturales, su atuendo distintivo y su energía contagiosa, que los convierten en un símbolo de la tradición y avanguardia en Valencia.</p>
    </div>

  )
}
