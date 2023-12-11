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

export const Input = styled.TextInput`
  height: 40px;
  width: 200px;
  border-color: red;
  border-width: 0.5px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 12px;
`;
