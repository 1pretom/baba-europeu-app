import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { CLASSIC_PLAYERS_COLLECTION } from "@storage/storageConfig";
import { playerGetByTeam } from "./playerGetByTeam";
import { AppError } from "@utils/AppError";

export const playerAddByTeam = async (
  newPlayer: PlayerStorageDTO,
  classicTeam: string
) => {
  try {
    
    const storedPlayers = await playerGetByTeam(classicTeam);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já foi colocada vei, bote outra aí");
    }
    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(
      `${CLASSIC_PLAYERS_COLLECTION}-${classicTeam}`,
      storage
    );
  } catch (error) {
    throw error;
  }
};
