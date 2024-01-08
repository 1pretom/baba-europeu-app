import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Finances } from "../Screens/Finances";
import { Feather } from "@expo/vector-icons";
import { MatchSettings } from "@screens/MatchSettings";
import { PlayersList } from "@screens/PlayersList";
import { Rankings } from "@screens/Rankings";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { WatchVideos } from "@screens/Video";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="PlayersList"
        component={PlayersList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={size} />
          ),
          tabBarLabel: "Lista de jogadores",
        }}
      />
      <Tab.Screen
        name="MatchSettings"
        component={MatchSettings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
          tabBarLabel: "Configurações da partida",
        }}
      />
      <Tab.Screen
        name="Finances"
        component={Finances}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="dollar-sign" color={color} size={size} />
          ),
          tabBarLabel: "Finances",
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: "SignIn",
        }}
      />
      <Tab.Screen
        name="Rankings"
        component={WatchVideos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="radio" color={color} size={size} />
          ),
          tabBarLabel: "Rankings",
        }}
      />
    </Tab.Navigator>
  );
};
