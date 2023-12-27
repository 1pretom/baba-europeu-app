import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #3498db;
  border-radius: 12px;
  width: 100%;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
