import React from "react";
import * as S from "./styles";
import { REMOVE_NAME } from "./constants";
import { TPlayers } from "./types";

export const Players = ({ index, name, onRemove }: TPlayers) => {
  return (
    <S.Container>
      <S.Name>
        {index + 1} - {name}
      </S.Name>
      <S.Button onPress={onRemove}>
        <S.TrashButton>{REMOVE_NAME}</S.TrashButton>
      </S.Button>
    </S.Container>
  );
};
