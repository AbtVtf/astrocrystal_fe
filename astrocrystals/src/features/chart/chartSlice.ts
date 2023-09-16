// src/features/crystal/chartSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CrystalState {
  value: number;
}

const initialState: CrystalState = {
  value: 0,
};

const chartSlice = createSlice({
  name: 'chart',
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

export const {increment, decrement, set} = chartSlice.actions;
export default chartSlice.reducer;
