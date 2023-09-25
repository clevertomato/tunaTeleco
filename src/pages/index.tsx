import React from 'react'
import { useState} from 'react';
import Header from './components/header/header'
import Main from './components/main/main';
import Quesomos from './components/quesomos';
import Valores from './components/valores';
import Celebraciones from './components/celebraciones';
import Contacto2 from './components/contacto2';

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <div className='h-screen'>
      <Header showNav={show}/>
      <Main/>
      <Quesomos/>
      <Valores/>
      <Celebraciones/>
      <Contacto2/>
    </div>
  )
}
