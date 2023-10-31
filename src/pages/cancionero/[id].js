import { useRouter } from 'next/router';
import HeaderNotMain from '../components/header/headerNotMain';
import Footer from '../components/footer/footer';
import pandereta from '../../img/pandereta.svg';
import Image from 'next/image';

const DynamicContent = () => {
  const router = useRouter();
  const { id } = router.query;

  const songText = `Itroducción: Re7 Sol Si7 Mim Re7 Sol Si7 Mim Si7 Mim Si7 Mim
  
  Mim
  A mi palomita
  Sol  	La  	Sol
  se  	la han robado  	cuatro corace	ros
  La  	Sol
  a ver si puedo  	rescatarla
  Si7  	Mim
  con cuatro rifle	ros.
  
  Do  	Sol
  Fuerza sí,  	fuerza no,
  La  	Sol
  quiero rescatarte mi  	niña,
  La  	Sol
  para fuerza  	basto yo,
  Si7  	Mim
  pobre mi choli	tay.
  
  Do  	Sol
  Por cerros y valles,  	entre las montañas,
  La  	Sol
  a orillas del lago,  	en la selva o braña
  La  	Sol
  no hay escondite pro	fundo y lejano
  Si7  	Mim
  que no pueda encon	trar.
  
  Mim  	Mim  	Sol
  A mi palomita (  	Por cerros y valles,  	entre las montañas,)
  Sol  	La  	Sol  	La  	Sol
  se  	la han robado  	cuatro corace	ros (  	a orillas del lago,  	en la selva o braña )
  La  	Sol  	La  	Sol
  a ver si puedo  	rescatarla (  	no hay escondite pro	fundo y lejano )
  Si7  	Mim  	Si7  	Mim
  con cuatro rifle	ros. (  	que no pueda encon	trar. )`;
  
  const formattedSong = songText.replace(/(?:\r\n|\r|\n)/g, '<br />');



  return (
    <div className="form-bg-fixed  w-full flex flex-col gap-8 shadow-inset-top-lg md:shadow-inset-top-md h-cancionero">
      <HeaderNotMain type={''}/>
      <div className='w-5/6 mx-auto h-1/4 mt-4'>   
          <div className=' border-2 h-56 md:h-24 historia-nav-bg relative'>
            <div className='w-full h-full lg:pl-4 md:px-8 text-white text-center absolute bottom-0 left-0 grid place-content-center py-auto'>
                <h1 className='text-xl md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-2 border-x-0 font-beautique'>{id}</h1>
            </div>
          </div>
        </div>
      <div className="w-full flex justify-center h-auto flex-row">
      <div className='hidden w-1/6 max-h-max md:flex justify-center items-end text-white mt-20'>< div className='drop-shadow-xl'><Image
                  src={pandereta}
                  width={100}
                  height={100}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem',filter: 'brightness(0) invert(1)'}}
            /></div>
        </div>
        <ul className="w-5/6 flex flex-col p-4 md:p-8 md:py-6  gap-2 h-auto shadow-lg border-2 bg-white/10 rounded-sm">
        <div dangerouslySetInnerHTML={{ __html: formattedSong }} />
        </ul>
        <div className='hidden w-1/6 max-h-max md:flex justify-center items-end text-white mt-20'>< div className='drop-shadow-xl'><Image
                  src={pandereta}
                  width={100}
                  height={100}
                  alt="logoupv"
                  className="image-with-shadow"
                  style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.2rem',filter: 'brightness(0) invert(1)'}}
            /></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DynamicContent;