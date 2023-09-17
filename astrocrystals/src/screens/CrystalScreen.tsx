import React from 'react';
import {View, Text} from 'react-native';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'rgb(131,58,180)',
    background: 'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const CrystalScrenn: React.FC = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>What Crystal are you today?</Text>
          <Text style={styles.welcome}>Eye of the tiger!</Text>
        </View>
      );
  };
  
  export default CrystalScrenn;