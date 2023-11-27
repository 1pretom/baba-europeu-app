import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./Screens/PlayersList/styles";
import { PlayersList } from "./Screens/PlayersList/component";
import { Footer } from "./components/Footer";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      <PlayersList />
      <StatusBar style="auto" />
      <NavigationContainer>
        <Footer navigation={navigator} />
      </NavigationContainer>
    </View>
  );
}