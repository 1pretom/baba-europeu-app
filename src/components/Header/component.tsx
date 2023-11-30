import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { styles } from "./styles";
import {TITLE_TEXT} from './constants'

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./../../../assets/baba-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{TITLE_TEXT}</Text>
    </SafeAreaView>
  );
};
