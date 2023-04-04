import React from 'react';
import { TouchableOpacityProps, TextProps } from 'react-native';

interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
    title: string;
    titleStyle: TextProps;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
