import { useState, useEffect } from 'react';
import React from 'react';
import { canciones } from '../../src/canciones';
import HeaderNotMain from './components/header/headerNotMain';
import Link from 'next/link';
import Footer from './components/footer/footer';
import { useRouter } from 'next/router';
import pandereta from '../img/pandereta2.svg'
import Image from 'next/image';

function Cancionero() {
  const [letraInicial, setLetraInicial] = useState('');
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [currentLetter, setCurrentLetter] = useState('');
  const [name, setName] = useState('');
  let letter='A-Z'
  let abecedario = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  let lettersToRemove = ['W', 'K', 'X'];
  abecedario = abecedario.filter((letter) => !lettersToRemove.includes(letter));


  const router = useRouter();


  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };



  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    letter = url.searchParams.get('letter');
    setSeleccionInicial(letter);
  }, []);

  const setSeleccion = (letra) => {
    setLetraInicial(letra);
    setSeleccionadas(canciones.filter((cancion) => cancion[0].startsWith(letra)));
    router.push("/cancionero" + "?" + createQueryString("letter", letra));
  };
  const setSeleccionTodas = () => {
    setLetraInicial('A-Z');
    setSeleccionadas(canciones);
    router.push("/cancionero" + "?" + createQueryString("letter", 'A-Z'));
  };
  const setSeleccionInicial = (letter) => {
    console.log(letter);
    if(letter === null){
      console.log(letter);
    setLetraInicial('A-Z');
    setSeleccionadas(canciones);
  }else{
      setLetraInicial(letter);
      console.log(letter);
      if(letter === 'A-Z'){
        setSeleccionadas(canciones);
      }else{
        setSeleccionadas(canciones.filter((cancion) => cancion[0].startsWith(letter)));
      }
    }
  };
  




  const blackBackgroundClass = name === letraInicial ? 'bg-black/10' : '';
  const groupedCanciones = canciones.reduce((acc, cancion) => {
    const firstLetter = cancion[0].charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(cancion);
    return acc;
  }, {});

  return (
    <div className="form-bg-fixed  w-full flex flex-col gap-8 shadow-inset-top-lg md:shadow-inset-top-md h-cancionero">
      <HeaderNotMain type={'cancionero'} />
      <div className='w-5/6 mx-auto h-1/4 mt-4'>   
          <div className=' border md:border-2 h-56 md:h-40 historia-nav-bg relative'>
            <div className='w-full h-full lg:pl-4 md:px-8 text-white text-center absolute bottom-0 left-0 grid place-content-center py-8'>
                <h1 className='text-xl md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-y-2 border-x-0 font-beautique'>CANCIONERO</h1>
            </div>
          </div>
        </div>
      <div className="w-full h-auto ">
        <ul className="w-5/6 flex flex-wrap lg:flex-row justify-center items-center  px-0 lg:px-8 mx-auto">
          <li
            className={`text-white text-base border md:border-2 px-2 mr-1 md:mr-8 py-1 shadow-gray-900/70  hover:bg-black/40  ${
              letraInicial === 'A-Z' ? 'bg-black/40 shadow-gray-900/70 shadow-inset-letters hover:cursor-default' : 'bg-white/5 hover:shadow-inset-letters hover:bg-black/40 hover:cursor-pointer   drop-shadow-lg shadow-sm  hover:shadow-none transition-all duration-100'
            }`}
            onClick={() => setSeleccionTodas()}
          >
            Todas
          </li>
          {abecedario.map((letra, index) => (
            <li
              key={index}
              className={`text-white text-base xl:text-lg border md:border-2 m-1 px-2 py-1 shadow-gray-900/70   ${
                letra === letraInicial ? 'bg-black/40 shadow-gray-900/70 shadow-inset-letters hover:cursor-default' : 'bg-white/5 hover:shadow-inset-letters hover:bg-black/40 hover:cursor-pointer   drop-shadow-lg shadow-sm  hover:shadow-none transition-all duration-100'
              } `}
              onClick={() => setSeleccion(letra)}
            >
              {letra}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center h-auto">
        <div className="w-5/6 lg:w-4/6 flex flex-row px-0 lg:px-8 gap-2 h-auto">
          <label className="text-white text-lg my-auto">🔎</label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            className="text-lg text-gray-100 bg-black/50 h-10 border md:border-2 mt-1 mb-1 rounded-sm px-4 w-full border-white shadow-inset"
            placeholder="Buscar cancion..."
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex justify-center h-auto flex-row px-8">
        <div className=' hidden w-1/6 max-h-max md:flex justify-center items-end text-white mt-20'>< div className='drop-shadow-xl'><Image
                  src={pandereta}
                  width={100}
                  height={100}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem', transform: 'scaleX(-1)',filter: 'brightness(0) invert(1)'}}
            /></div>
        </div>
        <ul className="w-full  lg:w-4/6 flex flex-col p-4 md:p-8 md:py-6  gap-2 h-auto shadow-lg  bg-white/10 rounded-sm border md:border-2">
        <li className="text-3xl border-white border-b-2 pb-1 mb-4">{letraInicial}</li>
          {letraInicial !== 'A-Z' ? seleccionadas.map((cancion, index) => {
            if (cancion[0].length !== 1) {
              return(<Link href={`/cancionero/[id]`} as={`/cancionero/${cancion[1]}`} className='w-fit'><li key={index} className="h-8 text-md hover:text-white hover:scale-110 transition-all duration-100 py-1 px-1 hover:ml-3 hover:border-b-2">
              {cancion[0]}
            </li></Link>)}
        }):null}
          {letraInicial === 'A-Z'
            ? canciones.map((cancion, index) => {
                if (cancion[0].length == 1) {
                  return(<li className="text-2xl border-white border-b-2 pb-1 mb-4 w-min px-2 text-white">{cancion}</li>)   
                } else {
                  return (
                    <Link href={`/cancionero/[id]`} as={`/cancionero/${cancion[0]}`} className='w-fit'><li key={index} className="h-8 text-md hover:text-white hover:scale-110 transition-all duration-100 py-1 px-1 hover:ml-3 hover:border-b-2">
                    {cancion[0]}
                  </li></Link>
                )}
              })
            : null}
        </ul>
        <div className='hidden w-1/6 max-h-max md:flex justify-center items-end text-white mt-20'>< div className='drop-shadow-xl'><Image
                  src={pandereta}
                  width={100}
                  height={100}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem',filter: 'brightness(0) invert(1)'}}
            /></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cancionero;
