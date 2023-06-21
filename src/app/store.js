import { configureStore } from '@reduxjs/toolkit';
import calcReducer from '../features/calcSlice';

export const store = configureStore({
  reducer: {
    calculations: calcReducer,
  },
});
