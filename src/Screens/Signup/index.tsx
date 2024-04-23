import React, { useState } from "react";
import { Alert, Modal, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as CONSTANT from "./constants";
import { ButtonIcon } from "@components/ButtonIcon";
import { useForm, Controller } from "react-hook-form";
import { FormDataProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "@components/Form";
import { api } from "@services/api";
import axios from "axios";
import { AppError } from "@utils/AppError";
import { useToast } from "native-base";
import { useAuth } from "@hooks/useAuth";

const signUpSchema = yup.object({
  name: yup.string().required("Tem nome não é?"),
  email: yup
    .string()
    .required("Tem email não é?")
    .email("Esse email tá errado, vei"),
  password: yup
    .string()
    .required("Vai acessar como se não tem senha?")
    .min(6, "A senha deve ter no mínimo 6 digitos"),
  passwordConfirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  dateOfBirthpassword: yup.date().required("Nasceu nunca?"),
});

export const SignUp = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [position, setPosition] = useState<string>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema) as any,
  });

  const handleGoBack = () => {
    navigation.navigate("SignIn");
  };
  const handleDateChange = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  const handleInputPress = () => {
    setShowDatePicker(true);
  };

  const handleSignUp = async (data: FormDataProps) => {
    const signUpData = {
      ...data,
      position,
      dateOfBirth: date,
    };

    try {
      setIsLoading(true);
      await api.post("/users", signUpData);
      await signIn(data.email, data.password);

    } catch (error) {
      setIsLoading(false);

      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível criar a conta. Tente novamente depois";
        
      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      navigation.navigate("PlayersList");
    }
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
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={CONSTANT.NAME_PLACEHOLDER}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={CONSTANT.EMAIL_PLACEHOLDER}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              name="nickname"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={CONSTANT.NICKNAME_PLACEHOLDER}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <S.Fomrs>
              <Controller
                name="position"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <S.Fomrs>
                    <Input
                      placeholder={CONSTANT.POSITION_PLACEHOLDER}
                      value={position}
                      style={{ flex: 1 }}
                      onFocus={() => setModalVisible(true)}
                      onChangeText={onChange}
                    />
                    <ButtonIcon
                      onPress={() => setModalVisible(true)}
                      icon="add"
                    />
                  </S.Fomrs>
                )}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  {CONSTANT.POSITION_PICKER_ITEMS.map((item) => (
                    <S.ModalItem
                      key={item.value}
                      onPress={() => {
                        setPosition(item.value);
                        setModalVisible(false);
                      }}
                    >
                      <S.Icon />
                      <S.ModalText>{item.label}</S.ModalText>
                    </S.ModalItem>
                  ))}
                </TouchableOpacity>
              </Modal>
            </S.Fomrs>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={
                    date
                      ? date.toLocaleDateString()
                      : CONSTANT.DATE_OF_BIRTH_PLACEHOLDER
                  }
                  onFocus={handleInputPress}
                  onChangeText={onChange}
                  errorMessage={errors.dateOfBirth?.message}
                />
              )}
            />
            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                onChange={handleDateChange}
              />
            )}
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={CONSTANT.PASSWORD_PLACEHOLDER}
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              name="passwordConfirm"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={CONSTANT.PASSWORD_CONFIRMATION_PLACEHOLDER}
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.passwordConfirm?.message}
                />
              )}
            />
            <Button
              title={CONSTANT.CREATE_AND_ENTER_BUTTON_TITLE}
              onPress={handleSubmit(handleSignUp)}
              loading={isLoading}
            />
          </S.Form>
          <S.ButtonContainer>
            <S.SignInText>{CONSTANT.ALREADY_HAVE_ACCOUNT_TEXT}</S.SignInText>
            <Button
              title={CONSTANT.BACK_TO_LOGIN_BUTTON_TITLE}
              type="TERTIARY"
              onPress={handleGoBack}
              loading={isLoading}
            />
          </S.ButtonContainer>
        </S.Content>
      </ScrollView>
    </S.Container>
  );
};
