import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as S from "./src/Screens/PlayersList/styles";
import { Routes } from "@routes/index";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/ActivityIndicator";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <StatusBar style="auto" />
        {fontsLoaded ? <Routes /> : <Loading />}
      </S.Container>
    </ThemeProvider>
  );
}
