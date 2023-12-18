import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
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
      <S.Fomr>
        <Input placeholder="Nombre de la persona" autoCorrect={false} />
        <ButtonIcon icon="add" type="PRIMARY" />
      </S.Fomr>
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

      <Filter title={"Time A"} />
    </S.Container>
  );
};
