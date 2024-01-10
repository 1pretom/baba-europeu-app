import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Finances } from "../Screens/Finances";
import { Feather } from "@expo/vector-icons";
import { MatchSettings } from "@screens/MatchSettings";
import { PlayersList } from "@screens/PlayersList";
import { Rankings } from "@screens/Rankings";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { WatchVideos } from "@screens/Video";

type TTabRoutes = {
  MatchSettings: undefined;
  Finances: undefined;
  PlayersList: undefined;
  Rankings: undefined;
  SignIn: undefined;
  SignUp: undefined;
  WatchVideos: undefined;
};

export type TabNavigatorRoutesProps = BottomTabNavigationProp<TTabRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<TTabRoutes>();

export const TabRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, }}>
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
        name="MatchSettings"
        component={MatchSettings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
          tabBarLabel: "Configurações da partida",
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
