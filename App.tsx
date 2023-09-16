import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// STYLES

// LIBRARIES
import FlashMessage from 'react-native-flash-message';

// MISC
import {useDeviceTheme} from './src/hooks/useDeviceTheme';
import {setI18nConfig, translate} from './src/config/translateConfig';
import MainNavigator from './src/navigator/MainNavigator';

// REDUX

// COMPONENTS

// GENERAL CONSTANTS

const App = () => {
  const isDarkMode = useDeviceTheme();

  useEffect(() => {
    setI18nConfig();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={style.container}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          hidden={false}
          backgroundColor={!isDarkMode ? 'white' : 'black'}
          translucent
        />
      </SafeAreaView>
      <FlashMessage position="top"/>
      <MainNavigator />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
