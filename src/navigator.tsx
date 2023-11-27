import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayersList } from "./Screens/PlayersList";
import { Finances } from "./Screens/Finances";
import { MatchSettings } from "./Screens/MatchSettings";
import { Profile } from "./Screens/Profile";
import { Rankings } from "./Screens/Rankings";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Screen = () => {
  return (
    <Tab.Navigator
      initialRouteName="PlayersList"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
      name='PlayersList'
      component={PlayersList}
      options={{title:'MatchSettings', 
      // tabBarIcon: ({size,color}) =>(
      //   <MaterialCommunityIcons name="home" size={size} color={color}/>
      // )
      }}/>
      <Tab.Screen
      name='MatchSettings'
      component={MatchSettings}
      options={{title:'PlayersList', 
      // tabBarIcon: ({size,color}) =>(
      //   <MaterialCommunityIcons name="home" size={size} color={color}/>
      // )
      }}/>
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PlayersList"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "red" },
        }}
      >
        <Stack.Screen
          options={{ animation: "flip" }}
          name="Finances"
          component={Finances}
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
          options={{ animation: "flip", gestureEnabled: true }}
          name="Rankings"
          component={Rankings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
