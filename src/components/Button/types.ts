import { TouchableOpacityProps } from "react-native";

export type ButtonTypeStyle = "PRIMARY" | "SECONDARY" | "TERTIARY" | 'FOURTIARY';

export type TButtonType = {
  type: ButtonTypeStyle;
};

export type TButton = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyle;
};
