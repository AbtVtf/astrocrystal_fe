// src/components/Navbar.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AnagramScreen from '../screens/AnagramScreen';
import CrystalsScreen from '../screens/CrystalScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 4,
  },
});

const Navbar: React.FC = () => {
  return (
    <Tab.Navigator tabBar={this} screenOptions={{}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Anagram" component={AnagramScreen} />
      <Tab.Screen name="Crystals" component={CrystalsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Page5" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Navbar;
