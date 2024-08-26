import { createSlice } from '@reduxjs/toolkit';
import { initialDashboardData } from '../../../dashboardData';

const widgetsSlice = createSlice( {
  name: 'categories',
  initialState: {
    searchTerm: '',
    categories: initialDashboardData.categories,
    categoriesWithSelectedWidgets: initialDashboardData.categories,   // initially keeping all widgets selected as default
  },
  reducers: {
    setSearchTerm: ( state, action ) => {
      state.searchTerm = action.payload;
    },
  },
} );;

export const { setSearchTerm } = widgetsSlice.actions;
export default widgetsSlice.reducer;