import React from "react";
import { useState, useRef, useEffect } from "react";
import Slide from "react-reveal/Fade";
import Image from "next/image";
import leftarrow from "../../img/left-arrow.svg";

export default function Celebraciones() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [activeScale, setActiveScale] = useState(false);
  const boxServicios = useRef(null);

  const clickActive = () => {
    setActive(!active);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const clickActiveOneTime = () => {
    console.log(!activeScale);
    if (!active) {
      setActive(!active);
      setActiveScale(false);
      setTimeout(() => {
        setActiveScale(true);
      }, 700);
    } else {
      setActiveScale(true);
      setTimeout(() => {
        setActiveScale(false);
      }, 700);
    }
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
    width: "100%",
    height: "100%",
  };
  const satStyle = {
    width: "100%",
    height: "100%",
  };
  useEffect(() => {
    // Function to update the windowWidth state
    if (window.innerWidth < 769) {
      setActive(true);
    }
    const updateWindowWidth = () => {
      if (window.innerWidth < 769) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    // Attach the event listener to the window resize event
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div
      className={`${
        active ? "md:ml--100 md:ml-0" : ""
      }  text-black  h-celebraciones w-auto celebraciones-bg flex flex-col md:flex-row overflow-hidden transition-all ease-in-out delay-300 duration-500 border-b-2 border-white  py-8`}
    >
      <div className="h-auto w-full md:w-4/6 px-8  md:pl-12 md2:pl-20 md3:pl-24 lg:pl-28 md:pr-0 md:py-8 ">
        <div className="h-full w-full  sm:text-sm md:text-sm md2:text-sm md3:text-base 2xl:text-lg 3xl:text-2xl flex flex-col relative">
          <div
            className={`${
              active ? "md:ml--100 md:m-0" : ""
            } h-full w-full pb-0  lg:absolute z-10 flex flex-col items-start justify-center gap-4 md:gap-8 transition-all ease-in-out delay-300 duration-500 `}
          >
            <div className="grid place-content-center px-4 md2:px-12 py-8 md:py-0 pb-4">
              <h2 className="text-white text-xl md2:2xl md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl cajatextoNoIndent  overflow-hidden grid place-content-center border-l-2 pl-4 uppercase">
                ¿Quieres hacer que tu evento o celebración sea inolvidable?
              </h2>
            </div>

            <p className="text-white px-12 hidden md2:grid place-content-center letter-spacing-011">
              Ofrecemos nuestros servicios para bodas, comuniones, cumpleaños,
              jubilaciones y cualquier ocasión especial que desees destacar.
              Nuestro objetivo es hacer de cada momento una auténtica fiesta
              para que todos disfruten al máximo.
            </p>

            <p className="text-white md2:hidden px-4 pb-4 grid place-content-center letter-spacing-011">
              Ofrecemos nuestros servicios para bodas, bautizos, comuniones,
              eventos, cumpleaños, jubilaciones, para ir a tomarse un café y
              cualquier ocasión especial que desees destacar. Nuestro objetivo
              es hacer de cada momento una auténtica fiesta para que todos
              disfruten al máximo.
            </p>

            <p className="text-white  px-12 hidden md2:grid place-content-center letter-spacing-011">
              Con un repertorio amplio y variado, llevamos la alegría y el buen
              humor a cada lugar que visitamos. Nos esforzamos al máximo para
              asegurar que tu evento sea un éxito.
            </p>

            <p className="text-white md2:hidden px-4 grid place-content-center letter-spacing-011 pb-8">
              Con un repertorio amplio y variado, llevamos la alegría y el buen
              humor a cada lugar que visitamos. Nos esforzamos al máximo para
              asegurar que tu evento sea un éxito y, lo más importante, lo
              disfrutamos enormemente en el proceso.
            </p>

            <div className="px-4 flex items-center justify-between w-full md2:px-12  md2:mt-4 border-b-2 border-white md:border-none">
              <button
                className=" hidden md:block text-center py-2 px-6 border-2 border-white shadow-sm shadow-black/80 hover:bg-black/10 bg-white/5  hover:shadow-none transition-all duration-300 hover:cursor-pointer text-white rounded-sm "
                onClick={clickActive}
              >
                INFORMACIÓN SOBRE EVENTOS
              </button>
              <button className="md:hidden block  text-white text-lg rounded-sm">
                INFORMACIÓN SOBRE EVENTOS
              </button>
            </div>
          </div>

          <div
            className={`${
              active
                ? "opacity-0 md:opacity-100 md:bg-black/30"
                : "md:opacity-0 pointer-events-none"
            } h-full top-0 right-0 absolute w-full hover:cursor-pointer transition-all ease-in-out delay-300 duration-300  z-30 text-white hidden md:flex flex-row items-center justify-end pr-8`}
            onClick={clickActive}
          >
            <Image
              src={leftarrow}
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
              alt="coverbg"
            />
          </div>
        </div>
      </div>
      <div
        ref={boxServicios}
        className="h-auto p-8 pt-4 md2:py-8 px-8 md:pl-16 md3:pr-28 md w-full md:w-1/2 relative overflow-y-hidden overflow-x-hidden"
      >
        <div
          className={`${
            active
              ? "animate-changeBackground-resize transition-display-out animated-background-notActive "
              : " transition-display animate-changeBackground-not-active-resize border-2 border-white "
          }  animated-background rounded-sm h-70-screen relative shadow-sm`}
        >
          <div
            className={`${active ? "opacity-100" : "opacity-0 absolute z-10"} ${
              activeScale ? "scaleout" : ""
            } text-white flex md:flex-row flex-col align-bottom w-full h-full absolute z-10 transition-all ease-in-out delay-300 duration-500`}
          >
            <div className="w-full h-full">
              <div className="flex w-full h-full relative flex-col md:gap-0">
                <div
                  className={` ${
                    active ? "transition-display" : "transition-display-out"
                  }  ${
                    active1
                      ? "opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 h-full mb-0"
                      : "mb-2 md:mb-0 md:absolute md:z-0 md:w-1/2 w-full h-1/4 md:h-1/2"
                  } ${
                    active2 || active3 || active4 ? "md:block hidden " : " "
                  } relative md:mb-0  md:p-2 md:-m-2  flex flex-col   transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer overflow-y-hidden`}
                  onClick={clickActive1}
                >
                  <div
                    className={`${
                      active1 ? "" : ""
                    } background-item   h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white`}
                  >
                    <div
                      className={`${
                        active1
                          ? " h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl"
                          : "h-full "
                      } w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 md:text-2xl text-lg text-center`}
                    >
                      <h3
                        className={`${
                          active1 ? "hidden" : "block "
                        } md:border-y-2 md:py-1 border-white`}
                      >
                        ACTUACIONES <br className="md:hidden" /> &{" "}
                        <br className="md:hidden" /> EVENTOS
                      </h3>
                      <h3
                        className={`${
                          active1 ? "block" : "hidden"
                        } md:border-y-2 md:py-1 border-white px-4 md:mt-8 w-full`}
                      >
                        ACTUACIONES & EVENTOS
                      </h3>
                    </div>
                    <div
                      className={`${
                        active1
                          ? "h-3/5 animate-opacityText"
                          : "h-px  animate-opacityText-not-active"
                      } w-full h-1/2 grid place-content-center text-white text-lg md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}
                    >
                      <p
                        className={`${
                          active1 ? "backdrop-blur-sm" : ""
                        } p-4 md:p-8 3xl:p-16 transition-all duration-500 rounded-sm`}
                      >
                        Difundimos música tradicional española y sudamericana
                        con pasodoble, bolero, vals, mariachi, éxitos populares
                        y clásicas canciones de la tuna. Contrátanos para
                        eventos y sorprende a tus invitados con su toque
                        singular.
                      </p>
                    </div>
                    <div
                      className={`${
                        active1 ? "opacity-100" : "opacity-0"
                      } grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}
                    >
                      <div className="border-2 border-white py-2 px-4 ">
                        <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                            border: "2px",
                            borderColor: "white",
                          }} // optional
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    active ? "transition-display" : "transition-display-out"
                  }  ${
                    active2
                      ? "opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 md:left-0 h-full mb-0"
                      : "mb-2 md:mb-0 md:absolute md:z-0 md:left-1/2 md:w-1/2 w-full md:h-1/2 h-1/4"
                  } ${
                    active1 || active3 || active4 ? "md:block hidden " : " "
                  } relative md:mb-0 md:p-2 md:-mt-2 md:ml-2  flex flex-col  transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer overflow-y-hidden`}
                  onClick={clickActive2}
                >
                  <div
                    className={`${
                      active2 ? "" : ""
                    } background-item2 h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white`}
                  >
                    <div
                      className={`${
                        active2
                          ? "h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl"
                          : "h-full"
                      } w-full text-white grid place-content-center transition-all ease-in-out delay-300 duration-500 md:text-2xl text-lg text-center `}
                    >
                      <h3
                        className={`${
                          active2 ? "hidden" : "block "
                        } md:border-y-2 md:py-1 border-white`}
                      >
                        CELEBRACIONES
                        <br className="md:hidden" /> &{" "}
                        <br className="md:hidden" />
                        FIESTAS PRIVADAS
                      </h3>
                      <h3
                        className={`${
                          active2 ? "block" : "hidden"
                        } md:border-y-2 md:py-1 border-white px-4 md:mt-8`}
                      >
                        CELEBRACIONES & FIESTAS PRIVADAS
                      </h3>
                    </div>
                    <div
                      className={`${
                        active2
                          ? "h-3/5 animate-opacityText"
                          : "h-px  animate-opacityText-not-active"
                      } w-full h-1/2 grid place-content-center text-white text-lg md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}
                    >
                      <p
                        className={`${
                          active2 ? "backdrop-blur-sm" : ""
                        } p-4 md:p-8 3xl:p-16 transition-all duration-500 rounded-sm`}
                      >
                        ¡Dale un toque original y divertido a tu evento!
                        Contrata a la Tuna para despedidas, aniversarios,
                        cumpleaños, encuentros familiares y más. ¡Triunfarás y
                        crearás recuerdos inolvidables! Contáctanos para acudir
                        a tu celebración de amigos, familia o trabajo.
                      </p>
                    </div>
                    <div
                      className={`${
                        active2 ? "opacity-100" : "opacity-0"
                      } grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}
                    >
                      <div className="border-2 border-white py-2 px-4 ">
                        <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                            border: "2px",
                            borderColor: "white",
                          }} // optional
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    active ? "transition-display" : "transition-display-out"
                  }  ${
                    active3
                      ? "opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 md:top-0 md:-mt-3 h-full mb-0"
                      : "mb-2 md:mb-0 md:absolute md:z-0 md:top-1/2 md:mt-2 md:w-1/2 w-full md:h-1/2 h-1/4"
                  } ${
                    active1 || active2 || active4 ? "md:block hidden " : " "
                  } relative  md:p-2 md:-ml-2 flex flex-col transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer  overflow-y-hidden`}
                  onClick={clickActive3}
                >
                  <div
                    className={`${
                      active3 ? "" : ""
                    } background-item3 h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white `}
                  >
                    <div
                      className={`${
                        active3
                          ? "h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl "
                          : "h-full "
                      } w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 md:text-2xl text-lg text-center`}
                    >
                      <h3
                        className={`${
                          active3 ? "hidden" : "block "
                        } md:border-y-2 md:py-1 border-white`}
                      >
                        BODAS
                        <br className="md:hidden" /> &{" "}
                        <br className="md:hidden" />
                        SERENETAS
                      </h3>
                      <h3
                        className={`${
                          active3 ? "block" : "hidden"
                        } md:border-y-2 md:py-1 border-white px-4 md:mt-8`}
                      >
                        BODAS & SERENATAS
                      </h3>
                    </div>
                    <div
                      className={`${
                        active3
                          ? "h-3/5 animate-opacityText"
                          : "h-px  animate-opacityText-not-active"
                      } w-full h-1/2 grid place-content-center text-white text-lg md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}
                    >
                      <p
                        className={`${
                          active3 ? "backdrop-blur-md" : ""
                        } p-4 md:p-4 3xl:p-16 transition-all duration-700 rounded-sm`}
                      >
                        Celebra tu boda con el encanto de la Tuna, una
                        experiencia musical única. Desde el día que le declaras
                        tu amor, la serenata del día anterior a la boda,
                        continuando con la emotiva salida de la iglesia, hasta
                        el cóctel y el banquete. Podemos adaptarnos a vuestras
                        peticiones.
                      </p>
                    </div>
                    <div
                      className={`${
                        active3 ? "opacity-100" : "opacity-0"
                      } grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}
                    >
                      <div className="border-2 border-white py-2 px-4 ">
                        <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                            border: "2px",
                            borderColor: "white",
                          }} // optional
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={` ${
                    active ? "transition-display" : "transition-display-out"
                  }  ${
                    active4
                      ? "opacity-100 translate-item md:w-4/5 md:h-4/5 absolute md:z-10 md:left-0 md:top-0 md:-mt-3 h-full"
                      : "md:absolute md:z-0 md:left-1/2 md:top-1/2 md:mt-2 md:w-1/2 w-full md:h-1/2 h-1/4"
                  } ${
                    active1 || active2 || active3 ? "md:block hidden " : " "
                  } relative md:ml-2  flex flex-col md:p-2  transition-all ease-in-out delay-100 duration-400 hover:cursor-pointer  overflow-y-hidden`}
                  onClick={clickActive4}
                >
                  <div
                    className={`${
                      active4 ? "" : ""
                    } background-item4 h-full w-full transition-all ease-in-out delay-300 duration-500 border-2 border-white`}
                  >
                    <div
                      className={`${
                        active4
                          ? "h-1/5 md:h-2/6 text-xl md:text-2xl 3xl:text-4xl 4xl:text-5xl"
                          : "h-full  "
                      } w-full  grid place-content-center text-white transition-all ease-in-out delay-300 duration-500 md:text-2xl text-center`}
                    >
                      <h3
                        className={`${
                          active4 ? "hidden" : "block"
                        } md:border-y-2 md:py-1 border-white px-4 `}
                      >
                        INICIATIVAS SOLIDARIAS
                      </h3>
                      <h3
                        className={`${
                          active4 ? "block" : "hidden"
                        } md:border-y-2 md:py-1 border-white px-4  md:mt-8`}
                      >
                        INICIATIVAS SOLIDARIAS
                      </h3>
                    </div>
                    <div
                      className={`${
                        active4
                          ? "h-3/5 animate-opacityText"
                          : "h-px  animate-opacityText-not-active"
                      } w-full h-1/2 grid place-content-center text-white text-lg md:text-2xl 3xl:text-3xl 4xl:text-4xl  p-4 md:p-8 3xl:p-16`}
                    >
                      {" "}
                      <p
                        className={`${
                          active4 ? "backdrop-blur-sm" : ""
                        } p-4 md:p-8 3xl:p-16 transition-all duration-500 rounded-sm`}
                      >
                        Participamos en actividades solidarias brindando ocio y
                        diversión en residencias de ancianos, hospitales,
                        colegios para niños con necesidades especiales o
                        cuaquier acto para recaudar donaciones. ¡Consúltanos y
                        hagamos sonreír a quienes más lo necesitan!
                      </p>
                    </div>
                    <div
                      className={`${
                        active4 ? "opacity-100" : "opacity-0"
                      } grid place-content-center md:hidden h-1/5 transition-opacity duration-300`}
                    >
                      <div className="border-2 border-white py-2 px-4 ">
                        <Image
                          src={leftarrow}
                          alt="arrow"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                            border: "2px",
                            borderColor: "white",
                          }} // optional
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              active ? "opacity-0" : "opacity-100 relative"
            } flex flex-row align-bottom w-full h-full  transition-all ease-in-out delay-300 duration-500`}
          >
            <div className="w-1/3 flex items-end justify-center mx-auto">
              <div className="noteanimation_note note1-img h-notes1 h-1/6"></div>
            </div>
            <div className="w-1/3 flex items-end justify-center mx-auto">
              <div className="noteanimation_note note2-img h-notes2"></div>
            </div>
            <div className="w-1/3 flex items-end justify-center mx-auto">
              <div className="noteanimation_note note3-img h-notes3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
