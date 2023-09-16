import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

// STYLES
import style from './BottomScreen1Style';

// ASSETS
import HamburgerIcon from 'assets/Icons/HamburgerMenuIcon.svg';

// LIBRARIES
import {useNavigation} from '@react-navigation/native';
import {showMessage, hideMessage} from 'react-native-flash-message';

// MISC

// REDUX

// COMPONENTS
import ButtonAtom from '../../components/Atoms/Button/ButtonAtom';

const BottomScreen1 = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const navigation = useNavigation();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleShowMessage = () => {
    showMessage({
      message: 'Test flash message',
      // description: 'My message description',
      type: 'default',
      backgroundColor: '#347CB6', // background color
      color: 'white', // text color
      statusBarHeight: 30,
    });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>BottomScreen1 page</Text>
      <View style={style.buttonsContainer}>
        <ButtonAtom
          handlePressButton={handleShowMessage}
          text="Test flash message"
        />
        <ButtonAtom
          handlePressButton={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'AuthNavigator'}],
            })
          }
          text="Logout"
        />
      </View>
    </View>
  );
};

export default BottomScreen1;
