import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledBonusesPageWrapper, StyledInsideCenterBlock, StyledNavLinkBackWrapper } from "./BonusPage.styled";
import sprite from "../../../assets/sprite.svg";
import noOrders from "../../../assets/images/empty-cart.png";
import { StyledBackSpan } from "../../../commonStyles/commonStyles";

const BonusPage = () => {
    const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");
  

  return (
    <StyledBonusesPageWrapper>
      <NavLink to={goBackRef.current} type="button">
        <StyledNavLinkBackWrapper>
          <svg width="24px" height="24px">
            <use href={`${sprite}#icon-back`}></use>
          </svg>
          <StyledBackSpan>Повернутися</StyledBackSpan>
        </StyledNavLinkBackWrapper>
      </NavLink>
      <StyledInsideCenterBlock>
        <img src={noOrders} alt="" />
        <p>Бонусів ще немає</p>
      </StyledInsideCenterBlock>
    </StyledBonusesPageWrapper>
  );
}

export default BonusPage
