import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/baba-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Baba Europeu App</Text>
    </View>
  );
};
