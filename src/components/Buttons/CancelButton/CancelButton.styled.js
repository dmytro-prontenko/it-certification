import styled from "styled-components";

export const StyledCancelButton = styled.button`
  display: flex;
  gap: 20px;
  padding: 20px;
  border: none;
  background: transparent;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 0;
    height: 2px;
    background-color: var(--accent-green-300);
    transition: width 0.3s;
    opacity: 0;
  }

  &:hover::before {
    width: 100%;
    opacity: 1;
  }
`;
