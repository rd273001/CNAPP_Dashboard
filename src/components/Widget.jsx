import React from 'react';

const Widget = ( { widget } ) => {
  return (
    <div className='w-full min-h-56 p-4 bg-white rounded-lg flex flex-col shadow-md relative'>
      <p className='text-lg font-semibold'>{ widget?.name }</p>
    </div>
  );
};

export default Widget;