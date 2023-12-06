import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as S from "./src/Screens/PlayersList/styles";
import { Routes } from "@routes/index";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <StatusBar style="auto" />

        <Routes />
      </S.Container>
    </ThemeProvider>
  );
}
