import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { REMOVE_NAME } from "./constants";
import { TPlayers } from "./types";



export const Players = ({ index, name, onRemove }: TPlayers) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{index} {name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>{REMOVE_NAME}</Text>
      </TouchableOpacity>
    </View>
  );
};
