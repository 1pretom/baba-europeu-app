import { Image, TouchableOpacity } from "react-native";
import { TUserPhotoProps } from "./types";

export const UserPhoto = ({onPress, size, ...rest }: TUserPhotoProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{ marginRight: 4, borderWidth: 2, borderColor: "red" }}
        borderRadius={30}
        height={size}
        width={size}
        {...rest}
      />
    </TouchableOpacity>
  );
};
