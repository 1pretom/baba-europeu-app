import React from "react";
import * as S from "./styles";
import { TITLE_TEXT } from "./constants";

import babaLogo from "@assets/baba-logo.png"

export const Header = () => {
  return (
    <S.Container>
      <S.Image source={babaLogo} />
      <S.Text>{TITLE_TEXT}</S.Text>
    </S.Container>
  );
};
