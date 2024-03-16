import styled from "styled-components";

export const StyledEyesOrderFormWrapper = styled.div`
  max-width: 375px;
  padding: 20px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

`;

export const StyledFormLabel = styled.p`
  font-size: 14px;
  font-weight: 300;
  width:170px;
  color: var(--main-text);
`;

export const StyledFormInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 16px; */
  align-items: center;
  /* padding: 0 15px; */

`;

export const StyledInputsWrapper = styled.div`
display: flex;
flex-direction:column;
gap: 16px;
  border-left: 1px solid var(--hover-color);
  border-right: 1px solid var(--hover-color);
  border-bottom: 1px solid var(--hover-color);
  background-color: var(--blue-3);

  border-radius: 0 0 16px 16px;

  padding: 0 15px 15px;
`;

export const StyledFormInputLabelsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Wrapper = styled.div`
  /* background-color:red; */
`;

export const StyledFormButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

`;

export const StyledEyeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 15px;
`;

export const StyledPackValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
`;

export const StyledLabelWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledRadioOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledInput = styled.input`
  position: relative;
`;

export const StyledRadioLabel = styled.label`
  display: flex;
  gap: 15px;
  position: relative;
  padding-left: 30px;
  cursor: pointer-events;

  & input[type="radio"] {
    display: none;
  }

  & span {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--hover-color);
    display: block;
    position: absolute;
    left: 0;
    top: 0%;
  }

  & span::after {
    content: "";
    width: 8px;
    height: 8px;
    background: var(--hover-color);
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: 300ms ease-in-out 0s;
  }

  & input[type="radio"]:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledQuantityWrapper = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  width: 120px;
  padding: 8px;

  border-radius: 100px;
  border: 1px solid var(--hover-color);
`;

export const StyledDecreaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: var(---basic-white);
`;
export const StyledIncreaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: var(---basic-white);
`;

export const StyledQuantity = styled.div`
  width: 50px;
  text-align: center;
`;