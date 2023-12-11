import React, { useState } from "react";
import { FlatList, Alert, Text, View } from "react-native";
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
import { Picker } from "@react-native-picker/picker";

export const NextFut = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState<string>("");
  const [playersPerTeam, setPlayersPerTeam] = useState<number>(0);
  const [numberOfTeams, setNumberOfTeams] = useState<number>(2);
  const [teams, setTeams] = useState<string[][]>([]);

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

    const teams = [];
    for (let i = 0; i < numberOfTeams; i++) {
      teams.push(
        shuffledPlayers.slice(i * playersPerTeam, (i + 1) * playersPerTeam)
      );
    }

    setTeams(teams);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Name>{PRESENCE_LIST}</S.Name>
        <S.Input
          placeholder={INSERT_NAME}
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={handleAddPlayer}
        />
      </S.Content>

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

      <S.PickerView>
        <S.Name>Quantidade de jogadores por time:</S.Name>
        <Picker
          selectedValue={playersPerTeam}
          onValueChange={(itemValue, itemIndex) => setPlayersPerTeam(itemValue)}
        >
          {[...Array(10).keys()].map((value) => (
            <Picker.Item
              key={value}
              label={(value + 1).toString()}
              value={value + 1}
            />
          ))}
        </Picker>
      </S.PickerView>

      <S.PickerView>
        <S.Name>Quantidade de times:</S.Name>
        <Picker
          selectedValue={numberOfTeams}
          onValueChange={(itemValue, itemIndex) => setNumberOfTeams(itemValue)}
        >
          {[...Array(10).keys()].map((value) => (
            <Picker.Item
              key={value}
              label={(value + 1).toString()}
              value={value + 1}
            />
          ))}
        </Picker>
      </S.PickerView>

      <S.Button onPress={handleAddPlayer}>
        <S.ButtonText>{BUTTON_NAME}</S.ButtonText>
      </S.Button>
      <S.Button onPress={handleSortPlayers}>
        <S.ButtonText>{SORT_PLAYERS}</S.ButtonText>
      </S.Button>

      {teams.length > 0 && (
        <S.Content>
          <S.Name>Resultado:</S.Name>
          {teams.map((team, index) => (
            <View key={index}>
              <Text>{`Time ${index + 1}: ${team.join(", ")}`}</Text>
            </View>
          ))}
        </S.Content>
      )}
    </S.Container>
  );
};
