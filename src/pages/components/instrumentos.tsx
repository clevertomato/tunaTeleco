import React, {useRef} from 'react'
import guitarraHistoria from '../../img/guitarraHistoria.png'
import laudes from '../../img/laudes.png'
import laudPartes from '../../img/laud-transformed.jpeg'
import bandurriaPartes from '../../img/bandurr-transformed.jpeg'
import Image from 'next/image';

function Instrumentos({active}) {
  const guitarra = useRef<HTMLDivElement | null>(null);
  const laud = useRef<HTMLDivElement | null>(null);
  const bandurria = useRef<HTMLDivElement | null>(null);

  const scrollToGuitar = () => {
    if (guitarra.current) {
      guitarra.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToLaud = () => {
    if (laud.current) {
      laud.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToBandurria = () => {
    if (bandurria.current) {
      bandurria.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${active ? 'm-0' : 'ml-72 transition-all duration-300'} transition-all duration-300 h-auto md:px-24  md:pb-4 w-5/6 mx-auto  mb-4`}>
    <div className='h-auto w-full bg-white/10 md:p-8 p-4 md:py-6 rounded-sm border-2 shadow-lg'>
    <div className='w-auto lg:pl-4 md:px-8 text-white text-center grid place-content-center pb-8 pt-4'>
        <h1 className='text-xl md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-y-2 border-x-0 font-beautique'>INSTRUMENTOS</h1>
    </div>
    <p className="floatText drop-shadow-lg">
    En la Tuna española tenemos dos tipos de intrumentos básicos. Por un lado está la <span className="font-semibold underline underline-offset-2 hover:cursor-pointer" onClick={scrollToGuitar}>Guitarra</span> que se utiliza como acompañamiento de la melodía. La melodía la crean las voces y los cantos, entre los cuales destacan principalmente el <span className="font-semibold underline underline-offset-2 hover:cursor-pointer" onClick={scrollToLaud}>Laúd</span> y la <span className="font-semibold underline underline-offset-2 hover:cursor-pointer" onClick={scrollToBandurria}>Bandurria</span>. No nos podemos olvidar sin embargo del instrumento más característico de nuestra música que es la pandereta, sin ninguna duda.
    </p>
    <br/>
    <p className="floatText drop-shadow-lg">
      Además de los instrumentos básicos, sin los cuales no se podría crear música de tuna, utilizamos muchos otros que le confieren una riqueza muy especial. Estos han llegado gracias a la fusión con la cultura de muchos pueblos.
    </p>
    <br/>
    <div ref={guitarra} className='mt-12 pt-4'>
      <div className='grid place-content-center'>
        <h2 className='text-center border-y-2 mx-auto px-2 text-2xl text-white pb-1'>LA GUITARRA</h2>
      </div>
      <br/>
      <p className="floatText drop-shadow-lg">
      Debemos remontarnos al antiguo Egipto para encontrar las primeras representaciones de dibujos que asemejan un instrumento que nos podría recordar a la guitarra. Nada se sabe a ciencia cierta sobre su verdadero origen y evolución, teniendo que dejarnos guiar por las representaciones pictóricas y esculturales para hacernos una idea de sus transformaciones.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Existen dos teorías acerca de sus orígenes. Una la considera un instrumento traído por los Árabes y que posteriormente evolucionó en España. La otra le da un origen Grecorromano y piensa es un descendiente de la fidícula
      </p>
      <br/>
      <div className='hidden md:block floatImageL border-2 bg-white'>
              <Image
                      src={guitarraHistoria}
                      alt="guitarra"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
              </div>
      <p className="floatText drop-shadow-lg">
      En cuanto a su nombre, parece derivar del árabe qitara, o de la voz griega kithara o cítara.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Ya en el siglo XII pueden distingurse dos tipos de guitarra. Por un lado la morica o mandola, con forma de media pera y que se asemeja al laúd árabe. Por otro lado la latina derivada de las antiguas cedras o cítaras, con el fondo plano, unida por aros con mango largo y clavijero semejante al violín.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      De la evolución de esta última surgieron dos instrumentos: la vihuela y la guitarra. El primero de ellos era un instrumento dotado de seis órdenes (cuerdas dobles) y que fue muy utilizado por los músicos "profesionales". El segundo fue la guitarra de cuatro órdenes y se cree era un instrumento popular. La primera obra para guitarra aparece en los tres libros de musica para vihuela publicado en 1546 por Alonso Mudarra en Sevilla.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      El nombre de vihuela y guitarra es confudido a veces incluso en esta época. Sería hacia mediado y finales de este siglo cuando comenzaron a diferenciarse.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      La guitarra sigue siendo utilizada principalmente como instrumento de acompañamiento y principalmente con la técnica del rasgueado.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Fue también durante el SXVI cuando se le añadió una cuerda más a la guitarra, dando lugar a la llamada guitarra barroca. En el SVII comiezan a escribirse obras para guitarra específicamente y se alterna el rasgeado con la utilización de los dedos independientemente dado al instrumento y desarrollando su capacidad polifónica.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      En España, la popularidad de la guitarra tuvo varios altibajos; logró imponerse a finales del XVI y se desarrolló plenamente en el XVII. En el siglo siguiente pierde parte de su esplendor que sería nuevamente renovado a traves de la figura del padre Basilio, que fue el iniciador de la escuela que alcanzaría su cima durante finales del XVIII y comienzos del XIX.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Durante estos siglos la guitarra fue quitando los órdenes y pasó a ser un instrumento de seis cuerdas simples, conservando la afinación que ha llegado a nuestros días. Sería Antonio Torres el constructor que daría durante el siglo pasado la forma definitiva a la guitarra, consiguiendo que los guitarreros de su época y posteriores imitaran sus guitarras con las corespondientes variaciones personales de cada constructor.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      Dionisio Aguado y Fernando Sor serían las figuras mas importantes durante la primera mitad del XIX y Francisco Tárrega, el maestro que se encargaría de la creación de una amplia escuela de guitarristas que llegarían hasta este siglo, Llobet, Fortea y Pujol serían los más destacados. Siendo tambien ellos los que crearían la escuela de guitarristas más importante junto a la figura del autodidacta y más famoso guitarrista de este siglo: Andres Segovia. Figura fundamental en la historia de la guitarra Segovia consigio llevar la guitarra a las salas de conciertos más importantes del mundo, así como la introdujo en los Conservatorios, la dotó de un amplio repertorio gracias a su relación con los más grandes compositores de este siglo, creando una escuela de guitarristas que ahora son la base de la guitarra actual.
      </p>
      <br/>
      <p className=" drop-shadow-lg text-center font-semibold pb-4">
      Esta introducción a la historia de la guitarra ha sido escrita por Juan José Monroy, Profesor de Guitarra del Conservatorio de Priego de Córdoba
      </p>
    </div>
    <div ref={laud} className='mt-12 pt-4'>
      <div className='grid place-content-center'>
        <h2 className='text-center border-y-2 mx-auto px-2 text-2xl text-white pb-1'>EL LAÚD</h2>
      </div>
      <br/>
      <div className='hidden md:block floatImageR border-2 bg-white'>
              <Image
                      src={laudes}
                      alt="guitarra"
                      style={{ height: '100%', width: '100%', objectFit:'cover', border: '2px', borderColor: '#fff'}}
                    />
              </div>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El ud islámico.</p>
      <p className="floatText drop-shadow-lg">
      El antecesor mas directo del laúd es el ud islámico procedente del Asia occidental y que fue introducido en Europa a través de España a principios del siglo XIII. El termino ud significa madera o vara flexible y parece indicar que los instrumentos similares que había entonces estaban construidos con caparazones de animales, mientras que el ud era totalmente de madera.
      </p>
      <br/>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El Laúd en la Edad Media.</p>
      <p className="floatText drop-shadow-lg">
      Su forma heredada del ud árabe, fue cambiando con los años, admitiendo varios tamaños y diferencias en la ornamentación, caja de resonancia, en los trastes, etc. En esta época el laúd no estaba bien definido y por ello admitía diferentes aspectos.
      </p>
      <br/>
      <p className="floatText drop-shadow-lg">
      La primera mención castellana, fuertemente teñida de arabismo, como cabía de esperar, se encuentra en la Doncella Teodor (1250):
      </p>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
        Aprendí a tañer laúd y cannon y las treinta y tres trovas
      </p>
        <p className="floatText drop-shadow-lg">Tambien el Arcipreste de Hita menciona el laúd en sus escritos:</p>
        <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>El corpudo alaud que tiene punto a la trisca.</p>
        <p className="floatText drop-shadow-lg">Como último documento que refleja la aparición del laúd en la edad media española tenemos el poema anónimo de Alfonso XI que añade algo sobre su carácter festivo:</p>
        <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
          Los estormentos tannian
          <br/>
          el laúd iba tanniendo
          <br/>
          por las Huelgas los jograres
          <br/>
          estramentos julageros.
        </p>
        <p className="floatText drop-shadow-lg">Su característica diferencial más clara respecto a otros instrumentos punteados es ser más grande, aparte del habitual clavijero doblado hacia atrás, el fondo de costillas o duelas, la forma de la caja y el hecho de fusionar en una sola pieza el cordal y el puente.</p>
        <br/>
        <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El Laúd en el Renacimiento</p>
        <p className="floatText drop-shadow-lg mb-8">
        Hacia el año 1511 el laúd había alcanzado la perfección tanto en estructura como en fabricación. A pesar de sus dimensiones resulta liviano ya que las piezas que formaban el cuerpo de pera de los laudes de esta época era de pequeño grosor. El vientre hecho de la mejor madera de pino con su agujero u oído llamado rosa, está adornado con una hermosa talla. El vientre posee hasta seis o más piezas transversales pegadas por debajo para reforzar y aumentar la resonancia, ya que el sonido depende muchísimo de la calidad de la madera del vientre y de la buena colocacioó de estas piezas. El ancho cuello o mástil está unido a un pequeño bloque de madera en cuyo extremo superior se juntan las partes del cuerpo. El puente esta adosado al vientre y las cuerdas unidas a éste. Los trastes de tripa están colocados alrededor del mastil y del bastidor , siendo su espaciamiento correcto una de las habilidades vitales del ejecutante del instrumento. Para equilibrarlo, el clavijero esta inclinado hacia atras y asi poder soportar mejor la tensión de las cuerdas.
        </p>
        <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>El nuevo Laúd</p>
        <p className="floatText drop-shadow-lg mb-8">
        Aunque no está definido con exactitud, hacia el año 1880 aparece el laúd que conocemos actualmente. Este laúd presenta dos posibles afinaciones: la primera -cuando toca solo- a una cuarta más baja que la bandurria. La segunda afinación una octava más baja que la bandurria. Esta última posibilidad es la que se emplea cuando el laúd toca en conjunto.
        </p>
        <div className='w-full grid place-content-center'>
        <p className='font-semibold text-xl border-b-2 border-black w-full text-center'>Partes del Laúd</p>
      </div>
        <div className='w-full h-min md:grid md:place-content-center mt-4'>
              <Image
                      src={laudPartes}
                      alt="guitarra"
                      style={{ height: '400px', width: 'auto', objectFit:'fill', border: '2px solid #fff', borderColor: '#fff', filter: 'grayscale(1)'}}
                    />
              </div>
    </div>
    <div ref={bandurria} className='mt-12 pt-4'>
      <div className='grid place-content-center'>
        <h2 className='text-center border-y-2 mx-auto px-2 text-2xl text-white pb-1'>LA BANDURRIA</h2>
      </div>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>La Pandura</p>
      <p className="floatText drop-shadow-lg mb-8">
        El origen de la bandurria podría venir, aunque no esta del todo demostrado, de la pandura, instrumento que fue extendido por los romanos en los paises del sur de Europa, llegando a gozar de cierta popularidad. El instrumento reproducido en la niña Lutatia, de Mérida, sería un dato que apoyase tal hipótesis. Al producirse el contacto con la civilización árabe la pandura se fusiona con el qupuz árabe dando lugar a los primeros pasos de la bandurria.
      </p>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>La Bandurria en la Edad Media</p>
      <p className="floatText drop-shadow-lg">
      Un documento de 1602, el "inventario de bienes y alhajas" de Felipe II, nos aclara algunas características que, aunque en época más tardía que la estudiada aquí, no están muy lejanas de los modelos más primitivos:
      </p>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
        Una bandurria de cuatro órdenes, la tapa de enebro y barriga de concha natural de tortuga. Otra bandurrilla de cuatro órdenes, de boj, con un rostro de mujer por remate.
      </p>
      <p className="floatText drop-shadow-lg mb-8  ">
      Podemos inferir de estos datos que en Castilla se llamaba "Bandurria" a instrumentos de contorno ovalado, fondo abomabado y clavijero en hoz con una talla en el extremo. El número de órdenes no sobrepasaría los tres durante los siglos medievales. El diminutivo indica que la bandurria era de por sí un instrumento pequeño. En la edad media la tapa del vientre no era de madera sino de piel, y esto hacía que no pudiera ser usado un cordal puente adosado a la tapa como lo hacia el laúd, teniendo que sujetar el cordal en la parte inferior del instrumento.
      </p>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>La Bandurria en el barroco</p>
      <p className="floatText drop-shadow-lg">
      Durante la edad media y el renacimiento la bandurria se fue asentando como instrumento pero no se llega a definir, así podemos decir que los españoles de los siglos XVII y XVIII entendían por bandurria un instrumento pequeño, provisto de órdenes dobles, tañido con púa, de tesitura aguda y de carácter popular. Según esto, lo mismo que entendemos nosotros. Pero no, todavía no existían modelos patentados, la bandurria o mejor las bandurrias podían diferir en detalles importantes a nuestros ojos: ser tañidas con los dedos, tener las cuerdas simples, etc. Veamos las características más importantes de esta época:
      </p>
      <p className='textSM ml-8 md:ml-12 font-serif font-light py-2 pt-4 drop-shadow-lg pr-4 md:pr-0 text-center'>
      El tamaño variaba de un modelo a otro pero siempre entre unos limites de instrumento pequeño.
      </p>
      <p className='textSM ml-8 md:ml-12 font-serif font-light pb-2 drop-shadow-lg pr-4 md:pr-0 text-center'>
      El contorno tipo pera y el fondo abombado, aunque a finales del barroco se introduce el fondo plano, no alcanzó una gran difusión en esta época.
      </p>
      <p className='textSM ml-8 md:ml-12 font-serif font-light pb-2 drop-shadow-lg pr-4 md:pr-0 text-center'>
      El numero de cuerdas aumenta pasando de las tres órdenes en la edad media a cuatro a principios del barroco, llegando incluso a cinco órdenes al final de este.
      </p>
      <p className='textSM ml-8 md:ml-12 font-serif font-light pb-2 drop-shadow-lg pr-4 md:pr-0 text-center mb-8'>
      La afinación del instrumento no esta muy clara y se pueden encontrar distintas afinaciones en escritos de la época.
      </p>
      <p className='font-semibold text-xl mb-4 border-b-2 border-black w-fit'>La Bandurria actual</p>
      <p className="floatText drop-shadow-lg mb-8">
      El siglo XIX es un periodo decisivo para la consolidación de la bandurria. Mantiene el contorno tipo pera del siglo anterior pero el fondo del instrumento tiende a ser plano, añade un sexto orden definitivo, fijándose prácticamente la afinación y comienza a generalizarse el uso de cuerdas metálicas. Esto último dará lugar a modificaciones en la sonoridad y construcción del instrumento.
      </p>
      <div className='w-full grid place-content-center'>
        <p className='font-semibold text-xl border-b-2 border-black w-full text-center'>Partes de la Bandurria</p>
      </div>
      <div className='w-full h-min md:grid md:place-content-center mb-4 mt-4'>
              <Image
                      src={bandurriaPartes}
                      alt="guitarra"
                      style={{ height: '250px', width: 'auto', objectFit:'fill', border: '2px solid #fff', borderColor: '#fff', filter: 'grayscale(1)'}}
                    />
              </div>
    </div>
    </div>
</div>
  )
}

export default Instrumentos