// src/screens/HomeScreen.tsx
import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../utils/colors';
import {fontSizes, fontFamilies} from '../utils/fonts';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '98%',
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingTop: 10,
    // paddingLeft: 2,
    // paddingRight: 2,
  },
  welcome: {
    fontSize: fontSizes.xlarge,
    fontFamily: fontFamilies.spaceGrotesk,
    textAlign: 'center',
    margin: 10,
  },
});

const HomeScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#faf1ff', '#f8e6f6', '#f8e5f6', '#fef7fd']}
      style={styles.container}>
      <View style={styles.container}>
        {/* <LinearGradient colors={['#FF00FF', '#f8e6f6', '#f8e5f6', '#fef7fd']} style={styles.container}> */}
        <Text style={styles.welcome}>Star. Crystal. Sign</Text>
        {/* </LinearGradient> */}
      </View>
      <CustomButton label="Button" styleType="base" onClick={() => {}} />
    </LinearGradient>
  );
};

export default HomeScreen;

