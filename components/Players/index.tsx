import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type TPlayers = {
  name: string;
  onRemove: () => void;
};

export const Players = ({ name, onRemove }: TPlayers) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>Se Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
