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
import {
  ALERT_MESSAGE,
  ALERT_TITLE,
  ALREADY_ADDED,
  BUTTON_NAME,
  INSERT_NAME,
  PRESENCE_LIST,
} from "./constants";

export const NextFut = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState<string>("");

  const handleAddPlayer = () => {
    if (players.includes(playerName)) {
      return alert(`${playerName} ${ALREADY_ADDED}`);
    } else if (playerName.trim() !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };

  const handleRemovePlayer = (name: string) => {
    //TODO: ver se o alert aparece no device pq no web não aparece
    Alert.alert(`${ALERT_TITLE}`, `${ALERT_MESSAGE} ${name}?`, [
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
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <FlatList
          data={players}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Players
              key={item}
              name={item}
              onRemove={() => handleRemovePlayer(item)}
            />
          )}
        />
        <Text>{PRESENCE_LIST}</Text>
        <TextInput
          style={styles.input}
          placeholder={INSERT_NAME}
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={handleAddPlayer}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddPlayer}>
          <Text style={styles.buttonText}>{BUTTON_NAME}</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
