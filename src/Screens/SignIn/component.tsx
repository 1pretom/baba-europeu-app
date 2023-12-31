import React from "react";
import * as S from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

export const SignIn = ({ navigation }: any) => {
  return (
    <S.Container>
      <S.Content>
        <Highlight title="Acesse ao baba" />
        <S.ItemSeparator />
        <S.Fomr>
          <Input
            placeholder={"Email"}
            keyboardType="email-address"
            autoCapitalize="none"
            // onChangeText={setPlayerName}
            // onSubmitEditing={handleAddPlayer}
          />
          <Input
            placeholder={"Senha"}
            secureTextEntry
            // onChangeText={setPlayerName}
            // onSubmitEditing={handleAddPlayer}
          />
          <Button title="Acessar" onPress={() => {}} />
        </S.Fomr>
      </S.Content>
    </S.Container>
  );
};
