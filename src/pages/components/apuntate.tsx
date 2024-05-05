import React from "react";
import Image from "next/image";
import Carousel from "./carousel/carousel";
import Footer from "./footer/footer";
interface propsApuntate {
  setMessage: (string) => void;
  scrollToForm: () => void;
}
function Apuntate({ setMessage, scrollToForm }: propsApuntate) {
  async function mostrarMensajeProgresivo(texto: string, tiempo: number) {
    const letras = texto.split("");
    const intervalo = tiempo / letras.length;
    for (let letra of letras) {
      await new Promise((resolve) => setTimeout(resolve, intervalo));
      setMessage((prevMessage) => prevMessage + letra);
    }
  }

  const handleApuntate = () => {
    const texto =
      "Hola, me gustaría saber que hace falta para poder entrar en la Tuna";
    const tiempoDeEjecucion = 1000;
    mostrarMensajeProgresivo(texto, tiempoDeEjecucion);
    scrollToForm();
  };
  return (
    <div className=" h-quienes md:h-auto w-full  border-t-2 border-white ">
      <div className="h-min md:h-full w-full flex md:flex-row flex-col gap-4 md:gap-0 ">
        <div className="hidden md:block h-auto w-full  md:w-1/2 md:h-apuntate">
          <Carousel />
        </div>
        <div className="h-min md:h-full w-full md:w-1/2 flex flex-col md:justify-between gap-8 form-bg py-4">
          <div className="text-2xl md:text-3xl text-white grid place-content-start w-full mt-4 md:m-0 md:pt-8 pt-4 px-8  md:px-16">
            <p className="text-center border-l-2 md:border-b-0 py-1 px-2 ">
              ÚNETE A LA TUNA
            </p>
          </div>
          <div className="md:h-2/6 h-min grid place-content-center px-8  md:px-16 gap-4">
            <p className=" text-black text-lg">
              Si tienes pasión por la música, ansías explorar nuevos horizontes,
              disfrutas de las aventuras y buscas la oportunidad de conocer
              personas increíbles, entonces este es el lugar para ti.
            </p>
            <p className=" text-black text-lg">
              Forma parte de nuestra Tuna y descubre las emocionantes
              experiencias que te aguardan. ¡No lo dudes!
            </p>
          </div>
          <div className="md:hidden md:h-full w-full  md:w-1/2 h-apuntate px-8 md:pt-8">
            <Carousel />
          </div>
          <div className="md:h-1/6 h-min w-full grid place-content-center md:place-content-start p-8 pt-0  md:px-16 md:pb-8">
            <button
              className=" text-md text-center py-2 px-6 border-2 border-white shadow-sm shadow-black/20 hover:bg-black/10 bg-white/5  hover:shadow-none transition-all duration-300 hover:cursor-pointer text-white rounded-sm "
              onClick={handleApuntate}
            >
              <h2>APÚNTATE</h2>
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Apuntate;
