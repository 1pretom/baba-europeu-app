import { View, Text } from "react-native";
import * as S from "./styles";
import React from "react";
import { UserHeader } from "@components/UserHeader";

export const MatchSettings = () => {
  return (
    <S.Container>
      <UserHeader name='washigtn' />

      <S.TextInsideImage>Configurações da partida</S.TextInsideImage>
    </S.Container>
  );
};
