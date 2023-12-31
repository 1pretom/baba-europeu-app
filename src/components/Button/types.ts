import { TouchableOpacityProps } from "react-native";

export type ButtonTypeStyle = "PRIMARY" | "SECONDARY" | "TERTIARY";

export type TButtonType = {
  type: ButtonTypeStyle;
};

export type TButton = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyle;
};
