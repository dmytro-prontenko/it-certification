import { MovingComponent } from "react-moving-text";
import { StyledCommonTitleH2 } from "../../commonStyles/commonStyles";
import Article from "../Article/Article";
import {
  StyledRangeWelcomeList,
  StyledRangeWelcomeToCatalogLink,
  StyledSpan
} from "./ProductRangeWelcome.styled";

const ProductRangeWelcome = () => {

  return (
    <>
      <MovingComponent
        type="pulse"
        duration="1000ms"
        delay="0s"
        direction="alternate-reverse"
        timing="linear"
        iteration="infinite"
        fillMode="both"
      >
        <StyledCommonTitleH2>
          <StyledSpan>ШИРОКИЙ АСОРТИМЕНТ ТОВАРУ</StyledSpan>
        </StyledCommonTitleH2>
      </MovingComponent>

      <StyledRangeWelcomeList>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
      </StyledRangeWelcomeList>

      <StyledRangeWelcomeToCatalogLink
        to="/catalog"
      >
        Перейти до каталогу
      </StyledRangeWelcomeToCatalogLink>
    </>
  );
};

export default ProductRangeWelcome;
