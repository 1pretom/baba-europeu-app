import { ButtonIcon } from "@components/ButtonIcon";
import { Image } from "native-base";
import React from "react";
import { PRESENCE_LIST, INSERT_NAME } from "./constants";
import * as S from "./styles";
import { Input } from "@components/Input";

import BackgroundImg from "@assets/background-image.png";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

export const SignUp = ({ navigation }: any) => {
  return (
    <S.Container>
      <Image
        justifyContent={"center"}
        alignItems={"center"}
        source={BackgroundImg}
        alt="Quadra do baba"
        position="absolute"
        height={"1/2"}
        width={"5/6"}
      />
      <S.Content>
        <Highlight title="Entre pro baba" />
        <S.Fomr>
          <Input
            placeholder={"Email"}
            value=""
            // onChangeText={setPlayerName}
            // onSubmitEditing={handleAddPlayer}
          />
          <Input
            placeholder={"Nome"}
            value=""
            // onChangeText={setPlayerName}
            // onSubmitEditing={handleAddPlayer}
          />
          <Input
            placeholder={"Apelido"}
            value=""
            // onChangeText={setPlayerName}
            // onSubmitEditing={handleAddPlayer}
          />
          <Input
            placeholder={"Posição"}
            value=""
            // onChangeText={setPlayerName}
            // onSubmitEditing={handleAddPlayer}
          />
          <S.ItemSeparator />
          <Input
            placeholder={"Senha"}
            value=""
            // onChangeText={setPlayerName}
            // onSubmitEditing={handleAddPlayer}
          />
          <S.ItemSeparator />
        </S.Fomr>
      </S.Content>
      <Button title="Acessar" onPress={() => {}} />
    </S.Container>
  );
};
