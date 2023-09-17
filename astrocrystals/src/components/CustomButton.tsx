import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from './Loader';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  styleType: 'big' | 'base';
  iconName?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  styleType,
  iconName,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [opacity] = useState(new Animated.Value(1));
  const buttonStyle =
    styleType === 'big' ? styles.bigButton : styles.baseButton;
  const textStyle = styleType === 'big' ? styles.bigText : styles.baseText;

  const handlePress = () => {
    // Fade out the text
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIsLoading(true); // Show loader
    });

    // Trigger the onClick prop
    onClick();

    // For demonstration, setting back to original state after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      // Fade in the text
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, 3000);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, buttonStyle]}>
      <View style={styles.buttonContent}>
        {iconName && !isLoading && (
          <Icon name={iconName} size={24} color="white" style={styles.icon} />
        )}
        {!isLoading ? (
          <Loader />
        ) : (
          <Animated.Text style={[styles.text, textStyle, {opacity}]}>
            {label}
          </Animated.Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  bigButton: {
    width: 200,
    height: 60,
  },
  baseButton: {
    width: 150,
    height: 40,
  },
  bigText: {
    fontSize: 20,
  },
  baseText: {
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
});

export default CustomButton;

