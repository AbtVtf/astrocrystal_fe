import React, {useRef} from 'react';
import {Animated} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Loader = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1800,
      useNativeDriver: true,
    }),
  ).start();

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: spin}]}}>
      <Svg width="50" height="50" viewBox="0 0 100 100">
        <Path
          fill="#f3afaf"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        />
      </Svg>
    </Animated.View>
  );
};

export default Loader;

