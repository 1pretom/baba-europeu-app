import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  justify-content: "center";
  padding: 16px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 10px;
  border-radius: 5px;
  align-items: "center";
  justify-content: "center";
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const PickerView = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
`;

export const Content = styled.View`
  align-items: center;
`;

export const Fomr = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  flex-direction: row-reverse;
  justify-content: center;
  border-radius: 6px;
`;
