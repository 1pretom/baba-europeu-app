import * as S from "./styles";
import React from "react";
import { UserHeader } from "@components/UserHeader";
import { useNavigation } from "@react-navigation/native";

export const MatchSettings = () => {
  const navigation = useNavigation();
  const handlePressExit = () => {
    navigation.navigate("SignIn");
  };
  return (
    <S.Container>
      <UserHeader name="Washigton" onPress={handlePressExit} />

      <S.TextInsideImage>Configurações da partida</S.TextInsideImage>
    </S.Container>
  );
};
