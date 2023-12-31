import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  justify-content: "center";
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
`;

export const Content = styled.View`
  align-items: center;
`;
export const ItemSeparator = styled.View`
  padding: 10px;
`;
export const Fomr = styled.View`
  width: 100%;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
`;
