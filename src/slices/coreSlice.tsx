// REDUX
import {createSlice} from '@reduxjs/toolkit';

export const coreSlice = createSlice({
  name: 'core',
  initialState: {
    isLoading: false,
  },
  reducers: {
    handleLogOut: (state, action) => {
      console.log('state', state);
      console.log('action', action);
    },
  },
  extraReducers: {},
});

export default coreSlice.reducer;
