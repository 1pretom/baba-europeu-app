import React from "react";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { Loading } from "../../components/ActivityIndicator/component";
import { NextFut } from "../../components/NextFut";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";

export const PlayersList = () => {
  return (
    <S.Container>
      <Highlight title="Times" subtitle="Adicione os jogadores" />
      <NextFut />

      <StatusBar style="auto" />
    </S.Container>
  );
};
export default PlayersList;
