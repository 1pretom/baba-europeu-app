import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type TButtonIconTypeStyle = "PRIMARY" | "SECONDARY";
export type TButtonIconStyle = {
  type: TButtonIconTypeStyle;
};
export type TButtonIcon = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: TButtonIconTypeStyle;
};
