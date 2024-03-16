import { A11y, Pagination } from "swiper/modules";
import glasses_2 from "../../assets/images/products/product-hover-img.webp";
import glasses_1 from "../../assets/images/products/product-img.webp";
import sprite from "../../assets/sprite.svg";

import "../../../node_modules/swiper/swiper-bundle.min.css";

import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  StyledArticleButtonWrapper,
  StyledArticleCategory,
  StyledArticleHeadInfo,
  StyledArticleInfo,
  StyledArticlePrimaryNavLink,
  StyledArticleTitle,
  StyledCardArticle,
  StyledCardFigure,
  StyledPrice,
  StyledPriceStockWrapper,
  StyledSlide,
  StyledStockInfo,
  StyledSwiper
} from "./Article.styled";

const Article = () => {
  const location = useLocation()
  return (
    <StyledCardArticle>
      <StyledSwiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, A11y]}
      >
        <StyledSlide>
          <StyledCardFigure>
            <img src={glasses_1} alt="" />
          </StyledCardFigure>
        </StyledSlide>
        <StyledSlide>
          <StyledCardFigure>
            <img src={glasses_2} alt="" />
          </StyledCardFigure>
        </StyledSlide>
      </StyledSwiper>

      <StyledArticleInfo>
        <StyledArticleHeadInfo>
          <StyledArticleCategory>Окуляри для зору жіночі</StyledArticleCategory>
          <StyledArticleTitle>Verse 20176 blueblocker</StyledArticleTitle>
          <StyledPriceStockWrapper>
            <StyledPrice>1200 грн</StyledPrice>
            <StyledStockInfo $inStock={true}>
              В наявності
              <span></span>
            </StyledStockInfo>
          </StyledPriceStockWrapper>
        </StyledArticleHeadInfo>

        <StyledArticleButtonWrapper>
          <StyledArticlePrimaryNavLink
            to={"/glasses/1"}
            state={{ from: location }}
          >
            Детальніше
          </StyledArticlePrimaryNavLink>
          <Button variant="outlined" color="secondary" type="button">
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-favorite`}></use>
            </svg>
          </Button>
        </StyledArticleButtonWrapper>
      </StyledArticleInfo>
    </StyledCardArticle>
  );
};

export default Article;
