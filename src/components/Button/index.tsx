import * as S from "./styles";
import { TButton } from "./types";

export const Button = ({ title, type = "PRIMARY", ...rest }: TButton) => {
  return (
    <S.Container type={type} {...rest}>
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
};
