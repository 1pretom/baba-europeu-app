import { UserPhoto } from "@components/UserPhoto";
import * as S from "./styles";
import { TUserHeaderProps } from "./types";

export const HomeHeader = ({ name }: TUserHeaderProps) => {
  return (
    <S.Container>
      <UserPhoto
        alt="profile picture"
        source={{ uri: "https://github.com/1pretom.png" }}
      />
      <S.Saudation>Olá</S.Saudation>
      <S.UserName>{name}</S.UserName>
    </S.Container>
  );
};
