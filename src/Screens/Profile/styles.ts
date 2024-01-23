import { Input } from "@components/Input";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
`;

export const Content = styled.View`
  align-items: center;
  padding: 20px;
`;

export const DisabledInput = styled(Input)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
