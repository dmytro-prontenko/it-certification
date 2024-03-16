import styled from "styled-components";

export const StyledArticleInOrderWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
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


export const StyledQuantity = styled.div`
  width: 40px;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
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

export const StyledOrderTotalAmount = styled.div`
  font-size: 16px;
  font-weight: 700;
`;