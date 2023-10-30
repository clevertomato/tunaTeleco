import React, {useState} from 'react'
import HeaderNotMain from './components/header/headerNotMain';

import HistoriaPart from './components/historia';
import Costumbres from './components/costumbres';
import Indumentaria from './components/indumentaria';
import Footer from './components/footer/footer';
import Instrumentos from './components/instrumentos';


function Historia() {
    const [costumbres, setCostumbres] = useState(false);
    const [historia, setHistoria] = useState(true);
    const [indumentaria, setIndumentaria] = useState(false);
    const [instrumentos, setInstrumentos] = useState(false);

    const clickActiveHistoria = () => {
      setHistoria(true);
      setCostumbres(false);
      setIndumentaria(false);
      setInstrumentos(false);
    };

    const clickActiveCostumbres = () => {
      setCostumbres(true);
      setHistoria(false);
      setIndumentaria(false);
      setInstrumentos(false);
    };
    const clickActiveIndumentaria = () => {
      setIndumentaria(true);
      setCostumbres(false);
      setHistoria(false);
      setInstrumentos(false);
    };
    const clickActiveInstumentos = () => {
      setInstrumentos(true);
      setCostumbres(false);
      setHistoria(false);
      setIndumentaria(false);
    };
    

  return (
    <>
    <div className='form-bg-fixed  w-full flex flex-col gap-8 shadow-inset-top-lg shadow-inset-top-md  pb-4'>
        <HeaderNotMain type={'historia'} />
        <div className='w-5/6 mx-auto h-1/4 mt-4'>   
          <div className=' border md:border-2 h-56 md:h-40 historia-nav-bg relative'>
            <div className='w-full h-full lg:pl-4 md:px-8 text-white text-center absolute bottom-0 left-0 grid place-content-center py-8'>
                <div className='text-xl md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-2 border-x-0 font-beautique'>Historia de</div>
                <div className='text-xl md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-b-2'>La tuna</div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap md:flex-row justify-between  w-5/6 mx-auto text-white text-base lg:text-2xl'>
          <button className={`${historia ? 'cursor-auto bg-black/30' : 'bg-white/10 shadow-gray-900/70 hover:cursor-pointer hover:bg-black/10'}   py-1 border md:border-2 drop-shadow-lg shadow-sm   hover:shadow-none mx-auto my-2 w-2/5 md:w-auto md:px-2  transition-all duration-100`} onClick={clickActiveHistoria}> 
            HISTORIA
          </button>
          <button className={`${costumbres ? 'cursor-auto bg-black/40 shadow-inset-letters' : 'bg-white/10 shadow-gray-900/70 hover:cursor-pointer hover:bg-black/40 hover:shadow-inset-letters'}   py-1 border md:border-2 drop-shadow-lg shadow-sm   hover:shadow-none mx-auto my-2 w-2/5 md:w-auto md:px-2  transition-all duration-100`} onClick={clickActiveCostumbres}> 
            COSTUMBRES
          </button>
          <button className={`${indumentaria ? 'cursor-auto bg-black/40 shadow-inset-letters' : 'bg-white/10 shadow-gray-900/70 hover:cursor-pointer hover:bg-black/40 hover:shadow-inset-letters'}   py-1 border md:border-2 drop-shadow-lg shadow-sm   hover:shadow-none  mx-auto my-2 w-2/5 md:w-auto md:px-2 duration-100`} onClick={clickActiveIndumentaria}>  
            INDUMENTARIA
          </button>
          <button className={`${instrumentos ? 'cursor-auto bg-black/40 shadow-inset-letters' : 'bg-white/10 shadow-gray-900/70 hover:cursor-pointer hover:bg-black/40 hover:shadow-inset-letters'}   py-1 border md:border-2 drop-shadow-lg shadow-sm   hover:shadow-none mx-auto my-2 w-2/5 md:w-auto md:px-2 duration-100`} onClick={clickActiveInstumentos}> 
            INSTRUMENTOS
          </button>
        </div>
        { historia ? <HistoriaPart active={historia}/> :
          costumbres ? <Costumbres active={costumbres}/> :
          indumentaria ? <Indumentaria active={indumentaria}/> :
          instrumentos ? <Instrumentos active={instrumentos}/> :
          null
        }
    </div>

<Footer/>
</>
  )
}

export default Historia