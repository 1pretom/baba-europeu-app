import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { TEXT } from "./constants";

export const Footer = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Finances"
        onPress={() => navigation.navigate("Finances")} // Corrected spelling of "Finances"
      />
      <Button
        title="Go to MatchSettings"
        onPress={() => navigation.navigate("MatchSettings")}
      />
      <Button
        title="Go to PlayersList"
        onPress={() => navigation.navigate("PlayersList")}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Go to Rankings"
        onPress={() => navigation.navigate("Rankings")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};