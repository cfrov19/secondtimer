import { createSlice } from '@reduxjs/toolkit';

const timeSlice = createSlice({
  name: 'time',
  initialState: {
    savedTimes: [], 
  },
  reducers: {
    addSavedTime(state, action) {
      state.savedTimes.push(action.payload); 
    },
  },
});

export const { addSavedTime } = timeSlice.actions;
export default timeSlice.reducer;