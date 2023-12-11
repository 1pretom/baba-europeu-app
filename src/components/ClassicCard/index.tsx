import { TClassicCard } from "./types";
import * as S from "./styles";
export const ClassicCard = ({ title, ...rest }: TClassicCard) => {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
