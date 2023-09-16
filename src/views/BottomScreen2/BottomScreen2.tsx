import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// STYLES
import style from './BottomScreen2Style';

// ASSETS
import HamburgerIcon from 'assets/Icons/HamburgerMenuIcon.svg';

// LIBRARIES
import {useNavigation} from '@react-navigation/native';

// MISC

// REDUX

// COMPONENTS
import ButtonAtom from '../../components/Atoms/Button/ButtonAtom';

const BottomScreen2 = () => {
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
      <TouchableOpacity onPress={handleOpenDrawer} style={style.hamburgerIcon}>
        <HamburgerIcon />
      </TouchableOpacity>
      <Text style={style.title}>BottomScreen2 page</Text>
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
  );
};

export default BottomScreen2;
