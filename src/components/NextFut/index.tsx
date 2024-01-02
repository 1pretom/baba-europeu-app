import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Players } from "../Players/component";
import * as S from "./styles";
import {
  ALERT_MESSAGE,
  ALERT_TITLE,
  ALREADY_ADDED,
  INSERT_NAME,
  PRESENCE_LIST,
  SORT_PLAYERS,
} from "./constants";
import { Picker } from "@react-native-picker/picker";
import { FlashList } from "@shopify/flash-list";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";

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
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () =>
          setPlayers((prevState) =>
            prevState.filter((player) => player !== name)
          ),
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
        <S.Fomr>
          <ButtonIcon icon="add" type="PRIMARY" onPress={handleAddPlayer} />

          <Input
            placeholder={INSERT_NAME}
            value={playerName}
            onChangeText={setPlayerName}
            onSubmitEditing={handleAddPlayer}
          />
        </S.Fomr>
      </S.Content>

      <FlashList
        estimatedItemSize={50}
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
      <Button title={SORT_PLAYERS} type="PRIMARY" onPress={handleSortPlayers} />

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
