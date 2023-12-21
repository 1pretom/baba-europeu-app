import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { useState } from "react";
export const ClassicTeam = () => {
  const [classicTeam, setClassicTeam] = useState("");

  const navigation = useNavigation();
  const handleNewTeam = () => {
    navigation.navigate("ClassicPlayers", { classicTeam });
  };
  return (
    <S.Container>
      <S.Content>
        <S.Icon />
        <Highlight title="Novo time" subtitle="Bote seu time pra jogo" />
        <Input
          placeholder="Bote aqui o nome do time"
          onChangeText={setClassicTeam}
        />
        <Button
          title="Criar"
          onPress={handleNewTeam}
          style={{ marginTop: 20 }}
        />
      </S.Content>
    </S.Container>
  );
};
