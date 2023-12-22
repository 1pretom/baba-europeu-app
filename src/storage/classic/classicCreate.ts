import AsyncStorage from "@react-native-async-storage/async-storage";
import { CLASSIC_TEAMS_COLLECTION } from "../storageConfig";
import { classicGetAll } from "./classicGetAll";
import { AppError } from "@utils/AppError";

export const classicCreate = async (classicTeam: string) => {
  try {
    const storedClassicTeam = await classicGetAll();
    const classicTeamAlreadyExists = storedClassicTeam.includes(classicTeam);
   if(classicTeamAlreadyExists){
    throw new AppError("Esse time já existe, amigão.");
   }

    const storage = JSON.stringify([...storedClassicTeam, classicTeam]);
    await AsyncStorage.setItem(CLASSIC_TEAMS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
