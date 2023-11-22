import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import PlayersList from "./Screens/PlayersList";

export default function App() {
  return (
    <View>
      <PlayersList />
    </View>
  );
}
