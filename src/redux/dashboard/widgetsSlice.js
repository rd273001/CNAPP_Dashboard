import { createSlice } from '@reduxjs/toolkit';

const widgetsSlice = createSlice( {
  name: 'categories',
  initialState: {
    searchTerm: ''
  },
  reducers: {
    setSearchTerm: ( state, action ) => {
      state.searchTerm = action.payload;
    }
  },
} );;

export const { setSearchTerm } = widgetsSlice.actions;
export default widgetsSlice.reducer;