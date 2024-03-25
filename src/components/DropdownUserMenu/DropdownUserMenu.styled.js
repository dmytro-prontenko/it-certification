import styled from "styled-components";

export const DropdownButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const DropdownCaption = styled.span`
  color: var(--basic-black);
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
`;

export const RotatableWrapper = styled.div`
  transition: transform 0.3s ease;
  transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "rotate(0deg)")};
`;

