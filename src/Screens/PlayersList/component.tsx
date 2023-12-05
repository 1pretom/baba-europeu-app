import React from "react";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { Loading } from "../../components/ActivityIndicator/component";
import { NextFut } from "../../components/NextFut";
import * as S from "./styles";

export const PlayersList = () => {
  return (
    <S.Container>
      <Header />
      <Loading />
      <NextFut />

      <StatusBar style="auto" />
    </S.Container>
  );
};
export default PlayersList;
