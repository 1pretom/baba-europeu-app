import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { Header } from "../../components/Header";
import { Loading } from "../../components/ActivityIndicator/component";
import { NextFut } from "../../components/NextFut";
import { styles } from "./styles";

export const PlayersList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Loading />
      <NextFut />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
export default PlayersList;
