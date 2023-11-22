import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import {TITLE_TEXT} from './constants'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/baba-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{TITLE_TEXT}</Text>
    </View>
  );
};
