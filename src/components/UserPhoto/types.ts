import { ImageProps } from "react-native";

export type TUserPhotoProps = ImageProps & {
  size?: number;
  onPress?: () => void;
};
