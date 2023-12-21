import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
`;
