import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModalContent = styled.div`
  z-index: 1000;
  background-color: var(--basic-white);
  height: 100vh;
  width: 100vw;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
    height: 6px;
  }

  /* &::-webkit-scrollbar-thumb {
    background-color: var(--light-blue-4);
  } */

  scrollbar thumb:hover {
    background-color: var(--dark-blue);
  }

  /* border-radius: 10px; */
`;
