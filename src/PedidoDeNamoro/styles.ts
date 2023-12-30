import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
`;

export const NoButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  ${({ top, left }) => `top: ${top}px; left: ${left}px;`}
`;

export const SimButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
