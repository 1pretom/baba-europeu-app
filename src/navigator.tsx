import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayersList } from "./Screens/PlayersList";
import { Financies } from "./Screens/Financies";
import { MatchSettings } from "./Screens/MatchSettings";
import { Profile } from "./Screens/Profile";
import { Rankings } from "./Screens/Rankings";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ animation: "flip" }}
        name="Financies"
        component={Financies}
      />
      <Stack.Screen
        options={{ animation: "flip" }}
        name="MatchSettings"
        component={MatchSettings}
      />
      <Stack.Screen
        options={{ animation: "flip" }}
        name="PlayersList"
        component={PlayersList}
      />
      <Stack.Screen
        options={{ animation: "flip" }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{ animation: "flip" }}
        name="Rankings"
        component={Rankings}
      />
    </Stack.Navigator>
  );
};
