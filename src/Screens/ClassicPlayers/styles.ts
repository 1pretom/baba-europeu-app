import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  padding: 16px;
`;

export const Fomrs = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`;
