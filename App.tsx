import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as S from "./src/Screens/PlayersList/styles";
import { Routes } from "@routes/index";


export default function App() {
  return (
    <S.Container>
      <StatusBar style="auto" />

      <Routes />
    </S.Container>
  );
}
