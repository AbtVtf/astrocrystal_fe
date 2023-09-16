import React, {useEffect} from 'react';
import {BackHandler, Text, TouchableOpacity, View} from 'react-native';

// STYLES
import style from './AuthStyle';

// LIBRARIES
import {useNavigation} from '@react-navigation/native';

// MISC

// REDUX

// COMPONENTS
import ButtonAtom from 'components/Atoms/Button/ButtonAtom';

const Auth = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const navigation = useNavigation();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <View style={style.container}>
      <Text style={style.title}>Auth page</Text>
      <View style={style.buttonsContainer}>
        <ButtonAtom
          handlePressButton={() => navigation.navigate('Login')}
          text="Login"
        />
        <ButtonAtom
          handlePressButton={() => navigation.navigate('RegisterNavigator')}
          text="Register"
        />
      </View>
    </View>
  );
};

export default Auth;
