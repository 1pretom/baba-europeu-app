import React from "react";
import * as S from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import * as CONSTANT from "./constants";

export const SignUp = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.navigate('SignIn');
  };

  return (
    <S.Container>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <S.Content>
          <Highlight
            title={CONSTANT.HIGHLIGHT_TITLE}
            subtitle={CONSTANT.HIGHLIGHT_SUBTITLE}
          />

          <S.Form>
            <Input
              placeholder={CONSTANT.EMAIL_PLACEHOLDER}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder={CONSTANT.NAME_PLACEHOLDER} />
            <Input placeholder={CONSTANT.NICKNAME_PLACEHOLDER} />
            <Input placeholder={CONSTANT.POSITION_PLACEHOLDER} />
            <Input
              placeholder={CONSTANT.PASSWORD_PLACEHOLDER}
              secureTextEntry
            />
            <Button
              title={CONSTANT.CREATE_AND_ENTER_BUTTON_TITLE}
              onPress={() => {}}
            />
          </S.Form>
          <S.ButtonContainer>
            <S.SignInText>{CONSTANT.ALREADY_HAVE_ACCOUNT_TEXT}</S.SignInText>
            <Button
              title={CONSTANT.BACK_TO_LOGIN_BUTTON_TITLE}
              type="TERTIARY"
              onPress={handleGoBack}
            />
          </S.ButtonContainer>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
};
