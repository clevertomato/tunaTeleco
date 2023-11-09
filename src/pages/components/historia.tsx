import React from 'react'
import Image from 'next/image';
import historiaImage from '../../img/HISTORIA.gif'

function HistoriaPart({active}) {
  return (
    <div className={`${active ? 'opacity-100' : 'opacity-0'} transition-all duration-300 h-auto md:px-24  md:pb-4 w-5/6 mx-auto  mb-4 `}>
            <div className='h-auto w-full  bg-white/10 p-4 md:p-8 md:py-6 rounded-sm border md:border-2 shadow-lg'>
            <div className='w-auto lg:pl-4 md:px-8 text-white text-center grid place-content-center pb-8 pt-4'>
                <h1 className='text-xl md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-y-2 border-x-0 font-beautique'>Historia</h1>
            </div>
            <p className='floatText drop-shadow-lg '> En el año 1.212, bajo el reinado de <span className="font-semibold">Alfonso VIII</span>, se fundó en Palencia el primer <span className="font-semibold">"Studium generale"</span>, precedente de lo que más tarde serían las Universidades. A estos Estudios Generales y a los que sucesivamente se crearon, acudían jóvenes de toda condición entre los que surgieron los <span className="font-semibold">SOPISTAS</span>, predecesores de los actuales tunos.</p>
              <br/>
              <div className='hidden md:block floatImageL border-2 bg-white/70'>
              <Image
                      src={historiaImage}
                      alt="historiaTuna1"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
              </div>
              <p className='floatText drop-shadow-lg'>Los sopistas eran estudiantes pobres que con sus músicas, simpatía y picardías recorrían figones, conventos, calles y plazas a cambio de un plato de sopa (cosa que les otorgó el nombre) y de unas monedas que les ayudaban a costear sus estudios. Cuando anochecía y una vez sonaba la campana de queda o recogida, salían a rondar los balcones para enamorar a las féminas que pretendían. Recibían el nombre de sopistas porque de ellos se decía que vivían de la <span className="font-semibold">sopa boba</span>; siempre iban provistos de cuchara y tenedor de madera, lo que les permitía comer en cualquier lugar donde se les presentaba la ocasión. Estos cubiertos de madera eran distintivo de los sopistas, siendo en la actualidad símbolo de todas las Tunas Universitarias.</p>
              <div className='md:hidden block  border-2 bg-white/70 w-full my-8'>
              <Image
                      src={historiaImage}
                      alt="historiaTuna1"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
              </div>
              <br className='hidden md:block'></br>
              <p className='floatText drop-shadow-lg'>Era esta la versión española de un fenómeno generalizado en toda Europa durante la Edad Media y que se conoció con el nombre de <span className="font-semibold">Goliardos</span>, los cuales representaban la bohemia universitaria viviendo como juglares y trovadores</p>
              <br/>
              <p className='floatText drop-shadow-lg'>En 1.348, <span className="font-semibold">Alfonso X "El Sabio"</span>, se refiere a los sopistas en "Las Partidas", diciendo: "Esos escholares que troban y tañen instrumentos para haber mantenencia".</p>
              <br/>
              <p className='floatText drop-shadow-lg'>De la misma época es la obra <span className="font-semibold">"Razón de amor y denuestos del agua y el vino"</span>, cuyo autor se retrata en la introducción: "Un escolar la rimó, que siempre dueñas amó". Y en ella se alude a las cintas de amor que prenden sobre la capa del escolar, por una de las cuales una dama reconoce al protagonista en la oscuridad de la noche.</p>
              <br/>
              <p className='floatText drop-shadow-lg'>El <span className="font-semibold">Arcipreste de Hita</span> compuso más de diez pliegos de cantares para "escolares que andan nocherniegos e para muchos otros por puertas andariegos", y en su <span className="font-semibold">"Libro del buen amor"</span> hace referencia al carácter mendicante de estos estudiantes: "Señor dat a escolar que vos viene a demandar. Dat limosna o ración faré por vos oración"</p>
              <br/>
              <p className='floatText drop-shadow-lg'>Fué en el siglo XVI cuando se formaron las tunas tal y como hoy las conocemos. Los sopistas se acogieron a la <span className="font-semibold">"Instrucción para bachilleres de pupilos"</span> dictada en 1.538, norma que ofrecía vivienda a los estudiantes que no podían costearla. En ellas no podían mezclarse estudios diferentes y eran dirigidas por los estudiantes más antiguos, a los que se llamaba <span className="font-semibold">"bachilleres de pupilos"</span>, pues además debían apoyar en sus estudios a los bobos o estudiantes nuevos. Estas casas eran, por sus características, habitadas mayoritariamente por sopistas, y nunca fueron ejemplo para el estudio serio, y así en el libro <span className="font-semibold">"La vida del Pícaro Guzmán de Alfarache"</span> encontramos:</p>
              <p className='floatText ml-8 md:ml-12 font-serif font-light py-6 floatTextSM drop-shadow-lg pr-4 md:pr-0'> " . . . no querían ver libro, ni atender a lo que habían venido a la Universidad; jamás se les caían las guitarras de las manos, daban mucho entretenimiento, cantaban muy bueno sonetillos y siempre tenían de nuevos, y los sabían hacer muy bien y pasar el instrumento".</p>
              <p className='floatText drop-shadow-lg'>Así, los pupilos que querían formar parte de las camadas sopistas, se convertían en escuderos de estos a cambio de que les instruyeran en su arte, lo cual permitía a los sopistas llevar una vida similar a la de los estudiantes ricos. Los nuevos que esto decidían, debido a su inexperiencia, eran el centro de la broma en las correrías de sus maestros, pero una vez terminado el pupilaje, el nuevo era admitido como uno más, y así en el libro <span className="font-semibold">"Historia de la vida del Buscón"</span> de <span className="font-semibold">Quevedo</span>, se hace referencia a estas costumbres que todavía hoy perduran:</p>
              <p className='floatText ml-8 md:ml-12 font-serif font-light py-6 floatTextSM drop-shadow-lg pr-4 md:pr-0'>"Viva el compañero, y sea admitido en nuestra amistad; goce de las preeminencias de antiguo; pueda tener sarna, andar manchado y padecer el hambre que todos!". </p>
              <p className='floatText drop-shadow-lg'>Como muy bien expresa D. Emilio de la Cruz y Aguilar en sus <span className="font-semibold">"Chrónicas de la Tuna"</span>, "A pesar del paso y cambio de los tiempos, los tunos siguen siendo viva credencial de la juventud de siempre, los mismos antiguos juglares y trovadores escolares que siguen en el mester, los entrañables y nocherniegos universitarios que, desde hace muchos siglos, sucediéndose a sí mismos, recorren rondando el mundo, cultivan los instrumentos populares y practican un género de música entroncada directamente con las albadas medievales o los cantos escolares pobres, testificando así este fenómeno cultural único . . . "</p>
              <p className='floatText drop-shadow-lg'>Por último, recordar a Jiménez Catalán y Sinués y Urbiola, historiadores de la Universidad de Zaragoza, cuando decían que:</p>
              <p className='floatText ml-8 md:ml-12 font-serif font-light py-6 floatTextSM drop-shadow-lg pr-4 md:pr-0'>" . . . de estas comparsas de tunos y sopistas salieron hombres que gobernaron a España y ocuparon puestos preeminentes en las letras, la política y el foro".</p>
              <div className='grid place-content-center w-full'>
              <p className='text-lg font-semibold drop-shadow-lg text-center'>José Manuel Sendra Mengual "Cabezón" - Tuna de Aparejadores de Valencia</p>
              </div>
          </div>
          
        </div>
  )
}

export default HistoriaPart