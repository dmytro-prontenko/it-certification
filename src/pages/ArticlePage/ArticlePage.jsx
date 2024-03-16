import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import { StyledArticlePageWrapper, StyledNavLinkBackWrapper } from "./ArticlePage.styled";
import Article from "../../components/Article/Article";
import { StyledBackSpan } from "../../commonStyles/commonStyles";


const ArticlePage = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");

  return (
    <StyledArticlePageWrapper>
      <NavLink to={goBackRef.current} type="button">
        <StyledNavLinkBackWrapper>
          <svg width="24px" height="24px">
            <use href={`${sprite}#icon-back`}></use>
          </svg>
          <StyledBackSpan>Повернутися</StyledBackSpan>
        </StyledNavLinkBackWrapper>
      </NavLink>
      <Article />
    </StyledArticlePageWrapper>
  );
};

export default ArticlePage;
