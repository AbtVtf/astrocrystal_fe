import React from 'react';
import {Text, View} from 'react-native';

// STYLES
import style from './Step2Style';

// LIBRARIES
import {useNavigation} from '@react-navigation/native';

// MISC

// REDUX

// COMPONENTS
import ButtonAtom from '../../../components/Atoms/Button/ButtonAtom';

const Step2 = () => {
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
      <Text style={style.title}>Step2</Text>
      <View style={style.buttonsContainer}>
        <ButtonAtom
          handlePressButton={() => navigation.navigate('Auth')}
          text="Finish register"
        />
        <ButtonAtom
          handlePressButton={() => navigation.goBack()}
          text="Go back"
        />
      </View>
    </View>
  );
};

export default Step2;
