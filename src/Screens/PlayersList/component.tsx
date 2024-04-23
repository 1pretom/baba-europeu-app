import React from "react";
import { StatusBar } from "expo-status-bar";
import { NextFut } from "../../components/NextFut";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { UserHeader } from "@components/UserHeader";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@hooks/useAuth";

export const PlayersList = () => {
  const navigation = useNavigation();
  const {user, signOut} = useAuth()

  const handlePressExit = () => {
    signOut()
    navigation.navigate("SignIn");

  };
  const handlePressUserPhoto = () => {
    navigation.navigate("Profile");
  };
  return (
    <S.Container>
      <UserHeader
        onPressUserPhoto={handlePressUserPhoto}
        name={user.name}
        onPress={handlePressExit}
      />
      <Highlight title="Times" subtitle="Adicione os jogadores" />
      <NextFut />

      <StatusBar style="auto" />
    </S.Container>
  );
};
export default PlayersList;
