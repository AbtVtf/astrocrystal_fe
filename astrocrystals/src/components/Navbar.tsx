// src/components/Navbar.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AnagramScreen from '../screens/AnagramScreen';
import CrystalsScreen from '../screens/CrystalScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Navbar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Anagram" component={AnagramScreen} />
      <Tab.Screen name="Crystals" component={CrystalsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Page5" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Navbar;
