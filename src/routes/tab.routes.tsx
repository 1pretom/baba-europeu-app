import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Finances } from "../Screens/Finances";
import { MatchSettings } from "../Screens/MatchSettings";
import { PlayersList } from "../Screens/PlayersList";
import { Profile } from "../Screens/Profile";
import { Rankings } from "../Screens/Rankings";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Finances"
        component={Finances}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="watch" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MatchSettings"
        component={MatchSettings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PlayersList"
        component={PlayersList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='users' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rankings"
        component={Rankings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="radio" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};