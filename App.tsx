import "react-native-gesture-handler";
import React from "react";
import * as S from "@screens/PlayersList/styles";
import { Routes } from "@routes/index";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { AuthContextProvider } from "@contexts/AuthContext";
import { StatusBar } from "react-native";

import { ClerkProvider } from "@clerk/clerk-expo";

import { Mixpanel } from "mixpanel-react-native";

// const trackAutomaticEvents = false;
// Mixpanel.init(MIX_PANEL_INIT_KEY, trackAutomaticEvents);



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthContextProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </AuthContextProvider>
      </S.Container>
    </ThemeProvider>
  );
}
