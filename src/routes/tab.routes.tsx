import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Finances } from "../Screens/Finances";
import { Feather } from "@expo/vector-icons";
import { Profile } from "@screens/Profile";
import { PlayersList } from "@screens/PlayersList";
import { Rankings } from "@screens/Rankings";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { WatchVideos } from "@screens/Video";
import { useTheme } from "styled-components";
import { TTabRoutes } from "./types";

export type TabNavigatorRoutesProps = BottomTabNavigationProp<TTabRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<TTabRoutes>();

export const TabRoutes = () => {
  const { COLORS } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.BLUE_400,
        tabBarInactiveTintColor: COLORS.BLUE_200,
        tabBarStyle: {
          backgroundColor: COLORS.GRAY_200,
          borderTopWidth: 0,
          height: "8%",
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Screen
        name="PlayersList"
        component={PlayersList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={size} />
          ),
          tabBarLabel: "Lista de jogadores",
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
      <Screen
        name="Finances"
        component={Finances}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="dollar-sign" color={color} size={size} />
          ),
          tabBarLabel: "Finances",
        }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: "SignIn",
        }}
      />
      <Screen
        name="Rankings"
        component={WatchVideos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="radio" color={color} size={size} />
          ),
          tabBarLabel: "Rankings",
        }}
      />
    </Navigator>
  );
};
