import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

export const Rankings = ({ navigation }: any) => {
  return (
    <View>
      <Text>rankings</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Go to PlayersList"
        onPress={() => navigation.navigate("PlayersList")}
      />
    </View>
  );
};
export default Rankings;
