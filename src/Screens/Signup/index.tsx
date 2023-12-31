import React from "react";
import * as S from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export const SignUp = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <S.Content>
          <Highlight title="Entre pro baba" subtitle="Faça sua conta" />

          <S.Fomr>
            <Input
              placeholder={"Email"}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder={"Nome"} />
            <Input placeholder={"Apelido"} />
            <Input
              placeholder={"Posição"}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder={"Senha"} secureTextEntry />
            <Button title="Criar e entrar" onPress={() => {}} />
          </S.Fomr>
          <S.ButtonContainer>
            <S.SignInText>Já tem conta?</S.SignInText>
            <Button
              title="Voltar pro login"
              type="TERTIARY"
              onPress={handleGoBack}
            />
          </S.ButtonContainer>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
};
