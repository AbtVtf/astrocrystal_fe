// src/navigation/AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navbar from '../components/Navbar';

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
};

export default AppNavigator;
