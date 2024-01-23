import { configureStore } from '@reduxjs/toolkit';
import favortiesReducer from './favorties';

export const store = configureStore({
  reducer: {
    favoriteMeals: favortiesReducer
  }
});