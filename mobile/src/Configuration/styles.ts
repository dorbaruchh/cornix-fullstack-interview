import styled from "styled-components/native";
import { Line } from 'react-native-svg';

export const StyledLine = styled(Line)<{ hovered?: boolean }>`
  stroke-width: 2px;
  transition: stroke 0.1s ease-in-out;
  fill: transparent;
  stroke: black;
  ${(p) =>
    p.hovered &&
    `
    stroke: #3272fe;
  `}
`;
