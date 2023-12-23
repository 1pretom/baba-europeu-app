import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { classicCreate } from "@storage/classic/classicCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
export const ClassicTeam = () => {
  const [classicTeam, setClassicTeam] = useState("");

  const navigation = useNavigation();
  const handleNewClassicTeam = async () => {
    try {
      if (classicTeam.trim().length === 0) {
        return Alert.alert(
          "Novo time",
          "Escreva o nome, não pode ficar vazio."
        );
      }
      await classicCreate(classicTeam);
      navigation.navigate("ClassicPlayers", { classicTeam });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo time", error.message);
      }
      Alert.alert("Novo time", "Não deu pra criar o time pro clássico.");
      console.log(error);
    }
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
          onPress={handleNewClassicTeam}
          style={{ marginTop: 20 }}
        />
      </S.Content>
    </S.Container>
  );
};
