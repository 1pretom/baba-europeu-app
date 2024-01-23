import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 10px;
  width: 100%;
`;

export const TitleText = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 4.5%;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
