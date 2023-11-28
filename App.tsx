import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./src/Screens/PlayersList/styles";
import { PlayersList } from "./src/Screens/PlayersList/component";
import { Footer } from "./src/components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <PlayersList />
      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}
