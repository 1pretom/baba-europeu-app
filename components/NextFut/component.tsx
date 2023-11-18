import React, { useState } from "react";
import { FlatList, View, Text, TextInput, Button } from "react-native";

export const NextFut = () => {
  const { players, setPlayers } = useState<string[]>([]);
  const { newPlayer, setNewPlayer } = useState<string>("");

  const addPlayer = () => {
    if (newPlayer.trim() !== "") {
      setPlayers([...players, newPlayer]);
      setNewPlayer("");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Você vai pro baba?"
        value={newPlayer}
        onChangeText={(text) => setNewPlayer(text)}
      />
      <Button title="Add jogador no proximo baba" onPress={addPlayer} />
      <FlatList
        data={players}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
