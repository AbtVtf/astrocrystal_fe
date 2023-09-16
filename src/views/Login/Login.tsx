import React from 'react';
import {Text, View} from 'react-native';

// STYLES
import style from './LoginStyle';

// LIBRARIES
import {useNavigation} from '@react-navigation/native';
import ButtonAtom from '../../components/Atoms/Button/ButtonAtom';

// MISC

// REDUX

// COMPONENTS

const Login = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const navigation = useNavigation();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <View style={style.container}>
      <Text style={style.title}>Login page</Text>
      <View style={style.buttonsContainer}>
        <ButtonAtom
          handlePressButton={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'AppNavigator'}],
            })
          }
          text="Login"
        />
        <ButtonAtom
          handlePressButton={() => navigation.goBack()}
          text="Go back"
        />
      </View>
    </View>
  );
};

export default Login;
