import { TextInputProps } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { TInputProps } from "./types";

export const Input = ({ inputRef, ...rest }: TInputProps) => {
  const { COLORS } = useTheme();

  return (
    <S.Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_100}
      {...rest}
    />
  );
};
