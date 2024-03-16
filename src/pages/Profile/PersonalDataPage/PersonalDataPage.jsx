import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  StyledBackSpan
} from "../../../commonStyles/commonStyles";
import {
  StyledCabinetWrapper
} from "./PersonalDataPage.styled";

import sprite from "../../../assets/sprite.svg";
import { StyledNavLinkBackWrapper } from "../Profile.styled";
import PersonalDataForm from "../../../components/Forms/PersonalDataForm/PersonalDataForm";

const PersonalData = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");

  return (
    <>
      <StyledCabinetWrapper>
        <NavLink to={goBackRef.current} type="button">
          <StyledNavLinkBackWrapper>
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-back`}></use>
            </svg>
            <StyledBackSpan>Повернутися</StyledBackSpan>
          </StyledNavLinkBackWrapper>
        </NavLink>
        <PersonalDataForm />
      </StyledCabinetWrapper>
    </>
  );
};

export default PersonalData;
