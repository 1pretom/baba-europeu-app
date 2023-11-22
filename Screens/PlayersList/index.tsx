import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Header } from "../../components/Header";
import { Loading } from "../../components/ActivityIndicator";
import { Footer } from "../../components/Footer";
import { NextFut } from "../../components/NextFut";
import { styles } from "./styles";

export default function PlayersList() {
  return (
    <View style={styles.container}>
      <Header />
      <Loading />
      <NextFut />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}
