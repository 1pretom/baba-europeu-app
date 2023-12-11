import React from "react";
import * as S from "./styles";
import { TITLE_TEXT } from "./constants";

import babaLogo from "@assets/baba-logo.png";
import { THeader } from "./types";

export const Header = ({ showBackButton = false }: THeader) => {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Image source={babaLogo} />
      <S.Text>{TITLE_TEXT}</S.Text>
    </S.Container>
  );
};
