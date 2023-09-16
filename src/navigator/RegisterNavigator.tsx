import React from 'react';

// STYLES

// LIBRARIES
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// MISC

// REDUX

// COMPONENTS
import Step1 from '../views/Register/Step1/Step1';
import Step2 from '../views/Register/Step2/Step2';

const RegisterNavigator = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const Stack = createNativeStackNavigator();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Step1"
        component={Step1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Step2"
        component={Step2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
