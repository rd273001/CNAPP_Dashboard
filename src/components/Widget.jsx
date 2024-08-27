import React, { lazy, Suspense } from 'react';
import { CgClose } from 'react-icons/cg';
import HorizontalLineBar from './HorizontalLineBar';
import Spinner from './Spinner';
const RingChart = lazy( () => import( './RingChart' ) );
import lineChartIcon from '../assets/lineChartIcon.svg';
import { useDispatch } from 'react-redux';
import { setCategoryId, setWidgetId } from '../redux/dashboard/widgetsSlice';
import { toggleDeleteWidgetAlertVisibility } from '../redux/dashboard/modalVisibilitySlice';

const Widget = ( { widget, categoryId } ) => {
  const dispatch = useDispatch();

  const handleWidgetDelete = () => {
    dispatch( setCategoryId( categoryId ) );
    dispatch( setWidgetId( widget.id ) );
    dispatch( toggleDeleteWidgetAlertVisibility() );
  };

  const renderChart = () => {
    switch ( widget?.type ) {
      case 'doughnut':
        return (
          <>
            <Suspense fallback={ <Spinner /> }>
              <RingChart widget={ widget } />
            </Suspense>
            <div className='flex flex-col flex-1 justify-center gap-2'>
              { widget.data.labels.map( ( label, index ) => (
                <div key={ index } className='flex items-center text-balance'>
                  <div
                    className='size-3 rounded mr-2'
                    style={ { backgroundColor: widget.data.datasets[0].backgroundColor[index] } }
                  />
                  <p className='text-xs font-medium'>{ label } ({ widget.data.datasets[0].data[index] })</p>
                </div>
              ) ) }
            </div>
          </>
        );
      case 'horizontalBar':
        return <HorizontalLineBar widget={ widget } />;
      case 'text':
        return <p className='flex flex-1 items-center justify-center text-black'>{ widget?.data ?? 'No data available!' }</p>;
      default:
        return <p className='flex flex-col flex-1 items-center justify-center text-sm'>
          <img src={ lineChartIcon } className='size-20' />No Graph data available!</p>;
    }
  };

  return (
    <div className='w-full min-h-56 p-4 bg-white rounded-lg flex flex-col shadow-md relative group'>
      <button
        onClick={ handleWidgetDelete }
        className='absolute top-1 right-1 text-red-500 hover:text-red-700 hidden group-hover:block'
      >
        <CgClose size={ 25 } className='active:scale-125' />
      </button>
      <h3 className='text-base tracking-tight font-bold -mt-2 mb-2'>{ widget?.name }</h3>
      <div className='w-full flex flex-1 flex-wrap gap-3'>
        { renderChart() }
      </div>
    </div>
  );
};

export default Widget;