import { createSlice } from '@reduxjs/toolkit';

const modalVisibilitySlice = createSlice( {
  name: 'modalVisibility',
  initialState: {
    addWidgetForm: false,
    deleteWidgetAlert: false,
    addWidgetSidebar: false,
  },
  reducers: {
    toggleAddWidgetFormVisibility: ( state ) => {
      state.addWidgetForm = !state.addWidgetForm;
    },
    toggleDeleteWidgetAlertVisibility: ( state ) => {
      state.deleteWidgetAlert = !state.deleteWidgetAlert;
    },
    toggleAddWidgetSidebarVisibility: ( state ) => {
      state.addWidgetSidebar = !state.addWidgetSidebar;
    },
  },
} );

export const { toggleAddWidgetFormVisibility, toggleDeleteWidgetAlertVisibility, toggleAddWidgetSidebarVisibility } = modalVisibilitySlice.actions;
export default modalVisibilitySlice.reducer;