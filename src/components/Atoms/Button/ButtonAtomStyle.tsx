import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from '../../../constants/styleVariables';

export const style = StyleSheet.create({
  buttonContainer: buttonType => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: buttonType === 'red' && COLORS.appRed,
    height: 56,
    borderRadius: 18,
  }),
  buttonText: {
    color: COLORS.appWhite,
    fontSize: FONT_SIZE.size16,
    fontWeight: 'bold',
  },
});

export default style;
