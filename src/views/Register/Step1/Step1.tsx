import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// STYLES
import style from './Step1Style';

// LIBRARIES
import {useNavigation} from '@react-navigation/native';

// MISC

// REDUX

// COMPONENTS
import ButtonAtom from '../../../components/Atoms/Button/ButtonAtom';

const Step1 = () => {
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
      <Text style={style.title}>Step1 page</Text>
      <View style={style.buttonsContainer}>
        <ButtonAtom
          handlePressButton={() => navigation.navigate('Step2')}
          text="Go to step2"
        />
        <ButtonAtom
          handlePressButton={() => navigation.goBack()}
          text="Go back"
        />
      </View>
    </View>
  );
};

export default Step1;
