import AsyncStorage from "@react-native-async-storage/async-storage";
import { CLASSIC_PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const playerGetByTeam = async (classicTeam: string) => {
  try {
    const storage = await AsyncStorage.getItem(
      `${CLASSIC_PLAYERS_COLLECTION}-${classicTeam}`
    );

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
    return players;
  } catch (error) {
    throw error;
  }
};
