import styled from "styled-components";

export const ModalTitle = styled.h1`
  color: var(--accent-green-300);
  font-family: Roboto;
  font-size: 40px;
  font-weight: 400;
  line-height: 150%; /* 60px */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 80px auto 0;
  gap: 40px;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 100%;

  border-top: 1px solid var(--Gray-200, #7f7f7f);
  border-left: 1px solid var(--Gray-200, #7f7f7f);
  border-right: 1px solid var(--Gray-200, #7f7f7f);

  &:first-of-type {
    border-radius: 12px 12px 0px 0px;
  }

  &:last-of-type {
    border-radius: 0px 0px 12px 12px;
    border-bottom: 1px solid var(--Gray-200, #7f7f7f);
  }
`;

export const StyledLabel = styled.label`
  position: relative;

  width: 288px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  padding: 40px 20px;
`;

export const StyledTextInput = styled.input`
  width: calc(100% - 288px);
  padding: 40px 20px;
  border:none;
  &:focus {
    outline: none;
  }
`;

export const StyledErrorMobile = styled.div`
  font-size: 0.5rem;
  position: absolute;
  top: 40%;
  left: 8%;
  margin: 0;
  color: var(--red);
`;
export const StyledErrorSumMobile = styled.div`
  font-size: 0.5rem;
  position: absolute;
  top: 70%;
  left: 8%;
  margin: 0;
  color: var(--red);
`;
export const StyledErrorSelectMobile = styled.div`
  font-size: 0.5rem;
  position: absolute;
  top: 70%;
  left: 9%;
  margin: 0;
  color: var(--red);
`;
