import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  padding: 16px;
`;

export const Fomr = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: row-reverse;
  justify-content: center;
  border-radius: 6px;
`;
