// REDUX
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

// SLICES
import coreSlice from '../slices/coreSlice';

const reducers = combineReducers({
  core: coreSlice,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
