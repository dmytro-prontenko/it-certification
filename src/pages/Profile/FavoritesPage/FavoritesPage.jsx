import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledFavoritesPageWrapper, StyledNavLinkBackWrapper } from "./FavoritesPage.styled";
import sprite from "../../../assets/sprite.svg";
import { StyledBackSpan } from "../../../commonStyles/commonStyles";

const FavoritesPage = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");
  return (
    <StyledFavoritesPageWrapper>
      <NavLink to={goBackRef.current} type="button">
        <StyledNavLinkBackWrapper>
          <svg width="24px" height="24px">
            <use href={`${sprite}#icon-back`}></use>
          </svg>
          <StyledBackSpan>Повернутися</StyledBackSpan>
        </StyledNavLinkBackWrapper>
      </NavLink>
      FavoritesPage
    </StyledFavoritesPageWrapper>
  );
};

export default FavoritesPage;
