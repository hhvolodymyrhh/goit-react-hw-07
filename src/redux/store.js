import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';
import filterReducer from './filterSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});