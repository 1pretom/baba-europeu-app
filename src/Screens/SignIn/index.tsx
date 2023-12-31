import React from "react";
import * as S from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export const SignIn = () => {
  const navigation = useNavigation();
  const handlePressSignup = () => {
    navigation.navigate("SignUp");
  };

  return (
    <S.Container>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <S.Content>
          <S.Fomr>
            <Highlight title="Acesse ao baba" subtitle="Faça seu login parça" />
            <Input
              placeholder={"Email"}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder={"Senha"} secureTextEntry />
            <Button title="Acessar" onPress={() => {}} />
          </S.Fomr>
          <S.ButtonContainer>
            <S.SignInText>Entre pro baba!</S.SignInText>
            <Button
              title="Criar conta no baba"
              type="TERTIARY"
              onPress={handlePressSignup}
            />
          </S.ButtonContainer>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
};
