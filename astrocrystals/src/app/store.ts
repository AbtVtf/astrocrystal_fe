// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import crystalReducer from '../features/crystal/crystalSlice';
import userReducer from '../features/user/userSlice';
import chartReducer from '../features/chart/chartSlice';

const store = configureStore({
  reducer: {
    crystal: crystalReducer,
    user: userReducer,
    chart: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
