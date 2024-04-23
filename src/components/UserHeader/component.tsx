import { UserPhoto } from "@components/UserPhoto";
import * as S from "./styles";
import { TUserHeaderProps } from "./types";
import { ButtonIcon } from "@components/ButtonIcon";
import { useAuth } from "@hooks/useAuth";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";

export const UserHeader = ({
  name,
  onPress,
  onPressUserPhoto,
}: TUserHeaderProps) => {
  const { user } = useAuth();
  return (
    <S.Container>
      <UserPhoto
        alt="profile picture"
        source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
        size={30}
        onPress={onPressUserPhoto}
      />
      <S.Saudation>Olá </S.Saudation>
      <S.UserName>{name}</S.UserName>
      <ButtonIcon icon="logout" onPress={onPress} />
    </S.Container>
  );
};
