import { SoccerBall } from "phosphor-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 10%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  padding-left: 5px;
`;

export const Icon = styled(SoccerBall).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.RED,
}))`
  margin-left: 20px;
`;
