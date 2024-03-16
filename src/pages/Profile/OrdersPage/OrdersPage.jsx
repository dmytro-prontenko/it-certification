import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledCabinetWrapper, StyledInsideCenterBlock, StyledNavLinkBackWrapper } from "./OrdersPage.styled";
import sprite from "../../../assets/sprite.svg";
import noOrders from "../../../assets/images/empty-cart.png"
import { StyledBackSpan } from "../../../commonStyles/commonStyles";

const OrdersPage = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");
  return (
    <StyledCabinetWrapper>
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
        <p>Замовлень ще немає</p>
      </StyledInsideCenterBlock>
    </StyledCabinetWrapper>
  );
};

export default OrdersPage;
