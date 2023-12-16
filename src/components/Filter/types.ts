import { TouchableOpacityProps } from "react-native";

export type TFilterStyle = {
  isActive?: boolean;
};

export type TFilter = TouchableOpacityProps & TFilterStyle & {
  title: string;
};
