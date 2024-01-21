import * as S from "./styles";
import React from "react";
import { UserHeader } from "@components/UserHeader";
import { useNavigation } from "@react-navigation/native";
import { UserPhoto } from "@components/UserPhoto";

export const Profile = () => {

  return (
    <S.Container>
      <UserPhoto
        style={{ justifyContent: "center", marginTop: 6, padding: 10 }}
        size={140}
        alt="Foto do usuário"
        source={{ uri: "http://github.com/1pretom.png" }}
      />


      <S.TextInsideImage>Configurações da partida</S.TextInsideImage>
    </S.Container>
  );
};
