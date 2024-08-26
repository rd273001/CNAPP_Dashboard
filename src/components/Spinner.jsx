import React from 'react';

const Spinner = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <hr className='border-[5px] size-12 animate-spin border-t-blue-500 border-b-black rounded-full' />
    </div>
  );
};

export default Spinner;