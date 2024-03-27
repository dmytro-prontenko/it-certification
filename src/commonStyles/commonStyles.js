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
  /* padding: 16px 24px; */
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

/////////////////////PageImage
import picture from "/Vectors/Picture.png";

export const ImageTop = styled.div`
  background-image: url(${picture});
  background-repeat: no-repeat;
  min-width: 360px;
  min-height: 120px;
`;

export const ImageBottom = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 67%;
    bottom: -110px;
    width: 360px;
    height: 160px;
    background-color: transparent;
    background-image: url(${picture});
    z-index: -10;
  }
`;

export const StyledAddEditForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 80px auto 0;
  gap: 40px;
`;

export const ModalAddEditTitle = styled.h1`
  color: var(--accent-green-300);
  font-family: Roboto;
  font-size: 40px;
  font-weight: 400;
  line-height: 150%; /* 60px */
`;

export const StyledAddEditInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAddEditInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  overflow: hidden;

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

export const StyledAddEditLabel = styled.label`
  position: relative;

  width: 288px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  padding: 40px 20px;
`;

export const StyledAddEditTextInput = styled.input`
  width: calc(100% - 288px);
  padding: 40px 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;
