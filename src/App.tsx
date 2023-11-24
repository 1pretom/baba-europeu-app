import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./Screens/PlayersList/styles";
import { PlayersList } from "./Screens/PlayersList/component";



export default function App() {
  return (
    <View style={styles.container}>
  <PlayersList/>
    <StatusBar style="auto" />
  </View>
  );
}
