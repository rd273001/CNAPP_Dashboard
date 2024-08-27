import { createSlice } from '@reduxjs/toolkit';
import { initialDashboardData } from '../../../dashboardData';

const widgetsSlice = createSlice( {
  name: 'categories',
  initialState: {
    searchTerm: '',
    categories: initialDashboardData.categories,
    categoriesWithSelectedWidgets: initialDashboardData.categories,   // initially keeping all widgets selected as default
    currentCategoryId: '',
    widgetIdToDelete: '',   // widget id for deleting widget from category on click of Cross(❌) icon
  },
  reducers: {
    setSearchTerm: ( state, action ) => {
      state.searchTerm = action.payload;
    },
    setCategoryId: ( state, action ) => {
      state.currentCategoryId = action.payload;
    },
    addWidget: ( state, action ) => {
      const { categoryId, widget } = action.payload;
      // retrieving the particular category object from both categories & categoriesWithSelectedWidgets
      const category = state.categories.find( cat => cat.id === categoryId );
      const categoryInSelectedWidgets = state.categoriesWithSelectedWidgets.find( cat => cat.id === categoryId );
      if ( category && categoryInSelectedWidgets ) {
        category.widgets.push( widget );
        categoryInSelectedWidgets.widgets.push( widget );   // also add to selected widgets
      }
    },
    setWidgetId: ( state, action ) => {
      state.widgetIdToDelete = action.payload;
    },
    removeWidget: ( state, action ) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find( category => category.id === categoryId );
      const categoryInSelectedWidgets = state.categoriesWithSelectedWidgets.find( cat => cat.id === categoryId );
      if ( categoryInSelectedWidgets ) {
        categoryInSelectedWidgets.widgets = categoryInSelectedWidgets.widgets.filter( widget => widget.id !== widgetId );
        category.widgets = category.widgets.filter( widget => widget.id !== widgetId );
      }
    },
    updateCategoriesWithSelectedWidgets: ( state, action ) => {
      state.categoriesWithSelectedWidgets = action.payload;
    }
  },
} );

export const { setSearchTerm, setCategoryId, addWidget, setWidgetId, removeWidget, updateCategoriesWithSelectedWidgets } = widgetsSlice.actions;
export default widgetsSlice.reducer;