import { InputMask } from "primereact/inputmask";
import styled from "styled-components";

export const StyledCabinetWrapper = styled.div`
  max-width: 375px;
  height: 100%;
  margin: 0 auto;
  padding: 32px 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  /* outline: 1px solid tomato; */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledIMask = styled(InputMask)`
  padding: 16.5px 14px;

  border-radius: 16px;
  border-color: var(--hover-color);
  border: 1px solid var(--hover-color);
  background: rgb(250, 254, 253);
  outline: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  -webkit-font-smoothing: antialiased;
  -webkit-rtl-ordering: logical;
  /* -webkit-border:1px solid red; */

  &::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }

  &:disabled {
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.26);
    background: rgb(250, 254, 253);
    color: rgba(0, 0, 0, 0.38);
  }

  &:focus-visible {
    border: 1px solid var(--buttons-color);
    outline: 1px solid var(--buttons-color);
  }

  &:hover {
    border: 1px solid var(--buttons-color);
  }
`;
