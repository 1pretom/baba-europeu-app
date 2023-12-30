import { SoccerBall } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  min-height: 100px;
  max-height: 100px;
  max-width: 100%;
  min-width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.fonts.regular};
  padding-left: 10px;
`;

export const Icon = styled(SoccerBall).attrs(({ theme }) => ({
  size: 30,
  color: theme.COLORS.WHITE,
}))`
  margin-left: 10px;
`;
