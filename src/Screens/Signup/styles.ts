import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const Form = styled.View`
  width: 100%;
  border-radius: 6px;
  padding: 16px;
`;
export const SignInText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.COLORS.BLUE_400};
  padding: 10px;
`;
export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 10%;
`;
