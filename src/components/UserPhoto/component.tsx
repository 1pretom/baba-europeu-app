import { Image } from "react-native";
import { TUserPhotoProps } from "./types";

export const UserPhoto = ({ size, ...rest }: TUserPhotoProps) => {
  return (
    <Image
      style={{ marginRight: 4, borderWidth: 2, borderColor: "red" }}
      borderRadius={30}
      height={size}
      width={size}
      {...rest}
    />
  );
};
