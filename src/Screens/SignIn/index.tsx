import React from "react";
import * as S from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import * as CONSTANT from "./constants";
import { TFormData } from "./types";
import { useAuth } from "@hooks/useAuth";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useForm } from "react-hook-form";
import { AppError } from "@utils/AppError";
import { useToast } from "native-base";

export const SignIn = () => {
  const { signIn } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handlePressSignup = () => {
    navigation.navigate("SignUp");
  };

  const handlePressSingIn = async ({ email, password }: TFormData) => {
    console.log("sign in pressed");
    try {
      await signIn(email, password);
      navigation.navigate("PlayersList");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possivel entrar. Tente novamente mais tarde.";
      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    }
  };

  return (
    <S.Container>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <S.Content>
          <S.Form>
            <Highlight
              title={CONSTANT.HIGHLIGHT_TITLE}
              subtitle={CONSTANT.HIGHLIGHT_SUBTITLE}
            />
            <Input
              placeholder={CONSTANT.EMAIL_PLACEHOLDER}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder={CONSTANT.PASSWORD_PLACEHOLDER}
              secureTextEntry
              autoCapitalize="none"
            />
            <Button
              title={CONSTANT.ACCESS_BUTTON_TITLE}
              onPress={() => handlePressSingIn}
            />
          </S.Form>
          <S.ButtonContainer>
            <S.SignInText>{CONSTANT.ENTER_THE_BABA_TEXT}</S.SignInText>
            <Button
              title={CONSTANT.SIGN_UP_TEXT}
              type="TERTIARY"
              onPress={handlePressSignup}
            />
          </S.ButtonContainer>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
};
