import { TFilter } from "./types";
import * as S from "./styles";
export const Filter = ({ title, isActive = false, ...rest }: TFilter) => {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
