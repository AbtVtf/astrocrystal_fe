import React from 'react';

// STYLES

// LIBRARIES
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// MISC

// REDUX

// COMPONENTS
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const MainNavigator = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const Stack = createNativeStackNavigator();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthNavigator" exact>
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
