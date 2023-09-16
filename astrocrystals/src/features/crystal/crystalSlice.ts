// src/features/crystal/crystalSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CrystalState {
  value: number;
}

const initialState: CrystalState = {
  value: 0,
};

const crystalSlice = createSlice({
  name: 'crystal',
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

export const {increment, decrement, set} = crystalSlice.actions;
export default crystalSlice.reducer;
