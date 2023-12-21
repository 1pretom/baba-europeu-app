import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { TFilterStyle } from "./types";

export const Container = styled(TouchableOpacity)<TFilterStyle>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}
  border-radius: 4px;
  margin-right: 12px;
  height: 40px;
  width: 80px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;
