import * as S from "./styles";
import { TListEmpty } from "./types";

export const ListEmpty = ({ message }: TListEmpty) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};
