import React from 'react'
import { useState, useRef } from 'react';
import Slide from 'react-reveal/Fade';
import Image from 'next/image';
import leftarrow from '../../img/left-arrow.svg'

export default function Celebraciones() {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const boxServicios = useRef(null)


    const clickActive = () => {
        setActive(!active);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
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
    <div className={`${active ? 'md:ml--100 md:ml-0' : ''} text-black  h-quienes w-auto celebraciones-bg flex flex-col md:flex-row overflow-hidden transition-all ease-in-out delay-300 duration-500 border-b-2 border-white `}>
      <div className='h-full w-full md:w-4/6 px-8 md3:pl-28 md:pr-0 md:py-8'>
        <div className='h-full w-full  sm:text-sm md:text-sm md3:text-base xl:text-xl 3xl:text-3xl flex flex-col relative md:border-left-bottom-left2 3xl:border-left-bottom-left'>
            <div className={`${active ? 'md:ml--100 md:m-0' : ''} h-full w-full pb-0 md:pb-4  lg:absolute z-10 flex flex-col justify-between transition-all ease-in-out delay-300 duration-500 `}>
              <Slide left duration={1500}>
                <div className='grid place-content-center py-8 md:py-0 pb-4'>
                    <p className='text-white text-md md2:2xl md:text-lg lg:text-2xl xl:text-3xl 3xl:text-4xl cajatexto overflow-hidden text-center border-2 border-x-0 border-my- grid place-content-center py-2'>¿Quieres hacer que tu evento o celebración sea inolvidable?</p>
                </div>
              </Slide>
              <Slide left duration={1000}>
                <p className='text-center px-8 hidden md2:grid place-content-center letter-spacing-011'>Ofrecemos nuestros servicios para bodas, comuniones, cumpleaños, jubilaciones y cualquier ocasión especial que desees destacar. Nuestro objetivo es hacer de cada momento una auténtica fiesta para que todos disfruten al máximo. </p>
              </Slide>
              <Slide left duration={1000}>
                <p className='md2:hidden pb-4 grid place-content-center letter-spacing-011 text-center pt-4'>Ofrecemos nuestros servicios para bodas, comuniones, cumpleaños, jubilaciones y cualquier ocasión especial que desees destacar. Nuestro objetivo es hacer de cada momento una auténtica fiesta para que todos disfruten al máximo.</p>
              </Slide>
              <Slide left duration={1000}>
                <p className='text-center px-8 hidden md2:grid place-content-center letter-spacing-011 mb-8'>Con un repertorio amplio y variado, llevamos la alegría y el buen humor a cada lugar que visitamos. Nos esforzamos al máximo para asegurar que tu evento sea un éxito y, lo más importante, lo disfrutamos enormemente en el proceso.</p>
              </Slide>
              <Slide left duration={1000}>
                <p className='md2:hidden grid place-content-center letter-spacing-011 text-center pb-8'>Con un repertorio amplio y variado, llevamos la alegría y el buen humor a cada lugar que visitamos. Nos esforzamos al máximo para asegurar que tu evento sea un éxito y, lo más importante, lo disfrutamos enormemente en el proceso.</p>
              </Slide>
              <div className='flex items-center justify-between w-full pb-4'>
                <button className='text-center py-2 px-6 border-2 border-white hover:border-my-orange hover:shadow-md transition-all duration-300 hover:cursor-pointer text-white rounded-sm mx-auto' onClick={clickActive}>
                      Información sobre Eventos
                </button>
              </div>
            </div>
            
            <div className={`${active ? 'opacity-0 md:opacity-100 md:bg-black/30' : 'md:opacity-0 pointer-events-none'} h-full top-0 right-0 absolute w-full hover:cursor-pointer transition-all ease-in-out delay-300 duration-300  z-30 text-white hidden md:flex flex-row items-center justify-end pr-8`} onClick={clickActive}>
                <Image
                src={leftarrow}
                style={{ width: '60px', height:'60px', objectFit:'cover'}}
                alt="coverbg"
                />
            </div>
        </div>
        </div>
        <div ref={boxServicios} className='h-full py-8 px-8 md:pl-16 md3:pr-28 md w-full md:w-1/2 relative overflow-y-hidden overflow-x-hidden'>
        <div className={`${active ? 'animate-changeBackground-resize transition-display-out' : ' transition-display animate-changeBackground-not-active-resize border-2 border-white'} animated-background rounded-sm h-70-screen relative`}>
                <div className={`${active ? 'opacity-100' : 'opacity-0 absolute z-10'} text-white flex md:flex-row flex-col align-bottom w-full h-full absolute z-10 transition-all ease-in-out delay-300 duration-500`}>
                <div className='w-full h-full'>
                <div className="flex w-full h-full relative flex-col md:gap-0">
                  <div className={` ${active ? 'transition-display' : 'transition-display-out'}  ${active1 ? 'opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 h-full' : 'md:absolute md:z-0 md:w-1/2 w-full h-1/4 md:h-1/2'} ${active2 || active3 || active4 ? 'md:block hidden ' : ' '} relative mb-2 md:mb-0  md:p-2 md:-m-2  flex flex-col   transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer overflow-y-hidden`}  onClick={clickActive1}>
                    <div className={`${active1 ? '' : ''} background-item   h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white`}>                  
                      <div className={`${active1 ? 'h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl' : 'h-full '} w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 md:text-2xl text-lg text-center`}>
                        <p className={`${active1 ? 'hidden' : 'block '} md:border-y-2 md:py-1 border-white`}>ACTUACIONES <br className='md:hidden'/> & <br className='md:hidden'/> EVENTOS</p>
                        <p className={`${active1 ? 'block' : 'hidden'} md:border-y-2 md:py-1 border-white px-4 md:mt-16`}>ACTUACIONES & EVENTOS</p>                      
                      </div>
                      <div className={`${active1 ? 'h-3/5 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-base md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}>
                      La Tuna de Telecomunicaciones de Valencia difunde música tradicional española y sudamericana con pasodoble, bolero, vals, mariachi, éxitos populares y clásicas canciones de la tuna. Contrátalos para eventos y sorprende a tus invitados con su toque singular. ¡Contáctalos y aporta cultura, folclore y originalidad a tu evento!
                      </div>
                      <div className={`${active1 ? 'opacity-100' : 'opacity-0'} grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}>
                        <div className='border-2 border-white py-2 px-4 '>
                          <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{ width: '30px', height:'30px', objectFit:'cover', border: '2px', borderColor:'white'}} // optional
                          />
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className={`${active ? 'transition-display' : 'transition-display-out'}  ${active2 ? 'opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 md:left-0 h-full' : 'md:absolute md:z-0 md:left-1/2 md:w-1/2 w-full md:h-1/2 h-1/4'} ${active1 || active3 || active4 ? 'md:block hidden ' : ' '} relative mb-2 md:mb-0 md:p-2 md:-mt-2 md:ml-2  flex flex-col  transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer overflow-y-hidden`}  onClick={clickActive2}>
                    <div className={`${active2 ? '' : ''} background-item h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white`}>   
                      <div className={`${active2 ? 'h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl' : 'h-full'} w-full text-white grid place-content-center transition-all ease-in-out delay-300 duration-500 md:text-2xl text-lg text-center `}>
                        <p className={`${active2 ? 'hidden' : 'block '} md:border-y-2 md:py-1 border-white`}>CELEBRACIONES<br className='md:hidden'/> & <br className='md:hidden'/>FIESTAS PRIVADAS</p>
                        <p className={`${active2 ? 'block' : 'hidden'} md:border-y-2 md:py-1 border-white px-4 md:mt-16`}>CELEBRACIONES & FIESTAS PRIVADAS</p>
                      </div>
                      <div className={`${active2 ? 'h-3/5 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-base md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}>
                      ¡Dale un toque original y divertido a tu evento! Contrata a la Tuna para despedidas, aniversarios, cumpleaños, encuentros familiares y más. ¡Triunfarás y crearás recuerdos inolvidables! Contáctanos para acudir a tu celebración de amigos, familia o trabajo. ¡Ponte en contacto con nosotros y marca la diferencia! 
                      </div>
                      <div className={`${active2 ? 'opacity-100' : 'opacity-0'} grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}>
                        <div className='border-2 border-white py-2 px-4 '>
                          <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{ width: '30px', height:'30px', objectFit:'cover', border: '2px', borderColor:'white'}} // optional
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${active ? 'transition-display' : 'transition-display-out'}  ${active3 ? 'opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 md:top-0 md:-mt-3 h-full' : 'md:absolute md:z-0 md:top-1/2 md:mt-2 md:w-1/2 w-full md:h-1/2 h-1/4'} ${active1 || active2 || active4 ? 'md:block hidden ' : ' '} relative mb-2 md:mb-0 md:p-2 md:-ml-2 flex flex-col transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer`}  onClick={clickActive3}>
                    <div className={`${active3 ? '' : ''} background-item h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white `}>
                      <div className={`${active3 ? 'h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl ' : 'h-full '} w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 md:text-2xl text-lg text-center`}>   
                        <p className={`${active3 ? 'hidden' : 'block '} md:border-y-2 md:py-1 border-white`}>BODAS<br className='md:hidden'/> & <br className='md:hidden'/>SERENETAS</p>
                        <p className={`${active3 ? 'block' : 'hidden'} md:border-y-2 md:py-1 border-white px-4 md:mt-16`}>BODAS & SERENATAS</p>
                      </div>
                      <div className={`${active3 ? 'h-3/5 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-base md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}>
                      Celebra tu boda con el encanto de las Tuna, una experiencia musical única. Desde el día que le declaras tu amor, la serenata del día anterior a la boda, continuando con la emotiva salida de la iglesia, hasta el cóctel y el banquete, ¡contrata a la Tuna para Serenatas  y Bodas y marca la diferencia en tu día especial!
                      </div>
                      <div className={`${active3 ? 'opacity-100' : 'opacity-0'} grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}>
                        <div className='border-2 border-white py-2 px-4 '>
                          <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{ width: '30px', height:'30px', objectFit:'cover', border: '2px', borderColor:'white'}} // optional
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={` ${active ? 'transition-display' : 'transition-display-out'}  ${active4 ? 'opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 md:left-0 md:top-0 md:-mt-3 h-full' : 'md:absolute md:z-0 md:left-1/2 md:top-1/2 md:mt-2 md:w-1/2 w-full md:h-1/2 h-1/4'} ${active1 || active2 || active3 ? 'md:block hidden ' : ' '} relative md:ml-2  flex flex-col md:p-2  transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer`}  onClick={clickActive4}>
                    <div className={`${active4 ? '' : ''} background-item h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white`}>
                    <div className={`${active4 ? 'h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl' : 'h-full  '} w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 md:text-2xl text-center`}>   
                        <p className={`${active4 ? 'hidden' : 'block'} md:border-y-2 md:py-1 border-white px-4 `}>INICIATIVAS SOLIDARIAS</p>
                        <p className={`${active4 ? 'block' : 'hidden'} md:border-y-2 md:py-1 border-white px-4  md:mt-16`}>INICIATIVAS SOLIDARIAS</p>
                      </div>
                      <div className={`${active4 ? 'h-3/5 animate-opacityText' : 'h-px  animate-opacityText-not-active'} w-full h-1/2 grid place-content-center text-white text-center text-base md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}>
                          La Tuna de Ingenieros de Telecomunicaciones participa en actividades solidarias para ayudar a los más vulnerables, brindando ocio y diversión en residencias de ancianos, colegios de discapacitados y centros de acogida. Si necesitas una Tuna para un acto solidario, ¡CONSÚLTANOS y hagamos sonreír a quienes más lo necesitan!
                      </div>                      
                      <div className={`${active4 ? 'opacity-100' : 'opacity-0'} grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}>
                        <div className='border-2 border-white py-2 px-4 '>
                          <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{ width: '30px', height:'30px', objectFit:'cover', border: '2px', borderColor:'white'}} // optional
                          />
                        </div>
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
