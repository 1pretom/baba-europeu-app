import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Saudation = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
