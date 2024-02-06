import * as S from "./styles";
import React, { useState } from "react";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Form } from "@components/Form";
import { Button } from "@components/Button";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { Loading } from "@components/Loading";

export const Profile = () => {
  const [userPhoto, setUserPhoto] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small/user-icon-on-transparent-background-free-png.png"
  );
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const handleUserPhotoSelection = async () => {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      if (photoSelected.canceled) {
        return Alert.alert("Quer trocar a foto não é? Beleza então");
      }
      if (photoSelected.assets[0].uri) {
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Content>
        {photoIsLoading ? (
          <Loading />
        ) : (
          <UserPhoto
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 6,
              padding: 10,
            }}
            size={100}
            alt="Foto do usuário"
            source={{ uri: userPhoto }}
          />
        )}
        <Button
          onPress={handleUserPhotoSelection}
          title="Alterar foto"
          type="FOURIER"
        />
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
