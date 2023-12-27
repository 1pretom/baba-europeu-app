import React from "react";
import * as S from "./styles";
import { TITLE_TEXT } from "./constants";

import babaLogo from "@assets/baba-logo.png";
import { THeader } from "./types";
import { useNavigation } from "@react-navigation/native";

export const ClassicHeader = ({ showBackButton = false }: THeader) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.navigate("ClassicScreen");
  };
  return (
    <S.Container>
      {showBackButton ? (
        <>
          <S.BackButton onPress={handleGoBack}>
            <S.BackIcon />
          </S.BackButton>
          <S.Image source={babaLogo} />
        </>
      ) : (
        <>
          <S.Image source={babaLogo} />
          <S.Text>{TITLE_TEXT}</S.Text>
        </>
      )}
    </S.Container>
  );
};
