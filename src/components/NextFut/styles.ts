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
  font-size: ${({ theme }) => theme.fontSize.md}px;
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
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 10px;
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
export const ModalText = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const StyledOverlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00000180;
`;
