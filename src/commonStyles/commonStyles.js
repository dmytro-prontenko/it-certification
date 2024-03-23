// import { TextField } from "@mui/material";
// import styled from "styled-components";

import styled from "styled-components";

export const ModalWrapper = styled.div`
  padding: 70px;
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
`;

export const StyledModalButton = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: fit-content;
  margin: 0 auto;

  border-radius: 8px;
  border: 1px solid var(--accent-green-300);
  background: var(--accent-yellow-200);

  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;

  &:hover {
    background: var(--accent-yellow-100);
  }

  &:focus {
    border-radius: 8px;
    border: 2px solid var(--accent-green-300);
    background: var(--accent-yellow-200);
  }

  &:disabled {
    border-radius: 8px;
    border: 1px solid var(--accent-green-300);
    opacity: 0.55;

    font-size: 20px;
  }
`;
