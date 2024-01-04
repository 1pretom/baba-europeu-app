import React, { useState } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { Players } from "../Players/component";
import * as S from "./styles";
import * as CONSTANT from "./constants";
import { FlashList } from "@shopify/flash-list";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";

export const NextFut = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState<string>("");
  const [playersByTeam, setPlayersByTeam] = useState<number>(5);
  const [playerModalVisible, setPlayerModalVisible] = useState<boolean>(false);
  const [numberOfTeams, setNumberOfTeams] = useState<number>(2);
  const [teamsModalVisible, setTeamsModalVisible] = useState<boolean>(false);
  const [teams, setTeams] = useState<string[][]>([]);

  const handleAddPlayer = () => {
    if (players.includes(playerName)) {
      return Alert.alert(
        `${CONSTANT.ALERT_TITLE}`,
        `${playerName} ${CONSTANT.ALREADY_ADDED}`
      );
    } else if (playerName.trim() !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };

  const handleRemovePlayer = (name: string) => {
    Alert.alert(
      `${CONSTANT.ALERT_TITLE}`,
      `${CONSTANT.ALERT_MESSAGE} ${name}?`,
      [
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
      ]
    );
  };

  const handleSortPlayers = () => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    const teams = [];
    for (let i = 0; i < numberOfTeams; i++) {
      teams.push(
        shuffledPlayers.slice(i * playersByTeam, (i + 1) * playersByTeam)
      );
    }

    setTeams(teams);
  };

  const handleSelectNumberOfTeams = (value: number) => {
    setNumberOfTeams(value);
  };
  return (
    <S.Container>
      <S.Content>
        <S.Name>{CONSTANT.PRESENCE_LIST}</S.Name>
        <S.Fomr>
          <ButtonIcon icon="add" type="PRIMARY" onPress={handleAddPlayer} />
          <Input
            placeholder={CONSTANT.INSERT_NAME}
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

      <S.Name>Quantidade de jogadores por time:</S.Name>

      <S.Fomr>
        <Input
          value={playersByTeam.toString()}
          style={{ flex: 1 }}
          onFocus={() => setPlayerModalVisible(true)}
        />
        <ButtonIcon onPress={() => setPlayerModalVisible(true)} icon="add" />
        <Modal
          animationType="slide"
          transparent={true}
          visible={playerModalVisible}
          onRequestClose={() => {
            setPlayerModalVisible(!playerModalVisible);
          }}
        >
          <S.StyledOverlay onPress={() => setPlayerModalVisible(false)}>
            {CONSTANT.PLAYERS_BY_TEAM.map((item) => (
              <S.ModalItem
                key={item.value}
                onPress={() => {
                  setPlayersByTeam(item.value);
                  setPlayerModalVisible(false);
                }}
              >
                <S.ModalText>{item.label}</S.ModalText>
              </S.ModalItem>
            ))}
          </S.StyledOverlay>
        </Modal>
      </S.Fomr>
      <S.Name>Quantidade de times:</S.Name>
      <S.Fomr>
        <Input
          value={numberOfTeams.toString()}
          style={{ flex: 1 }}
          onFocus={() => setTeamsModalVisible(true)}
        />
        <ButtonIcon onPress={() => setTeamsModalVisible(true)} icon="add" />
        <Modal
          animationType="slide"
          transparent={true}
          visible={teamsModalVisible}
          onRequestClose={() => {
            setTeamsModalVisible(!teamsModalVisible);
          }}
        >
          <S.StyledOverlay onPress={() => setTeamsModalVisible(false)}>
            {CONSTANT.NUMBER_OF_TEAMS.map((item) => (
              <S.ModalItem
                key={item.value}
                onPress={() => {
                  handleSelectNumberOfTeams(item.value);
                  setTeamsModalVisible(false);
                }}
              >
                <S.ModalText>{item.label}</S.ModalText>
              </S.ModalItem>
            ))}
          </S.StyledOverlay>
        </Modal>
      </S.Fomr>
      <Button
        title={CONSTANT.SORT_PLAYERS}
        type="PRIMARY"
        onPress={handleSortPlayers}
      />

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
