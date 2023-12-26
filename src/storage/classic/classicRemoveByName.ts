import AsyncStorage from "@react-native-async-storage/async-storage";
import { classicGetAll } from "./classicGetAll";
import {
  CLASSIC_PLAYERS_COLLECTION,
  CLASSIC_TEAMS_COLLECTION,
} from "@storage/storageConfig";

export const classicRemoveByName = async (classicTeamDeleted: string) => {
  try {
    const storedClassicTeams = await classicGetAll();
    const classicTeams = storedClassicTeams.filter(
      (classicTeam) => classicTeam !== classicTeamDeleted
    );
    await AsyncStorage.getItem(
      CLASSIC_TEAMS_COLLECTION,
      JSON.stringify(classicTeams)
    );
    await AsyncStorage.removeItem(
      `${CLASSIC_PLAYERS_COLLECTION}-${classicTeamDeleted}`
    );
  } catch (error) {
    throw error;
  }
};
