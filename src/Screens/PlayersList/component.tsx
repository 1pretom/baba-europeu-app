import React from "react";
import { StatusBar } from "expo-status-bar";
import { NextFut } from "../../components/NextFut";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { UserHeader } from "@components/UserHeader";
import { useNavigation } from "@react-navigation/native";

export const PlayersList = () => {
  const navigation = useNavigation();
  const handlePressExit = () => {
    navigation.navigate("SignIn");
  };
  const handlePressUserPhoto = () => {
    navigation.navigate("Profile");
  };
  return (
    <S.Container>
      <UserHeader
        onPressUserPhoto={handlePressUserPhoto}
        name="Washington"
        onPress={handlePressExit}
      />
      <Highlight title="Times" subtitle="Adicione os jogadores" />
      <NextFut />

      <StatusBar style="auto" />
    </S.Container>
  );
};
export default PlayersList;
