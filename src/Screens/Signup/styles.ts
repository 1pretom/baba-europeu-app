import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SoccerBall } from "phosphor-react-native";

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

export const ModalText = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ModalItem = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_400};
  margin-bottom: 10px;
  border-radius: 5px;
  align-items: center;
  width: 50%;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BLUE_100};
  flex-direction: row;
  justify-content: space-between;
`;

export const Fomrs = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 5px;
`;

export const Icon = styled(SoccerBall).attrs(({ theme }) => ({
  size: 30,
  color: theme.COLORS.WHITE,
}))``;
