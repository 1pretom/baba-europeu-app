import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Rankings } from "../Screens/Rankings";
import { ClassicTeam } from "../Screens/ClassicTeam";
import { ClassicScreen } from "../Screens/ClassicScreen";
import { ClassicPlayers } from "../Screens/ClassicPlayers";

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
    </Stack.Navigator>
  );
};
