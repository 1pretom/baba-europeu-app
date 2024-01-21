import * as S from "./styles";
import React from "react";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Text } from "react-native";

export const Profile = () => {
  return (
    <S.Container>
      <UserPhoto
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 6,
          padding: 10,
        }}
        size={140}
        alt="Foto do usuário"
        source={{ uri: "http://github.com/1pretom.png" }}
      />
      <S.Form>
        <Input placeholder="nome" />
        <Input placeholder="email" />
      </S.Form>
      <S.Form>
        <Text>Alterar senha</Text>
        <Input placeholder="senha antiga" />
        <Input placeholder="Nova senha" />
      </S.Form>

      <S.TextInsideImage>Configurações da partida</S.TextInsideImage>
    </S.Container>
  );
};
