import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// STYLES
import style from './ButtonAtomStyle';

// LIBRARIES

// MISC
import {IProps} from './ButtonAtomModel';

// REDUX

// COMPONENTS

const ButtonAtom = (props: IProps) => {
  // PROPS
  const {text = '', buttonType = 'red', handlePressButton} = props;

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <TouchableOpacity
      style={style.buttonContainer(buttonType)}
      onPress={handlePressButton}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAtom;
