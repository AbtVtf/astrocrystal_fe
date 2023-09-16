/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// REDUX
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';

import store from './src/store/store';
import App from './App';

let persistor = persistStore(store);

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
