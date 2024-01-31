import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { TInputProps } from "./types";

export const Input = ({ errorMessage, inputRef, ...rest }: TInputProps) => {
  const { COLORS } = useTheme();

  return (
    <>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      <S.Container
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_100}
        {...rest}
      />
    </>
  );
};
