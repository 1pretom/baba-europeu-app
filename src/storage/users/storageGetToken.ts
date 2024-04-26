import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

export const storageAuthTokenGet = async () => {
  const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
  return token;
};
