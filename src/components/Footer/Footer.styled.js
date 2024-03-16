import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 58px;
  border-radius: 24px 24px 0px 0px;

  background-color: var(--hover-color);
  color: var(--basic-white);

  /* max-width:375px; */
`;

export const StyledFooterSubwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 58px;
  /* width: 320px; */
  max-width: 375px;
  padding: 20px;
  margin: 0 auto;
`;

export const StyledFooterTitle = styled.div`
  text-align: center;

  font-size: 14px;

  font-weight: 600;

  text-transform: uppercase;
`;

export const StyledFooterNavList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 28px 32px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledFooterNavLink = styled(NavLink)`
  color: var(--basic-white);
  &.active{
    font-weight:800;
    scale:1.05;
    text-decoration: underline;
  }
`;

export const StyledSalons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 182px;

  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledSalonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledContactsLink = styled.a`
  color: var(--basic-white);
  text-decoration: none;
`;

export const StyledFooterUpPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

export const StyledFooterDownPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  text-align: center;
`;

export const StyledFooterDownPartLinks = styled.ul`
  display: flex;
  gap: 16px;
`;

export const StyledFooterLogo = styled.img`
  box-sizing: border-box;
  max-width: 260px;
  height:auto;
  margin: 0 auto;
`;

export const StyledPrivacyPolitics = styled.div`
  font-size: 10px;
  font-weight: 400;
`;
