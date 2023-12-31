import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

export const Rankings = () => {
  const navigation = useNavigation();
  const handleOnPressProfile = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View>
      <Text>rankings</Text>
      <Button title="Go to Profile" onPress={handleOnPressProfile} />
      <Button
        title="Go to PlayersList"
        onPress={() => navigation.navigate("PlayersList")}
      />
    </View>
  );
};
export default Rankings;
