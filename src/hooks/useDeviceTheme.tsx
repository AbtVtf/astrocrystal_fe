import {useColorScheme} from 'react-native';

export const useDeviceTheme: boolean = () => {
  if (useColorScheme() === 'dark') {
    return true;
  } else {
    return false;
  }
};
