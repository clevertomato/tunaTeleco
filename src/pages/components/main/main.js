import React, { useEffect, useState } from 'react';


function Main() {
  // State variable to store the height
  const [divHeight, setDivHeight] = useState(0); // Initialize with 0

  // Add an event listener to update the height on window resize
  useEffect(() => {
    setDivHeight(window.innerHeight);
  }, []);

  // Style object for the div element
  const divStyle = {
    height: `${divHeight}px` 
  };

  return (
    <div className='w-auto z-0 relative' style={divStyle}>
      <div className='h-full w-full text-center absolute flex flex-row z-10'>
          <div className='w-full lg:pl-4 md:px-8 text-white text-center absolute bottom-0 left-0 grid place-content-center py-8'>
              <div className='text-2xl md:text-4xl lg:text-5xl cajatexto overflow-hidden shadowtext text-center border-2 border-x-0'>la TUNA de</div>
              <div className='text-2xl md:text-4xl lg:text-5xl cajatexto overflow-hidden shadowtext text-center border-b-2'>Ingenieros</div>
              <div className='sm:text-lg md:text-2xl lg:text-4xl cajatexto overflow-hidden shadowtext text-center border-b-2 py-1'>de TELECOMUNICACIONES</div>
          </div>
          
      </div>
      <div className='h-full bottom-0 w-full flex flex-col rounded-md '>
          <div className='w-full linear-bg absolute z-0'></div>
      </div>
    </div>
  )
}

export default Main