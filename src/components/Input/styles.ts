import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  ${({ theme })=>css`
  background-color: ${ theme.COLORS.BLUE_300};
  color: ${ theme.COLORS.WHITE};
  font-family: ${ theme.fonts.regular};
  font-size: ${ theme.fontSize.md}px;
  `}
  
  flex: 1;
  min-height: 60px;
  max-height: 60px;
  
  border-radius: 6px;
  padding: 16px;
`;
