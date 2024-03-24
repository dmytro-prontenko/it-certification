import styled from "styled-components";

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const ConfirmationTitle = styled.div`
  color: var(--accent-green-300);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%; /* 36px */
`;