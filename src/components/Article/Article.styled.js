import styled from "styled-components";
import { styled as styled_mui } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

export const StyledCardArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 335px;
  /* margin: 0 auto; */
  background: var(--blue-3);
  border-radius: 12px;
  box-shadow: 4px 4px 16.4px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 10px 20px;
`;

export const StyledCardFigure = styled.figure`
  /* width: 95%; */
  /* margin: 0 auto; */

  & img {
    border-radius: 12px 12px 0 0;
    /* max-width:200px; */
  }
`;

export const StyledArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledPriceStockWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;

export const StyledArticleButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledArticlePrimaryButton = styled_mui("button")({
  display: "flex",
  // flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  color: "var(--basic-white)",
  backgroundColor: "var(--buttons-color)",
  width: "190px",
  padding: 12,
  border: "none",
  borderRadius: 100,

  fontSize: "16px",
  fontWeight: 600,
  // lineHeight: "100%",
});

export const StyledArticlePrimaryNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--basic-white);
  background-color: var(--buttons-color);
  width: 190px;
  padding: 12px;
  border: none;
  border-radius: 100px;

  font-size: 16px;
  font-weight: 600;
`;

export const StyledArticleSecondaryButton = styled_mui("button")({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--basic-white)",
  backgroundColor: "var(--basic-white))",
  padding: 8,
  borderRadius: "100px",
  border: " 2px solid var(--buttons-color)",
  width: "40px",
  height: "40px",

  fontSize: "16px",
  fontWeight: 600,
});

export const StyledArticleButtonText = styled.span`
  display: inline-block;
  white-space: nowrap;
`;

export const StyledSlide = styled(SwiperSlide)`
  /* width: 80%; */
`;

export const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0 0 24px;
  z-index: 1 !important;
  outline: 1px solid tomato;
`;

export const StyledPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const StyledStockInfo = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${(props) =>
    props.$inStock ? "var(--in-stock)" : "var(--out-of-stock)"};
  position: relative;
  padding-left: 10px;
  & span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) =>
      props.$inStock ? "var(--in-stock)" : "var(--out-of-stock)"};
    display: block;
    position: absolute;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 20%);
  }
`;

export const StyledArticleHeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;
  padding-top: 12px;
`;

export const StyledArticleTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

export const StyledArticleCategory = styled.h3`
  font-size: 12px;
  font-weight: 300;
`;
