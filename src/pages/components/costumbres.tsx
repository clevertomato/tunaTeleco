import React, {useRef} from 'react'
import Image from 'next/image'
import viajesCostumbres from '../../img/perse.png'

function Costumbres({active}) {
  const viajes = useRef<HTMLDivElement | null>(null);
  const certamenes = useRef<HTMLDivElement | null>(null);
  const aprendizaje = useRef<HTMLDivElement | null>(null);
  return (
    <div className={` ${active ? 'delay-300 opacity-100 h-auto' : 'opacity-0 h-0'} transition-all duration-300  md:px-24  md:pb-4 w-5/6 mx-auto  mb-4`}>
        <div className='h-auto w-full  bg-white/10 p-4 md:p-8 md:py-6 rounded-sm border md:border-2 shadow-lg'>
        <p className='floatText drop-shadow-lg '> 
        A lo largo de la Historia, pocas son las instituciones que han mantenido tan fielmente sus costumbres y tradiciones como lo han hecho las Tunas de todo el mundo. El <span className="font-semibold">Espíritu Estudiantil</span> se ha ido pasando de generación en generaci ón, desde los primeros sopistas que habían de sobrevivir gracias a su astucia y habilidad, hasta la época actual, donde -pese a lo que pudiera imaginarse-, el sentimiento iniciático y enriquecedor de la Tuna en la Vida Universi taria está <span className="font-semibold">más vivo que nunca</span>. Como es obvio, muchas de las tradiciones han mudado de forma, han desaparecido o se han creado al devenir del tiempo, pero todas ellas son fieles a unos ideales comunes.
        Podemos distinguir entre otros, los siguientes Usos y Faciendas:
        </p>
        <div ref={viajes} className='mt-12 pt-4'>
      <div className='grid place-content-center'>
        <h2 className='text-center border-y-2 mx-auto px-2 text-2xl text-white pb-1'>LOS VIAJES</h2>
      </div>
      <br/>

      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El pícaro antiguo.</p>
      <p className="floatText drop-shadow-lg">
      Una de las costumbres que la inquietud, el hambre o la necesidad (ya en forma de huida o de supervivencia) más prodigó entre los antiguos pícaros, fueron los viajes y deambuleos a la buena de Dios.
      </p>
      <br/>
      <div className='hidden md:block floatImageL border-2 bg-white'>
              <Image
                      src={viajesCostumbres}
                      alt="guitarra"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
              </div>
      <p className="floatText drop-shadow-lg">
        Muchas veces, existían razones insoslayables, pues los substentos del lugar escaseaban, y había que moverse para encontrarlos en nuevas tierras. Otras, la necesidad venía dada por las iracundas exigencias de lugareños, alguaciles y demás esbirros, fruto de alguna tropelía o malentendido.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
        En sus viajes y andanzas, acostumbraban a juntarse, formando cuadrillas que literalmente arrasaban por dónde pasaban, y raro era el que, viajero o visitado, no salía trasquilado del encuentro, ya en su bolsa, ya en su granero.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
        En los viajes, muchos pícaros de postín, y sobre todo los universitarios, buscaban dar un sentido distinto a su vida, llenándola de aventura, y en busca de lo desconocido. Durante los viajes, aprendían los trucos y secretos de la supervivencia (el hambre agudiza el ingenio), y aunque no sin sinsabores, una filosofía especial impregnaba sus devaneos, tal cómo nos cuenta Diego de Villarroel:
      </p>
      <br/>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
        " Pasaba en el desorden de los viajes muchos días y, por la noche, era el primer convidado a los bailes, los saraos y las bodas de todas castas. Entretenía a los circunstantes con la variedad de muchas bufonadas y tonterías, que se dicen vulgarmente habilidades, y aventajaba en ellas a cuantos concurrían en aquellos tiempos a reclamo de tales holgorios y funciones. ".
      </p>
      <p className="floatText drop-shadow-lg">
        Con el tiempo, este espíritu de iniciación a la vida, a la aventura y a lo desconocido impregnó a los estudiantes de la Tuna, y desde entonces, los viajes son parte fundamental de sus actividades. Y algunos imprescindibles, como el Viaje de Novatos.
      </p>
      <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>La Tuna en el Mundo.</p>
      <p className="floatText drop-shadow-lg">
        Fruto de los viajes de los pícaros por toda Europa en los siglos pasados, y de esta tradición mantenida por la Tuna, ha sido que el número de Tunas crezca cada día más, extendiéndose su expíritu por toda Europa y Latinoamérica.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
        Siendo originarias de España, y poco después Portugal, las Tunas, como grupos eminentemente universitarios, se dieron a conocer mediante sus viajes por todo el mundo, y con ellas surgieron nuevas Tunas, que adoptaron y adaptaron esta tradición a sus formas y costumbres.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      En Latinoamérica surgieron Tunas ya desde el primer momento, fruto de la gran cantidad de estudiantes y viajeros que llevaron consigo a las Estudiantinas. Posteriormente, y ya en este siglo, se han desarrollado Tunas en Europa central, como en Holanda y Bélgica. Y eso no es todo, ahora mismo se ha creado una nueva Tuna en ... ¡Irlanda!. En fin, la Tuna es imparable.
      </p>
      <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El viaje ideal.</p>
      <p className="floatText drop-shadow-lg">
      No hay porqué tener un objetivo antes de iniciar un viaje de Tuna. Tan sólo ganas de pasarlo bién, y de intentar volver llenos de historias que contar.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Otros, los de mayor duración, suelen tener objetivos diversos, todos tan válidos cómo los siguientes:
      </p>
      <br/>
      <ul className='ml-8 md:ml-12  pb-4 drop-shadow-lg pr-4 md:pr-0 flex flex-col gap-4'>
          <li ><span className="font-semibold">Turismo:</span> conocer nuevas tierras, gentes, sabores, costumbres...</li>
          <li><span className="font-semibold">Rondas:</span> ¿Dónde no irá la Tuna por una mujer?</li>
          <li><span className="font-semibold">Participar en un certámen:</span> fenomenal excusa.</li>
          <li><span className="font-semibold">Contratos:</span> mejor excusa todavía.</li>
      </ul>
        <p className="floatText drop-shadow-lg">Resumiendo, el viaje tiene cómo objetivo único el poder contar lo que has vivido, y si has encontrado millones de amigos, si has aprendido nuevas canciones, si has encontrado la mujer de tu vida, si has descubierto las virtudes del Oporto, el Ribeiro, la Sidra, la Paella o el queso Holandés, e incluso si has decido quedarte en Puerto Rico otra temporadilla, mejor que mejor.
        </p>
        <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>A lomos de lo que sea.</p>
      <p className="floatText drop-shadow-lg">
        Interesante cuestión son los medios de transporte utilizados para estos viajes. Los hay individuales y colectivos, caros y baratos, divertidos y no tan divertidos. He aquí una lista de los más utilizados:
      </p>
      <br/>
      <ul className='ml-8 md:ml-12  pb-4 drop-shadow-lg pr-4 md:pr-0 flex flex-col gap-4'>
          <li ><span className="font-semibold">El coche de San Fernado:</span> efectivamente, los pinreles son el último recurso de un tuno, y sólo se utilizará cuando la premura de la situación o su gravedad impidan utilizar otro método.</li>
          <li><span className="font-semibold">Bicicleta:</span> al estilo Valenbisi por Valencia y de gran uso en Holanda, conlleva problemas de índole físico (cansancio, stress, etc), que unidos al habitual bagaje tunero (instrumentos, capa, etc), lo hacen poco aconsejable, limitándonos a los consejos del apartado anterior.</li>
          <li><span className="font-semibold">Motos:</span> idóneas para llevarlas con el traje de verano (bañador, gafas de sol, zapatillas e instrumento). Nada más.</li>
          <li><span className="font-semibold">Utiliarios y furgonetas:</span> a semejanza de ls carruajes de la antiguedad, los utilitarios son el medio idóneo para viajes de gupos pequeños, de modo que ofrecen gran movilidad, poco consumo, e incluso un lugar para descansar si no hubiera posada diponible.</li>
          <li><span className="font-semibold">Autobús, Avión, Barco, Lanzadera Espacial:</span> para grupos grandes, y si la economía lo permite. Especialmente indicadas para acudir a certámenes, contratos, etc. </li>
      </ul>
    </div>
    <div ref={certamenes} className='mt-12 pt-4'>
      <div className='grid place-content-center'>
        <h2 className='text-center border-y-2 mx-auto px-2 text-2xl text-white pb-1'>LOS CERTÁMENES</h2>
      </div>
      <br/>

      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>Origen.</p>
      <p className="floatText drop-shadow-lg">
      Un certámen es un encuentro (periódico o puntual) en el que las Tunas se reunen para compartir unos días sus experiencias y diversiones. Los certámenes surgen a partir de la necesidad de las Tunas de compartir sus experiencias, y como excusa para viajar y reunirse con el resto de Tunas. Surgidos originalmente como fechas de encuentro y esparcimiento, el sentido musical ha ido tomando protagonismo, aunque sin perder el horizonte lúdico festivo del evento.
      </p>
      <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>Tipos.</p>
      <p className="floatText drop-shadow-lg">
      Se pueden destacar los siguientes:
      </p>
      <br/>
      <ul className='ml-8 md:ml-12  pb-4 drop-shadow-lg pr-4 md:pr-0 flex flex-col gap-4'>
          <li ><span className="font-semibold">Los Certámenes Nacionales de unos estudios:</span> son certámenes en los que participan todas las Tunas de unos estudios determinados, por ejemplo: Certamen Nacional de Tunas de Ingenieros de Telecomunicación, Certamen Nacional de Tunas de Aparejadores, etc. Suelen celebrarse cada cierto número de años, cada vez en una localidad diferente.</li>
          <li><span className="font-semibold">Los Certámenes Locales: </span> suelen ser organizados por las Universidades o por los Ayuntamientos de la localidad organizadora, participando en ellos las Tunas de la Ciudad y tunas invitadas, tanto nacionales como del extranjero.</li>
      </ul>
      <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>Premios.</p>
      <p className="floatText drop-shadow-lg">
      Algunos ejemplos de premios que se otorgan son:
      </p>
      <br/>
      <ul className='ml-8 md:ml-12 drop-shadow-lg pr-4 md:pr-0 flex flex-col gap-4'>
          <li ><span className="font-semibold">Mejor Tuna:</span> Primer premio absoluto. Puede tener segundo y tercero.</li>
          <li className='font-semibold' >Tuna más Tuna.</li>
          <li className='font-semibold' >Mejor Imágen y Sonido.</li>
          <li className='font-semibold' >Mejor Interpretación musical.</li>
          <li className='font-semibold' >Tuna más Simpática.</li>
          <li className='font-semibold' >Mejor Puesta en Escena.</li>
          <li className='font-semibold' >Mejor Pandereta.</li>
          <li className='font-semibold' >Mejor Bandera.</li>
          <li className='font-semibold' >Mejores Novatos.</li>
      </ul>
    </div>
    <div ref={aprendizaje} className='mt-12 pt-4'>
      <div className='grid place-content-center'>
        <h2 className='text-center border-y-2 mx-auto px-2 text-2xl text-white pb-1'>EL APRENDIZAJE</h2>
      </div>
      <br/>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
      " Pablo, abre el ojo que asan carne " (El Buscón, Quevedo)
      </p>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El periodo de Iniciación.</p>
      <p className="floatText drop-shadow-lg">
      Una de las tradiciones más arraigadas en el mundo de la Tuna es el periodo de aprendizaje, que permite a todo el que desea pertenecer a dicha institución adquirir la experiencia y el grado de madurez necesarios para sobrevivir a los múltiples avatares que el destino puede depararle.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Esta costumbre viene heredada de los orígenes de la Tuna, jóvenes estudiantes que acudían a la Universidad, y que se ponían en tutela de los ya veteranos para conocer los secretos de la vida universitaria, y adquirir destreza en sus empresas, a cambio de prestarles ayuda en sus menesteres. De esta soledad se hacía eco el Lazarillo de Tormes:
      </p>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
      "Verdad dice éste, que me cumple avivar el ojo y avisar, pues solo soy, y pensar cómo me sepa valer " (Lazarillo)
      </p>
      <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>En la Antiguedad.</p>
      <p className="floatText drop-shadow-lg">
      Ciertamente, los tratos dados a los recien llegados en los Colegios y Universidades Españoles por parte de sus compañeros eran un tanto "especiales":
      </p>
      <br/>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
      " Entré en el patio, y no hube metido bien el pie, cuando me encararon y empezaron a decir: -"¡Nuevo!". Yo por disimular di en reír, como que no hacía caso; más no bastó, porque llegándose a mi ocho o nueve, comenzaron a reírse... (El Buscón)
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      El recién llegado, se encontraba ante un mundo que no conocía, y un tanto hostil, frente a la "alegría" del resto de sus compañeros:
      </p>
      <br/>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
      " ¡Oh dulce vida la de los estudiantes! Aquel hacer de obispillos, aquel de dar trato a los novatos, meterlos en rueda, sacarlos nevados, darles garrote al arca, sacarles la patente, o no dejarles libro seguro ni manteo sobre los hombros! " (Guzmán de Alfarache)
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Incluso se podía leer:
      </p>
      <br/>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
      "Las burlas que padecen los novatos, no sólo son exquisitas, sino de mucho pesar, en cuyo sufrimiento suele quebrarse la correa del más fino redomado." (El Pasajero)
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Ante tamañas perspectivas, el recién incorporado se solía acoger a la tutela de algún veterano, que le protegiera de excesos y escarnios, y que le sirviera de guía durante su aprendizaje, tras lo cual, pasaba a formar parte de ese grupo de estudiantes:
      </p>
      <br/>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
      "¡Viva el compañero, y que sea admitido en nuestra amistad.Goce de las preeminencias de antiguo. Pueda tener sarna, andar manchado y padecer la hambre que todos! " (El Buscón)
      </p>
      <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El periodo de Aprendizaje.</p>
      <p className="floatText drop-shadow-lg">
        
        En la actualidad, las cosas ya no son ni mucho menos tan graves (que consuelo), y lo que la Tuna ofrece, es una perspectiva ante la vida universitaria más fresca, desenfadada, divertida y sobre todo, diferente.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
        Este periodo, en el cual el recién llegado y aspirante a Tuno suele ser denominado novato, aprendiz, nuevo, caloiro, etc, suele durar alrededor de un año (dependiendo de las habilidades de dicho ovato) y, con él, se pretende que adquiera la suficiente soltura musical y vital para llevar adelante las empresas que como tuno pudiera emprender.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
        Durante este periodo, tendrá que pasar por:
      </p>
      <br/>
      <ul className='ml-8 md:ml-12  pb-4 drop-shadow-lg pr-4 md:pr-0 flex flex-col gap-4'>
          <li ><span className="font-semibold">Una Prueba de Ingreso:</span> Requisito imprescindible para que cualquier estudiante sea admitido como aprendiz y aceptado como miembro provisional de la Tuna.</li>
          <li ><span className="font-semibold">Un Viaje de Novatos:</span> En el que tendrá que demostrar prácticamente los conocimientos adquiridos durante su etapa de aprendizaje.</li>
          <li ><span className="font-semibold">Un Exámen Final:</span> Uno de los momentos más importantes de la vida de un tuno, en él su Tuna le concede la beca que la distingue y le reconoce como como miembros de pleno derecho, con lo que pasa a gozar de las mismas prebendas que el resto como un Veterano más.</li>
      </ul>
    </div>
        </div>
    </div>
  )
}

export default Costumbres