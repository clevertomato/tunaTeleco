import React from 'react'
import { useState } from 'react';
import Slide from 'react-reveal/Fade';
import Image from 'next/image';
import leftarrow from '../../img/left-arrow.svg'

export default function Celebraciones() {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    const clickActive = () => {
        setActive(!active);
      };
    const clickActive1 = () => {
      setActive1(!active1);
      setActive2(false);
      setActive3(false);
      setActive4(false);
    };
    const clickActive2 = () => {
      setActive1(false);
      setActive2(!active2);
      setActive3(false);
      setActive4(false);
    };
    const clickActive3 = () => {
      setActive1(false);
      setActive2(false);
      setActive3(!active3);
      setActive4(false);
    };
    const clickActive4 = () => {
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(!active4);

    };
    const satStyleMob = {
      width: '100%',
      height: '100%',
    };
    const satStyle = {
        width: '100%',
        height: '100%',
      };

  return (
    <div className={`${active ? 'ml--100 md:ml--50' : ''}  h-quienes w-auto celebraciones-bg flex flex-col md:flex-row overflow-x-hidden transition-all ease-in-out delay-300 duration-500 `}>

        <div className='h-full w-full lg:w-4/6 sm:text-sm md:text-sm md3:text-base xl:text-xl 3xl:text-3xl flex flex-col justify-between relative'>
            <div className={`${active ? 'ml--100 md:ml--50' : ''} h-full w-full px-8 2xl:pl-28 md:pr-0 md:py-8 lg:absolute z-10 flex flex-col justify-between transition-all ease-in-out delay-300 duration-500 `}>
            <Slide left duration={1500}><div className='grid place-content-center py-8 md:py-0'>
                    <p className='text-white text-md md2:2xl md:text-lg lg:text-2xl xl:text-3xl 3xl:text-4xl cajatexto overflow-hidden text-center border-2 border-x-0 border-my- grid place-content-center py-2'>¿Quieres hacer que tu evento o celebración sea inolvidable?</p>
                </div></Slide>
            <div className='md:border-left-bottom-left2 3xl:border-left-bottom-left h-full lg:h-5/6 grid place-content-center gap-4 md:gap-8 xl:gap-10 2xl:gap-16  sm:w-full md:w-full text-center pb-4 md:pt-4 lg:px-4 px-2 3xl:px-4 text-quienes'>
            <Slide left duration={1500}><p className='grid place-content-center letter-spacing-011'>Ofrecemos nuestros servicios para bodas, comuniones, cumpleaños, jubilaciones y cualquier ocasión especial que desees destacar. Nuestro objetivo es hacer de cada momento una auténtica fiesta para que todos disfruten al máximo. </p></Slide>
            <Slide left duration={1000}><p className='grid place-content-center letter-spacing-011 -mt-8'>Con un repertorio amplio y variado, llevamos la alegría y el buen humor a cada lugar que visitamos. Nos esforzamos al máximo para asegurar que tu evento sea un éxito y, lo más importante, lo disfrutamos enormemente en el proceso.</p></Slide>
            <div className='md:flex items-center justify-between w-full '>
                <button className='text-center py-2 px-6 border-3 border-white text-white rounded-sm mx-auto' onClick={clickActive}>
                    Información sobre Eventos
                </button>
            </div>
            </div>
            </div>
            <div className={`${active ? 'opacity-100 bg-black/30' : 'opacity-0 pointer-events-none'} h-full top-0 right-0 absolute w-full hover:cursor-pointer transition-all ease-in-out delay-300 duration-300  z-30 text-white flex flex-row items-center justify-end pr-8`} onClick={clickActive}>
                <Image
                src={leftarrow}
                style={{ width: '60px', height:'60px', objectFit:'cover'}} // optional
                />
            </div>
        </div>
        <div className='h-full py-8 px-8 md:pl-16 md:pr-28 md w-full md:w-1/2 relative overflow-y-hidden overflow-x-auto'>
        <div className={`${active ? 'md:animate-changeBackground animate-changeBackground-resize' : 'md:animate-changeBackground-not-active animate-changeBackground-not-active-resize'} animated-background border-2 border-white rounded-sm h-70-screen relative`}>
                <div className={`${active ? 'opacity-100' : 'opacity-0 absolute z-10'} text-white flex flex-row align-bottom w-full h-full absolute z-10 transition-all ease-in-out delay-300 duration-500`}>
                <div className='w-full h-full p-8'>
                <div className="flex w-full h-full relative flex-col ">
                  <div className={`${active1 ? 'opacity-100 translate-item w-4/5 h-4/5 absolute z-10  ' : 'absolute z-0 '} ${active2 || active3 || active4 ? 'w-0' : ' '} background-item p-8 -m-2 w-1/2 lg:h-1/2 flex flex-col bg-blue-200 border-2 border-white  transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer overflow-y-hidden`}  onClick={clickActive1}>
                    <div className={`${active1 ? '' : ''}  h-full w-full transition-all ease-in-out delay-300 duration-500`}>                  
                      <div className={`${active1 ? 'h-1/4 ' : 'h-full '} w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 text-2xl text-center`}>
                        <p className='border-y-2 py-1 border-white'>ACTUACIONES & EVENTOS</p>
                      </div>
                      <div className={`${active1 ? 'h-3/4 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-xl `}>
                      La Tuna de Telecomunicaciones de Valencia difunde música tradicional española y sudamericana con pasodoble, bolero, vals, mariachi, éxitos populares y clásicas canciones de la tuna. Contrátalos para eventos y sorprende a tus invitados con su toque singular. ¡Contáctalos y aporta cultura, folclore y originalidad a tu evento!
                      </div>
                    </div>
                  </div> 
                  <div className={`${active2 ? 'opacity-100 translate-item w-4/5 h-4/5 absolute z-10 left-0' : 'absolute z-0 left-1/2'} ${active1 || active3 || active4 ? 'w-0' : ' '} background-item p-8 -mt-2 ml-2 w-1/2 h-1/2 flex flex-col bg-green-200 border-2 border-white  transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer overflow-y-hidden`}  onClick={clickActive2}>
                    <div className={`${active2 ? '' : ''}  h-full w-full transition-all ease-in-out delay-300 duration-500`}>   
                      <div className={`${active2 ? 'h-1/4 ' : 'h-full '} w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 text-2xl text-center `}>
                        <p className='border-y-2 py-1 border-white'>CELEBRACIONES & FIESTAS PRIVADAS</p>
                      </div>
                      <div className={`${active2 ? 'h-3/4 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-xl`}>
                      ¡Dale un toque original y divertido a tu evento! Contrata a la Tuna para despedidas, aniversarios, cumpleaños, encuentros familiares y más. ¡Triunfarás y crearás recuerdos inolvidables! Contáctanos para acudir a tu celebración de amigos, familia o trabajo. ¡Ponte en contacto con nosotros y marca la diferencia! 
                      </div>
                    </div>
                  </div>
                  <div className={`${active3 ? 'opacity-100 translate-item w-4/5 h-4/5 absolute z-10 top-0 -mt-3' : 'absolute z-0 top-1/2 mt-2'} ${active1 || active2 || active4 ? 'w-0' : ' '} background-item p-8 -ml-2 w-1/2 h-1/2 flex flex-col bg-yellow-200 border-2 border-white  transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer`}  onClick={clickActive3}>
                    <div className={`${active3 ? '' : ''}  h-full w-full transition-all ease-in-out delay-300 duration-500`}>
                      <div className={`${active3 ? 'h-1/4 ' : 'h-full '} w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 text-2xl text-center`}>   
                        <p className='border-y-2 py-1 border-white'>BODAS & SERENATAS</p>
                      </div>
                    
                      <div className={`${active3 ? 'h-3/4 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-xl `}>
                      Celebra tu boda con el encanto de las Tuna, una experiencia musical única. Desde el día que le declaras tu amor, la serenata del día anterior a la boda, continuando con la emotiva salida de la iglesia, hasta el cóctel y el banquete, ¡contrata a la Tuna para Serenatas  y Bodas y marca la diferencia en tu día especial!
                      </div>
                    </div>
                  </div>
                  <div className={`${active4 ? 'opacity-100 translate-item w-4/5 h-4/5 absolute z-10 left-0 top-0 -mt-3' : 'absolute z-0 left-1/2 top-1/2 mt-2'} ${active1 || active2 || active3 ? 'w-0' : ' '} background-item ml-2 w-1/2 h-1/2 flex flex-col bg-pink-200 p-8 border-2 border-white w- transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer`}  onClick={clickActive4}>
                    <div className={`${active4 ? '' : ''}  h-full w-full transition-all ease-in-out delay-300 duration-500`}>
                    <div className={`${active4 ? 'h-1/4 ' : 'h-full '} w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 text-2xl text-center`}>   
                        <p className='border-y-2 py-1 border-white'>INICIATIVAS SOLIDARIAS
                        </p>
                      </div>
                      <div className={`${active4 ? 'h-3/4 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-xl `}>
                          La Tuna de Ingenieros de Telecomunicaciones participa en actividades solidarias para ayudar a los más vulnerables, brindando ocio y diversión en residencias de ancianos, colegios de discapacitados y centros de acogida. Si necesitas una Tuna para un acto solidario, ¡CONSÚLTANOS y hagamos sonreír a quienes más lo necesitan!
                      </div>
                      </div> 
                  </div>
                </div>
                </div>
                </div>
                <div className={`${active ? 'opacity-0' : 'opacity-100 relative'} flex flex-row align-bottom w-full h-full  transition-all ease-in-out delay-300 duration-500`}>
                <div className='w-1/3 flex items-end justify-center mx-auto'><div className='noteanimation_note note1-img h-notes1 h-1/6'></div></div>
                <div className='w-1/3 flex items-end justify-center mx-auto'><div className='noteanimation_note note2-img h-notes2'></div></div>
                <div className='w-1/3 flex items-end justify-center mx-auto'><div className='noteanimation_note note3-img h-notes3'></div></div>
                </div>
            </div>
        </div>
    </div>
  )
}
