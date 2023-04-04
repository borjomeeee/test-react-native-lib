import React from 'react';
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
  title: string;
  titleStyle: TextProps;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  titleStyle,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
