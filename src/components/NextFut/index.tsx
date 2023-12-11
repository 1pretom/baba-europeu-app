import React, { useState } from "react";
import { FlatList, TouchableWithoutFeedback, Alert } from "react-native";
import { Players } from "../Players/component";
import * as S from "./styles";
import {
  ALERT_MESSAGE,
  ALERT_TITLE,
  ALREADY_ADDED,
  BUTTON_NAME,
  INSERT_NAME,
  PRESENCE_LIST,
  SORT_PLAYERS,
} from "./constants";

export const NextFut = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState<string>("");
  const [playersPerTeam, setPlayersPerTeam] = useState<number>(0);

  const handleAddPlayer = () => {
    if (players.includes(playerName)) {
      return Alert.alert(`${ALERT_TITLE}`, `${playerName} ${ALREADY_ADDED}`);
    } else if (playerName.trim() !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };

  const handleRemovePlayer = (name: string) => {
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

  const handleSortPlayers = () => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    const team1 = shuffledPlayers.slice(0, playersPerTeam);
    const team2 = shuffledPlayers.slice(playersPerTeam, playersPerTeam * 2);

    console.log("Time 1:", team1);
    console.log("Time 2:", team2);
  };

  return (
    <S.Container>
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Players
            key={item}
            name={item}
            onRemove={() => handleRemovePlayer(item)}
            index={index}
          />
        )}
      />

      <S.Name>{PRESENCE_LIST}</S.Name>
      <S.Input
        placeholder={INSERT_NAME}
        value={playerName}
        onChangeText={setPlayerName}
        onSubmitEditing={handleAddPlayer}
      />
      <S.Input
        placeholder="Quantidade de jogadores por time"
        keyboardType="numeric"
        value={playersPerTeam.toString()}
        onChangeText={(text) => setPlayersPerTeam(parseInt(text, 10))}
      />

      <S.Button onPress={handleAddPlayer}>
        <S.ButtonText>{BUTTON_NAME}</S.ButtonText>
      </S.Button>
      <S.Button onPress={handleSortPlayers}>
        <S.ButtonText>{SORT_PLAYERS}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
