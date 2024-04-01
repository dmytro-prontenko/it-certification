import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10000;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #ffffff 0%, #00544d 100%) top/10px
      10px no-repeat,
    conic-gradient(#0000 50%, #00544d);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotation} 2s infinite linear;
`;
