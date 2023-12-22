import AsyncStorage from "@react-native-async-storage/async-storage";
import { CLASSIC_TEAMS_COLLECTION } from "../storageConfig";

export const classicGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(CLASSIC_TEAMS_COLLECTION);
    const classic: string[] = storage ? JSON.parse(storage) : [];
    return classic;
  } catch (error) {
    throw error;
  }
};
