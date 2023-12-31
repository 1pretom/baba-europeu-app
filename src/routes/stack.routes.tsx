import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClassicPlayers } from "@screens/ClassicPlayers";
import { ClassicScreen } from "@screens/ClassicScreen";
import { ClassicTeam } from "@screens/ClassicTeam";
import { SignUp } from "@screens/SignUp";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="ClassicScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="ClassicScreen"
        component={ClassicScreen}
      />
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="NewClassicTeam"
        component={ClassicTeam}
      />
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="ClassicPlayers"
        component={ClassicPlayers}
      />
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};
