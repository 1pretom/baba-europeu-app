import React, { useState } from "react";
import { Modal, TouchableOpacity, Text, View } from "react-native";
import * as S from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as CONSTANT from "./constants";
import { ButtonIcon } from "@components/ButtonIcon";

export const SignUp = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [position, setPosition] = useState<string>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
            <S.Fomrs>
              <Input
                placeholder={CONSTANT.POSITION_PLACEHOLDER}
                value={position}
                style={{ flex: 1 }}
                onFocus={() => setModalVisible(true)}
              />
              <ButtonIcon onPress={() => setModalVisible(true)} icon="add" />
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

            <Input
              value={
                date
                  ? date.toLocaleDateString()
                  : CONSTANT.DATE_OF_BIRTH_PLACEHOLDER
              }
              onFocus={handleInputPress}
            />
            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                onChange={handleDateChange}
              />
            )}
            <Input
              placeholder={CONSTANT.PASSWORD_PLACEHOLDER}
              secureTextEntry
              autoCapitalize="none"
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
