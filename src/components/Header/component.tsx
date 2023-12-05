import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import * as S from "./styles";
import { TITLE_TEXT } from "./constants";

export const Header = () => {
  return (
    <S.Container>
      <S.Image source={require("@assets/baba-logo.png")} />
      <S.Text>{TITLE_TEXT}</S.Text>
    </S.Container>
  );
};
