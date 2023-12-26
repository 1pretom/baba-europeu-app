import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useRef, useState } from "react";
import { ClassicPlayerCard } from "@components/ClassicPlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Alert, FlatList } from "react-native";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TRouteParams } from "./type";
import { AppError } from "@utils/AppError";
import { playerAddByTeam } from "@storage/player/playerAddByTeam";
import { playerGetByTeamAndClassicTeam } from "@storage/player/playerGetByTeamAndClassicTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { TextInput } from "react-native-gesture-handler";
import { playerRemoveByTeam } from "@storage/player/playerRemoveByTeam";
import { classicRemoveByName } from "@storage/classic/classicRemoveByName";
export const ClassicPlayers = () => {
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const route = useRoute();
  const newPlayerNameInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const { classicTeam } = route.params as TRouteParams;

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Novo Jogadô", "Oxe, tá vazio véi.");
    }

    const newPlayer = {
      name: newPlayerName,
      team: team,
    };

    try {
      await playerAddByTeam(newPlayer, classicTeam);

      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Jogadô", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo Jogadô", "Rapaz, revise as parada aí");
      }
    }
  };

  const handleRemovePlayer = async (playerName: string) => {
    try {
      Alert.alert("Remover jogadô", `Vai tirar ${playerName} mesmo?`, [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await playerRemoveByTeam(playerName, classicTeam);
            fetchPlayersByTeam();
          },
        },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert("Remover jogadô", "Não foi possível remover ele");
    }
  };

  const classicTeamRemove = async () => {
    try {
      await classicRemoveByName(classicTeam);
      navigation.navigate("ClassicScreen");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover clássico", "Não foi possível remover clássico");
    }
  };

  const handleRemoveClassicTeam = () => {
    Alert.alert("Remover time", `Vai apagar o classico ${classicTeam} mesmo?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => classicTeamRemove(),
      },
    ]);
  };

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playerGetByTeamAndClassicTeam(
        classicTeam,
        team
      );
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Jogadô", "Não deu pra carregar, foi mal");
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Highlight
        title={classicTeam}
        subtitle="
        Adicione cada jogador no time certo."
      />
      <S.Fomrs>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </S.Fomrs>
      <S.HeaderList>
        <FlashList
          data={["Bahia", "Vitória"]}
          estimatedItemSize={5}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumbersOfPlayers>{players?.length}</S.NumbersOfPlayers>
      </S.HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ClassicPlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players?.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => <ListEmpty message="Oxe, não tem ninguém?" />}
      />
      <Button
        title="Remover Clássico"
        type="SECONDARY"
        onPress={handleRemoveClassicTeam}
      />
    </S.Container>
  );
};
