import { configureStore } from '@reduxjs/toolkit';
import timeReducer from './timeSlice';
import timerReducer from './timerSlice';

export const store = configureStore({
  reducer: {
    time: timeReducer,
    timer: timerReducer,
  },
});