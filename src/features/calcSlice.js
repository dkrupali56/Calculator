import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: []
};

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCalc: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.history= action.payload.history;
    }
  },
});

export const { addCalc, deleteCalc } = calcSlice.actions;

export default calcSlice.reducer;
