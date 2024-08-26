import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './dashboard/widgetsSlice';

const store = configureStore( {
  reducer: {
    categories: widgetsReducer,
  },
} );

export default store;