import styled from "styled-components";

export const Line = styled.path<{ $hovered: boolean }>`
  stroke-width: 4px;
  transition: stroke 0.1s ease-in-out;
  fill: transparent;
  stroke: #ccd1d940;
  ${(p) =>
    p.$hovered &&
    `
    stroke: #3272fe;
  `}
`;
