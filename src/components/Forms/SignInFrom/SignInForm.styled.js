import { OutlinedInput } from "@mui/material";
import styled from "styled-components";

export const StyledSingInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;

  width: 260px;
`;

// export const StyledInputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 7px;
// `;

// export const StyledLabel = styled.div`
//   font-size: 14px;
//   font-weight: 300;
// `;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -22px;
  color: var(--red);
`;


// export const StyledTextField = styled(TextField)`
//   background: var(--basic-white);

//   &.MuiInputBase-input {
//     padding: 16px;
//   }

//   /* label при введенні*/
//   /* & label.Mui-focused {
//     color: var(--buttons-color);
//     padding: 0 15px;
//   } */

//   & .MuiInput-underline:after {
//     border-bottom-color: green;
//   }

//   & .MuiOutlinedInput-root {
//     /* обводка input */
//     & fieldset {
//       padding: 20px;

//       border-radius: 16px;
//       border-color: var(--hover-color);
//       border: 1px solid var(--hover-color);

//       font-size: 16px;
//       font-weight: 400;
//       line-height: 100%;
//     }

//     &:hover fieldset {
//       border-color: var(--buttons-color);
//     }

//     /* обводка при введенні */
//     &.Mui-focused fieldset {
//       border-color: var(--buttons-color);
//     }
//   }
// `;
export const StyledOutlinedInput = styled(OutlinedInput)`
  background: var(--basic-white);

  & #outlined-adornment-password {
    padding: 16px;
  }

  /* колір тексту при введенні*/
  & .MuiOutlinedInput-input {
    color: var(--main-text);
    padding: 16px;
  }

  /* & placeholder {
    color: var(--main-text);
    padding: 16px;
  } */

  & .Mui-focused {
    border-bottom-color: red;
  }

  & .MuiOutlinedInput-adornedEnd {
    border-radius: 16px;
    border-color: var(--hover-color);
    border: 1px solid var(--hover-color);
  }

  /* обводка input */
  & fieldset {
    padding: 20px;

    border-radius: 16px;
    border: 1px solid var(--hover-color);

    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  &:hover fieldset {
    border-color: var(--buttons-color);
  }

  /* обводка при введенні */
  &.Mui-focused input {
    border-color: orange;
  }

  &.MuiOutlinedInput-inputAdornedEnd {
    width: 10px;
  }
`;
