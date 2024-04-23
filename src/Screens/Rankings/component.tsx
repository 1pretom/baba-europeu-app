import { Button } from "@components/Button";
import { UserHeader } from "@components/UserHeader";
import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export const Rankings = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const handleOnPressProfile = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View>
      <Text>rankings</Text>
      <UserHeader name={user.name} />
      <Button title="Go to Profile" onPress={handleOnPressProfile} />
      <Button
        title="Go to PlayersList"
        onPress={() => navigation.navigate("PlayersList")}
      />
    </View>
  );
};
export default Rankings;
