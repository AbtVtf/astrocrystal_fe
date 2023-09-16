import React from 'react';

// STYLES

// LIBRARIES
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// MISC

// REDUX

// COMPONENTS
import Login from '../views/Login/Login';
import RegisterNavigator from './RegisterNavigator';
import Auth from '../views/Auth/Auth';

const AuthNavigator = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const Stack = createNativeStackNavigator();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false, gestureEnabled: true}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterNavigator"
        component={RegisterNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
