import React from "react";
import Slide from "react-reveal/Fade";
import Image from "next/image";
import satellite from "../../img/satellite.png";

export default function Quesomos() {
  const satStyleMob = {
    width: "100%",
    height: "100%",
  };
  const satStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="h-quienes w-auto quienes-bg flex flex-col md2:flex-row overflow-x-hidden border-t-2 border-white overflow-y-hidden py-4">
      <div className="h-max md:h-auto py-8 px-8 md3:pl-28 md:pr-16 md w-full lg:w-1/2 relative">
        <div className="quienes-img shadow-sm border-2 border-white h-70-screen rounded-sm"></div>
        <div
          className="block pt-16 absolute z-0 right-0 top-0  overflow-y-hidden overflow-x-hidden"
          style={satStyleMob}
        >
          <div className="satelliteanimation">
            <Image
              src={satellite}
              alt="satellite"
              style={{
                width: "20%",
                height: "20%",
                objectFit: "contain",
                filter: "drop-shadow(4px 4px 4px #222)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="hidden h-70-screen p-8 w-full lg:w-4/6 sm:text-sm md:text-sm md3:text-sm lg:text-base 2xl:text-lg 3xl:text-2xl md2:flex flex-col relative overscroll-y-none">
        <div className=" h-full w-full py-0 mt-0 px-8 xl:pr-28 md:pl-0 md:py-8 lg:absolute z-10 flex flex-col justify-center gap-12">
          <Slide right duration={1000}>
            <div className="h-full md2:h-auto grid place-content-center gap-4 md:gap-8 sm:w-full md:w-full pb-4 px-2 md2:px-8 md:p-8 text-quienes">
              <h2 className=" text-white text-md md2:2xl md:text-lg lg:text-2xl 2xl:text-2xl 3xl:text-3xl cajatextoNoIndent !w-9/12 overflow-hidden md2:mt-4 uppercase border-l-2 pl-4">
                TE ARREGLAMOS EL WIFI Y TE TOCAMOS UNA CANCIÓN
              </h2>
              <p className=" grid place-content-center letter-spacing-011">
                La Tuna Universitaria de Ingenieros de Telecomunicación de
                Valencia se formó en el 1992. Desde el principio estos tunos
                ingenieros alegran a los valencianos entonando melodías
                tradicionales y contemporáneas, acompañados de guitarras,
                bandurrias, laúdes y otros instrumentos característicos de la
                tuna.
              </p>
            </div>
          </Slide>
        </div>
      </div>
      <div className="md2:hidden grid place-content-start mt-4 pt-2 pb-8 md:py-0 px-12">
        <h2 className="text-white text-xl md2:2xl md:text-lg lg:text-2xl xl:text-3xl 3xl:text-4xl cajatextoNoIndent overflow-hidden border-l-2 pl-4 uppercase">
          TE ARREGLAMOS EL WIFI Y TE TOCAMOS UNA CANCIÓN
        </h2>
      </div>
      <p className="md2:hidden px-12 pb-4 grid place-content-center letter-spacing-011">
        La Tuna Universitaria de Ingenieros de Telecomunicación de Valencia se
        formó en el 1992. Desde el principio estos tunos ingenieros alegran a
        los valencianos entonando melodías tradicionales y contemporáneas,
        acompañados de guitarras, bandurrias, laúdes y otros instrumentos
        característicos de la tuna.
      </p>
      {/*<p className="md2:hidden px-12 pb-8 grid place-content-center letter-spacing-011">
        Hemos tocado en infinidad de eventos: certámenes de música, festivales
        culturales, actos falleros, conciertos, fiestas populares... Siempre con
        nuestro atuendo distintivo y energía contagiosa, representando un
        símbolo de la tradición y de la avanguardia en Valencia.
            </p>*/}
    </div>
  );
}
