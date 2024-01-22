import { Button } from "@components/Button";
import { Input } from "@components/Input";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
`;

export const PhotoChange = styled(Button)`
  flex: 1;
  justify-content: center;
`;

export const TextInsideImage = styled.Text`
  color: white;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  background-color: #000000a0;
`;

export const Form = styled.View`
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
  padding: 16px;
`;

export const DisabledInput = styled(Input)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
