// src/components/Navbar.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Navbar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Page2" component={HomeScreen} />
      <Tab.Screen name="Page3" component={HomeScreen} />
      <Tab.Screen name="Page4" component={HomeScreen} />
      <Tab.Screen name="Page5" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Navbar;
