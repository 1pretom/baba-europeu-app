import { playerGetByTeam } from "./playerGetByTeam";

export const playerGetByTeamAndClassicTeam = async (
  classicTeam: string,
  team: string
) => {
  try {
    const storage = await playerGetByTeam(classicTeam);

    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
};
