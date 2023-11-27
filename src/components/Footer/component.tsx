import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { TEXT } from "./constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlayersList } from "../../Screens/PlayersList";
import { MatchSettings } from "../../Screens/MatchSettings";

export const Footer = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Finances"
        onPress={() => navigation.navigate("Finances")}
      />
      <Button
        title="Go to MatchSettings"
        onPress={() => navigation.navigate("MatchSettings")}
      />
      <Button
        title="Go to PlayersList"
        onPress={() => navigation.navigate("PlayersList")}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Go to Rankings"
        onPress={() => navigation.navigate("Rankings")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
  );
};

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
