import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Rankings } from "../Screens/Rankings";
import { NewClassicTeam } from "../Screens/ClassicTeam";
import { ClassicScreen } from "../Screens/ClassicScreen";
import { ClassicPlayers } from "../Screens/ClassicPlayers";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="PlayersList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="ClassicScreen"
        component={ClassicScreen}
      />
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="Rankings"
        component={Rankings}
      />
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="NewClassicTeam"
        component={NewClassicTeam}
      />
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="ClassicPlayers"
        component={ClassicPlayers}
      />
    </Stack.Navigator>
  );
};
