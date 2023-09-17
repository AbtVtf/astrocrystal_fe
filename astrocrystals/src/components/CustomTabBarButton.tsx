// CustomTabBarButton.tsx
import React from 'react';
import CustomButton from './CustomButton';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

const CustomTabBarButton: React.FC<
  BottomTabBarButtonProps & {label: string; iconName: string}
> = ({label, iconName, ...props}) => {
  return (
    <CustomButton
      label={label}
      onClick={() => {}}
      styleType="base"
      iconName={iconName}
      {...props}
    />
  );
};

export default CustomTabBarButton;

