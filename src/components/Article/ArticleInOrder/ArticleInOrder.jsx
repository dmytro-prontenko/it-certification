import sprite from "../../../assets/sprite.svg";
import { StyledArticleInOrderWrapper, StyledDecreaseButton, StyledIncreaseButton, StyledOrderTotalAmount, StyledQuantity, StyledQuantityWrapper } from "./ArticleInOrder.styled";

const ArticleInOrder = () => {
  return (
    <StyledArticleInOrderWrapper>
      <StyledQuantityWrapper>
        <StyledDecreaseButton>
          <svg width="16px" height="16px">
            <use href={`${sprite}#icon-minus`}></use>
          </svg>
        </StyledDecreaseButton>
        <StyledQuantity>{10}</StyledQuantity>
        <StyledIncreaseButton>
          <svg width="16px" height="16px">
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </StyledIncreaseButton>
      </StyledQuantityWrapper>

      <StyledOrderTotalAmount>Сума до сплати: 1200 грн</StyledOrderTotalAmount>
    </StyledArticleInOrderWrapper>
  );
};

export default ArticleInOrder;
