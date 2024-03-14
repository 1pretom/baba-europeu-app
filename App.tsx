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
import { AuthContext } from "@contexts/AuthContext";
import { StatusBar } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";

// import { Mixpanel } from "mixpanel-react-native";

// const trackAutomaticEvents = false;
// Mixpanel.init("9a95d7e3a449ba6373f0840469c5e5de", trackAutomaticEvents);

const CLERK_PUBLISHABLE_KEY =
  "pk_test_bWFqb3ItYmFkZ2VyLTQ3LmNsZXJrLmFjY291bnRzLmRldiQ";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ThemeProvider theme={theme}>
        <S.Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <AuthContext.Provider
            value={{
              id: "1",
              name: "wash",
              email: "wash@gmail.com",
              avatar: "wash.png",
            }}
          >
            {fontsLoaded ? <Routes /> : <Loading />}
          </AuthContext.Provider>
        </S.Container>
      </ThemeProvider>
    // </ClerkProvider>
  );
}
