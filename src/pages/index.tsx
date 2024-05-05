import React from "react";
import { useRef, useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Quesomos from "./components/quesomos";
import Valores from "./components/valores";
import Celebraciones from "./components/celebraciones";
import Contacto from "./components/contacto";
import Apuntate from "./components/apuntate";
import Head from "next/head";

export default function Home() {
  const [show, setShow] = useState(true);
  const formRef = useRef<HTMLDivElement | null>();
  const [message, setMessage] = useState("");

  const scrollToForm = () => {
    setMessage("");
    console.log(formRef.current);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Tuna Teleco | ¿Quienes somos? | Contacta con nosotros</title>
        <meta
          name="description"
          content="Web de La Tuna de Ingenieros de Telecomunicación de Valencia, donde podrás saber más sobre que tipos de eventos realizamos y quienes somos"
        />
        <link rel="icon" href="/static/logo.ico" />
      </Head>
      <Header showNav={show} scrollToForm={scrollToForm} />
      <Main />
      <Quesomos />
      <Valores />
      <Celebraciones />
      <Contacto
        message={message}
        setMessage={setMessage}
        ref={formRef}
        scrollToForm={scrollToForm}
      />
      <Apuntate setMessage={setMessage} scrollToForm={scrollToForm} />
    </div>
  );
}
