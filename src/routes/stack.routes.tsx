import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Rankings } from "../Screens/Rankings";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="PlayersList">
      <Stack.Screen
        options={{ animation: "flip", gestureEnabled: true }}
        name="Rankings"
        component={Rankings}
      />
    </Stack.Navigator>
  );
};
