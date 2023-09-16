import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// STYLES

// LIBRARIES

// MISC

// REDUX

// COMPONENTS
import BottomScreen1 from 'views/BottomScreen1/BottomScreen1';
import BottomScreen2 from 'views/BottomScreen2/BottomScreen2';
import BottomScreen3 from 'views/BottomScreen3/BottomScreen3';
import BottomScreen4 from 'views/BottomScreen4/BottomScreen4';
import TabBar from 'components/TabBar/TabBar';

const BottomNavigator = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const Tab = createBottomTabNavigator();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Tab.Navigator
    // tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name="BottomScreen1"
        component={BottomScreen1}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BottomScreen2"
        component={BottomScreen2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BottomScreen3"
        component={BottomScreen3}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BottomScreen4"
        component={BottomScreen4}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
