import React from "react";
import * as S from "./styles";
import { TITLE_TEXT } from "./constants";
import { CarretLeft } from "phosphor-react-native";

import babaLogo from "@assets/baba-logo.png";

export const Header = () => {
  return (
    <S.Container>
   <CarretLeft/> 
      <S.Image source={babaLogo} />
      <S.Text>{TITLE_TEXT}</S.Text>
    </S.Container>
  );
};
