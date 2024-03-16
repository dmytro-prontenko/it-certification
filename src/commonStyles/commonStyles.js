import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledCommonPageContainer = styled.div`
  width: 320px;
  padding: 30px 20px 50px 20px;
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 24px 20px 60px;
  margin: 0 auto;
`;

export const StyledCommonTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const StyledCommonTitleH2 = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
export const StyledCommonTitleH3 = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

export const StyledCommonText = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

export const StyledBoldSpan = styled.span`
  font-weight: 600;
`;
export const StyledBoldText = styled.div`
  font-weight: 600;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  &:last-of-type {
    padding-bottom: 30px;
  }
`;

export const StyledLabel = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

export const StyledTextField = styled(TextField)`
  background: var(--basic-white);
  width: 100%;
  
  &.MuiInputBase-input {
    padding: 16px;
  }

  /* label при введенні*/
  /* & label.Mui-focused {
    color: var(--buttons-color);
    padding: 0 15px;
  } */

  & .MuiInput-underline:after {
    border-bottom-color: green;
  }

  & .MuiOutlinedInput-root {
    /* обводка input */
    & fieldset {
      padding: 20px;

      border-radius: 16px;
      border-color: var(--hover-color);
      border: 1px solid var(--hover-color);

      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
    }

    &:hover fieldset:not(:disabled) {
      border-color: var(--buttons-color);
    }

    /* обводка при введенні */
    &.Mui-focused fieldset {
      border-color: var(--buttons-color);
    }

    & .MuiOutlinedInput-root.Mui-disabled {
      &:hover {
        border-color: none;
      }
    }
  }
`;


export const StyledBackSpan = styled.span`
  color:var(--hover-color)
`;


