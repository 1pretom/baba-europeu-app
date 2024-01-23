import * as S from "./styles";
import { TFormProps } from "./types";

export const Form = ({ children, title }: TFormProps) => {
  return (
    <S.Container>
      <S.TitleText>{title}</S.TitleText>
      {children}
    </S.Container>
  );
};
