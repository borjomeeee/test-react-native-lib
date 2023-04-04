import React from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';
interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
    title: string;
    titleStyle: TextProps;
}
export declare const Button: React.FC<ButtonProps>;
export {};
