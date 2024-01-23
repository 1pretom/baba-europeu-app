import * as S from "./styles";
import React from "react";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Text } from "react-native";
import { Form } from "@components/Form";

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
        size={100}
        alt="Foto do usuário"
        source={{ uri: "http://github.com/1pretom.png" }}
      />
      <S.PhotoChange title="Alterar foto" type="FOURTIARY" />
      <Form>
        <Input placeholder="nome" />
        <S.DisabledInput value="washington@email.com" editable={false} />
      </Form>
      <Form title="Alterar senha">
        <Input placeholder="Senha antiga" />
        <Input placeholder="Nova senha" />
      </Form>
    </S.Container>
  );
};
