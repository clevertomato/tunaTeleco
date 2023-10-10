import React from 'react';

function ErrorMessage({error}) {
  return (
    <div className=" text-center w-auto bg-red-600 py-2 rounded absolute border-2 shadow-md shadow-black mr-8 md:mr-0 mx-auto px-8">
      <p className='text-white p-2'>{error}</p>
    </div>
  );
}

export default ErrorMessage;