import styled from "styled-components/native";
import { Video } from "expo-av";
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #ecf0f1;
`;
export const VideoContent = styled(Video)`
  align-self: center;
  width: 320;
  height: 200;
`;
export const Buttons = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
