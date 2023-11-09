import React from 'react'

function Indumentaria({active}) {
  return (
    <div className={`${active ? 'opacity-100' : 'opacity-0'} transition-all duration-300 h-auto md:px-24  md:pb-4 w-5/6 mx-auto  mb-4 `}>
      <div className='h-auto w-full  bg-white/10 p-4 md:p-8 md:py-6 rounded-sm border md:border-2 shadow-lg'>
      <div className='w-auto lg:pl-4 md:px-8 text-white text-center grid place-content-center pb-8 pt-4'>
        <h1 className='text-xl md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-y-2 border-x-0 font-beautique'>INDUMENTARIA</h1>
      </div>
      <p className="floatText drop-shadow-lg">
      La vestimenta del tuno es, probablemente, uno de los elementos más representativos y tradicionales de la institución tunesca. Con su característico color negro, y su llamativo aspecto, ha permanecido prácticamente invariante a través de los siglos, siendo similar al vestuario utilizado por los antiguos estudiantes de las primeras universidades españolas.
      </p><br/>
      <p className="floatText drop-shadow-lg">
        El <span className="font-semibold">pájaro, grillo o cuervo</span>, que con todos estos nombres se le conoce en la actualidad, se compone de jubón, beca, camisa, calzas, bombachos o gregüescos sobre éstas, y zapatos o botas.
      </p><br/>
      <p className="floatText drop-shadow-lg">
        El <span className="font-semibold">jubón</span> es una chaqueta ceñida al busto que se viste sobre una camisa blanca cuyos puños y cuello son de gran tamaño, frecuentemente acabados en puntillas. El jubón se cita documentalmente por vez primera en la Península Ibérica en 1377, y en el siglo XVI se generalizó su uso como prenda ligera.
      </p><br/>
      <p className="floatText drop-shadow-lg">
        Como <span className="font-semibold">pantalones</span> se utilizan bombachos o gregüescos. Los pantalones bombachos son cortos y anchos, y ceñidos por la parte inferior. Los gregüescos o cervantinos son calzones muy anchos usados sobre todo en los siglos XVI y XVII.
        </p><br/>
      <p className="floatText drop-shadow-lg">
        Las <span className="font-semibold">calzas</span> son prendas que cubren el pié y la pierna hasta la cintura, usándose solas o bajo los gregüescos. Con los pantalones bombachos se utilizan medias calzas, o simplemente medias, que cubren sólo hasta media pierna.
        </p><br/>
      <p className="floatText drop-shadow-lg">
        La <span className="font-semibold">beca</span> es la banda de color que se coloca sobre el pecho y los hombros, por encima del jubón. Antiguamente indicaba que su portador estaba becado por su universidad, y como becario disponía de una ayuda que le hacía menos costosa su estancia en la misma. Los colores de la beca y el escudo que en ella figura bordado identifican la Universidad y la Escuela o Facultad a la que pertenece el tuno. La beca es entregada al tuno por sus compañeros cuando éstos consideran que ha alcanzado el grado suficiente de veteranía, y puede así representar correctamente a su Tuna y, por lo tanto, a su Universidad.
        </p><br/>
      <p className="floatText drop-shadow-lg">
        Otra prenda importante en la indumentaria del tuno es la <span className="font-semibold">capa</span>, prenda de vestir larga y suelta, sin mangas, abierta por delante, que se lleva sobre los vestidos. La capa, además de fiel protectora del tuno en sus noches de frío, representa dos de las condiciones fundamentales del tuno: la de viajero infatigable y la de galán por muchas mujeres amado. Sobre la capa el tuno exhibe los escudos de las ciudades y países que ha recorrido en sus correrías. Muestra así mismo <span className="font-semibold">cintas multicolores</span> bordadas con dedicatorias cariñosas por mujeres que demuestran así al tuno su afecto o su amor. Provengan de una novia, de una madre, o de una amiga, como reza la canción, "cada cinta que adorna su capa guarda un trocito de corazón".
      </p>
    </div>
</div>
  )
}

export default Indumentaria