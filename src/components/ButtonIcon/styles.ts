import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TButtonIconStyle } from "./types";

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const Icon = styled(MaterialIcons).attrs<TButtonIconStyle>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
