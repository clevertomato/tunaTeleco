import React from 'react'
import { useRef, useState} from 'react';
import Header from './components/header/header'
import Main from './components/main/main';
import Quesomos from './components/quesomos';
import Valores from './components/valores';
import Celebraciones from './components/celebraciones';
import Contacto from './components/contacto';
import Apuntate from './components/apuntate';
import Footer from './components/footer/footer';

export default function Home() {
  const [show, setShow] = useState(true);
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className='h-screen'>
      <Header showNav={show} scrollToForm={scrollToForm}/>
      <Main/>
      <Quesomos/>
      <Valores/>
      <Celebraciones/>
      <Contacto ref={formRef} />
      <Apuntate/>
    </div>
  )
}
