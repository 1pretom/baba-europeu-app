import * as S from "./styles";
import React from "react";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Form } from "@components/Form";
import { Button } from "@components/Button";

export const Profile = () => {
  return (
    <S.Container>
      <S.Content>
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
        <Button title="Alterar foto" type="FOURIER" />
        <Form>
          <Input placeholder="nome" />
          <S.DisabledInput value="washington@email.com" editable={false} />
        </Form>
        <Form title="Alterar senha">
          <Input placeholder="Senha antiga" secureTextEntry />
          <Input placeholder="Nova senha" secureTextEntry />
          <Input placeholder="Confirme a nova senha" secureTextEntry />
          <Button title="Atualizar" />
        </Form>
      </S.Content>
    </S.Container>
  );
};
