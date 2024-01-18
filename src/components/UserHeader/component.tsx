import { UserPhoto } from "@components/UserPhoto";
import * as S from "./styles";
import { TUserHeaderProps } from "./types";
import { ButtonIcon } from "@components/ButtonIcon";

export const UserHeader = ({ name, onPress }: TUserHeaderProps) => {
  return (
    <S.Container>
      <UserPhoto
        alt="profile picture"
        source={{ uri: "https://github.com/1pretom.png" }}
      />
      <S.Saudation>Olá</S.Saudation>
      <S.UserName>{name}</S.UserName>
      <ButtonIcon icon="logout" onPress={onPress} />
    </S.Container>
  );
};
