import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { Loading } from "../../components/ActivityIndicator/component";
import { Footer } from "../../components/Footer";
import { NextFut } from "../../components/NextFut";
import { styles } from "./styles";

export const PlayersList = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Loading />
      <NextFut />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
};
