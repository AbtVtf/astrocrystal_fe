// src/features/crystal/userSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CrystalState {
  value: number;
}

const initialState: CrystalState = {
  value: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const {increment, decrement, set} = userSlice.actions;
export default userSlice.reducer;
