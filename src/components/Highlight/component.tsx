import * as S from "./styles";
import { THighlight } from "./types";

export const Highlight = ({ title, subtitle }: THighlight) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  );
};
