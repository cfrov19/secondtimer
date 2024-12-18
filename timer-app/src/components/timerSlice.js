import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    setTimes: [],
  },
  reducers: {
    addSetTime(state, action) {
      state.setTimes.push(action.payload);
    },
  },
});

export const { addSetTime } = timerSlice.actions;
export default timerSlice.reducer;