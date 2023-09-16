import React from 'react';

// STYLES

// LIBRARIES
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// MISC

// REDUX

// COMPONENTS
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';

const AppNavigator = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const Stack = createNativeStackNavigator();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Stack.Navigator initialRouteName="DrawerNavigator">
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
