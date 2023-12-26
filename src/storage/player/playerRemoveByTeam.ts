import AsyncStorage from "@react-native-async-storage/async-storage";
import { playerGetByTeam } from "./playerGetByTeam";
import { CLASSIC_PLAYERS_COLLECTION } from "@storage/storageConfig";

export const playerRemoveByTeam = async (playerName: string, classicTeam: string) => {
  try {
    const storage = await playerGetByTeam(classicTeam);

    const filtered = storage.filter((player) => player.name !== playerName);
    const players = JSON.stringify(filtered);
    await AsyncStorage.setItem(
      `${CLASSIC_PLAYERS_COLLECTION}-${classicTeam}`,
      players
    );
  } catch (error) {
    throw error;
  }
};
