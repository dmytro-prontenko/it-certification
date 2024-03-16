import { OutlinedInput } from "@mui/material";
import styled from "styled-components";


export const StyledCatalogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 24px 20px 60px;
  margin: 0 auto;
`;

export const StyledArticlesList = styled.ul`
  display: flex;
  flex-direction: column;
max-width:375px;
  gap: 32px;
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  background: var(--basic-white);
  width: 100%;

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

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px;
`;

export const StyledActualInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StyledActualInfoItem = styled.div`
  color: var(--secondary-text);
  font-size: 14px;
  font-weight: 300;
  line-height: 121%;
`;
