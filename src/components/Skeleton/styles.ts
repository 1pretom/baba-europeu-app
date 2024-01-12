import styled from "styled-components/native";
import { SkeletonProps } from "./types";

export const SkeletonContainer = styled.View<SkeletonProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;
