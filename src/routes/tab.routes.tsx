import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Finances } from "../Screens/Finances";
import { MatchSettings } from "../Screens/MatchSettings";
import { PlayersList } from "../Screens/PlayersList";
import { Profile } from "../Screens/Profile";
import { Rankings } from "../Screens/Rankings";
import { Feather } from "@expo/vector-icons";
import { ClassicScreen } from "../Screens/ClassicScreen/index";

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
            <Feather name="heart" color={color} size={size} />
          ),
          tabBarLabel: "Love",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
      <Tab.Screen
        name="Rankings"
        component={Rankings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="radio" color={color} size={size} />
          ),
          tabBarLabel: "Rankings",
        }}
      />
      <Tab.Screen
        name="ClassicScreen"
        component={ClassicScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="dollar-sign" color={color} size={size} />
          ),
          tabBarLabel: "ClassicScreen",
        }}
      />
    </Tab.Navigator>
  );
};
