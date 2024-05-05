import React from "react";
import Image from "next/image";
import logoupv from "../../img/UPV.gif";
import guitarra from "../../img/guitarra.png";
import charla from "../../img/charla.png";
import playa from "../../img/playa.png";
import retos from "../../img/retos.png";

export default function Valores() {
  return (
    <div className="h-auto w-full backgroundfixed flex flex-col border-y-2 border-white gap-4 py-8 shadow-inset-y">
      <div className="text-white text-xl md:text-2xl md2:text-3xl lg:text-3xl xl:text-4xl text-center py-4 grid place-content-center relative">
        <h2 className="border-y-2 p-2 border-white valores-text">
          Nuestros valores
        </h2>
      </div>
      <div className="flex flex-wrap text-white h-3/5 relative justify-between">
        <div className="w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4 drop-shadow-lg">
          <Image
            src={charla}
            alt="logoupv"
            height={100}
            style={{
              width: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              filter: "brightness(0) invert(1)",
            }}
          ></Image>
          <div className="w-full h-full grid place-content-center">
            <h3 className="text-center text-xl lg:text-xl 3xl:text-3xl  w-fit ">
              Mantener la Tradición
            </h3>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4 drop-shadow-lg">
          <Image
            src={guitarra}
            alt="logoupv"
            height={100}
            style={{
              width: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              filter: "brightness(0) invert(1)",
            }}
          ></Image>
          <div className="w-full h-full grid place-content-center">
            <h3 className="text-center text-xl lg:text-xl 3xl:text-3xl  w-fit ">
              Fomentar el Folclore
            </h3>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4 drop-shadow-lg">
          <Image
            src={retos}
            alt="logoupv"
            height={100}
            style={{
              width: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              filter: "brightness(0) invert(1)",
            }}
          ></Image>
          <div className="w-full h-full grid place-content-center">
            <h3 className="text-center text-xl lg:text-xl 3xl:text-3xl  w-fit ">
              Vivir nuevas experiencias
            </h3>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 h-auto flex flex-col p-8 gap-4 drop-shadow-lg">
          <Image
            src={playa}
            alt="logoupv"
            height={100}
            style={{
              width: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              filter: "brightness(0) invert(1)",
            }}
          ></Image>
          <div className="w-full h-full grid place-content-center">
            <h3 className="text-center text-xl lg:text-xl 3xl:text-3xl  w-fit  ">
              Disfrutar de la Vida
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
