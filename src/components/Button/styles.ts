import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { TButtonType } from "./types";

export const Container = styled(TouchableOpacity)<TButtonType>`
  flex: 1;
  min-height: 60px;
  max-height: 60px;
  max-width: 100%;
  min-width: 100%;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_700
      : type === "SECONDARY"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.BLUE_100};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  border: ${({ type }) => (type === "FOURIER" ? 0 : 2)}px;
  border-color: ${({ theme }) => theme.COLORS.BLUE_400};
`;

export const Title = styled(Text)<TButtonType>`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.WHITE
      : type === "SECONDARY"
      ? theme.COLORS.GRAY_100
      : theme.COLORS.BLUE_400};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
