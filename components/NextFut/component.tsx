import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Players } from "../Players";
import { styles } from "./styles";

export const NextFut = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState<string>("");

  const handleAddPlayer = () => {
    if (players.includes(playerName)) {
      return alert(`${playerName} já foi adicionado`);
    } else if (playerName.trim() !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };

  const handleRemovePlayer = (name: string) => {
    //TODO: ver se o alert aparece no device pq no web não aparece
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setPlayers((prevState) =>
            prevState.filter((player) => player !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);

    setPlayers((prevState) => prevState.filter((player) => player !== name));
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text>Lista de presença</Text>
        <TextInput
          style={styles.input}
          placeholder="Bote se vc vai pro baba"
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={handleAddPlayer}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddPlayer}>
          <Text style={styles.buttonText}>Botar o seu nome</Text>
        </TouchableOpacity>

        <FlatList
          data={players}
          keyExtractor={(item) => item.toString()}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <Players
              key={item}
              name={item}
              onRemove={() => handleRemovePlayer(item)}
            />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
