import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Loading } from "./components/ActivityIndicator";
import { NextFut } from "./components/NextFut/component";
import { Header } from "./components/Header/component";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Loading />
      <NextFut />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
