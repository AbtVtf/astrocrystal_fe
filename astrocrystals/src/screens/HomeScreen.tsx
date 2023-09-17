// src/screens/HomeScreen.tsx
import React from 'react';
import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.welcome}>Star. Crystal. Sign</Text>
    </View>
  );
};

export default HomeScreen;
