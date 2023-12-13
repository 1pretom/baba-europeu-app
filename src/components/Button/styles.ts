import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TButtonType } from "./types";

export const Container = styled(TouchableOpacity)<TButtonType>`
  flex: 1;
  min-height: 60px;
  max-height: 60px;
  max-width: 70%;
  min-width: 70%;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
