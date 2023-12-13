import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: #ffaa1d;
`;
