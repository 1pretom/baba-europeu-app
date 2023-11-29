import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Finances } from "../../Screens/Finances";
import { MatchSettings } from "../../Screens/MatchSettings";
import { PlayersList } from "../../Screens/PlayersList";
import { Profile } from "../../Screens/Profile";
import { Rankings } from "../../Screens/Rankings";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export const Footer = ({navigation}) => {


  return (
    <NavigationContainer>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Finances')}>footer</TouchableOpacity>
        <Text>footer</Text>
        <Tab.Navigator>
          <Tab.Screen name="Finances" component={Finances} />
          <Tab.Screen name="MatchSettings" component={MatchSettings} />
          <Tab.Screen name="PlayersList" component={PlayersList} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Rankings" component={Rankings} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};
