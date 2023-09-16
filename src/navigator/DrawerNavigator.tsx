import React from 'react';

// STYLES

// LIBRARIES
import {createDrawerNavigator} from '@react-navigation/drawer';

// MISC

// REDUX

// COMPONENTS
import Authenticated from 'views/Authenticated/Authenticated';
import BottomNavigator from './BottomNavigator';

const DrawerNavigator = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const Drawer = createDrawerNavigator();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Drawer.Navigator
      initialRouteName="Authenticated"
      // drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        // drawerActiveTintColor: COLORS.appBlack,
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStyle: {
          // backgroundColor: COLORS.appBlack,
        },
      }}>
      <Drawer.Screen
        name="Authenticated"
        component={Authenticated}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Home"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
