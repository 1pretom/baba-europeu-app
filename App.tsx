import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./src/Screens/PlayersList/styles";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Routes />
    </View>
  );
}