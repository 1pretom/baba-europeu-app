import { TSortPlayersAndTeams } from "./types";

export const INSERT_NAME = "Bote se vc vai pro baba";
export const ALREADY_ADDED = "já foi adicionado";
export const ALERT_TITLE = "Remover";
export const ALERT_MESSAGE = "Remover o participante";
export const PRESENCE_LIST = "Lista de presença";
export const SORT_PLAYERS = "Fazer sorteio";
export const PLAYERS_BY_TEAM: TSortPlayersAndTeams[] = [
  { label: "1x1 é?", value: 1 },
  { label: "2x2", value: 2 },
  { label: "Golzinho?", value: 3 },
  { label: "Cadê o goleiro?", value: 4 },
  { label: "Baba de quadra", value: 5 },
  { label: "Baba de 6", value: 6 },
  { label: "6 e o goleiro", value: 7 },
  { label: "Fut 7", value: 8 },
  { label: "8 de linha, 1 no gol", value: 9 },
  { label: "Faltou 1 pro time ficar completo", value: 10 },
  { label: "É profissional é?", value: 11 },
];

export const NUMBER_OF_TEAMS: TSortPlayersAndTeams[] = [
  { label: "2 times", value: 2 },
  { label: "3 times", value: 3 },
  { label: "4 times", value: 4 },
  { label: "5 times", value: 5 },
  { label: "Já dá um campeonato", value: 6 },
  { label: "7 times", value: 7 },
  { label: "2 grupos de 4 (la ele)", value: 8 },
  { label: "9 times", value: 9 },
  { label: "10 times", value: 10 },
];

export const QUANTITY_OF_PLAYERS = "Quantidade de jogadores";
export const PLAYERS_BY_TEAM_PLACEHOLDER = "Quantidade de jogadores por time:";
