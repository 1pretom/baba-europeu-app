import { Trash } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const TrashButton = styled(Trash).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.RED_DARK,
}))`
  align-items: end;
`;
