import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { ClassicPlayerCard } from "@components/ClassicPlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { FlatList } from "react-native";
import { Button } from "@components/Button";
export const ClassicPlayers = () => {
  const [team, setTeam] = useState<string>();
  const [players, setPlayers] = useState<string[]>();

  return (
    <S.Container>
      <Highlight
        title="nombre del equipo"
        subtitle="
        Agregar jugadores y separar equipos"
      />
      <S.Fomrs>
        <Input placeholder="Nombre de la persona" autoCorrect={false} />
        <ButtonIcon icon="add" type="PRIMARY" />
      </S.Fomrs>
      <S.HeaderList>
        <FlashList
          data={["Time A", "Time B"]}
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ClassicPlayerCard name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players?.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => <ListEmpty message="Oxe, não tem ninguém?" />}
      />
      <Button title="Remover Time" type="SECONDARY" />
    </S.Container>
  );
};
