import styled from "styled-components/native";

export const Container = styled.View`
  margin: 32px 0;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.COLORS.BLUE_400};
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.COLORS.BLUE_300};
`;
