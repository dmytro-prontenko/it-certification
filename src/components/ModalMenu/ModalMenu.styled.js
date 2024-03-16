import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledModalMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/header-background-image-blured.png");
  background-size: cover;
  background-position: center top;
  /* margin: 0 auto; */
`;

export const StyledModalMenuSubwrapper = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  position: relative;
  padding: 28px 20px;
`;

export const StyledModalMenuHeaderWrapper = styled.div`
  max-width: 375px;
  /* padding: 0 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledModalNav = styled.nav``;

export const StyledModalNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledModalNavListItem = styled(NavLink)`
  color: var(---hover-color);

  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StyledLinksLikeButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledPrimaryNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: calc((100% - 20px) / 2);
  padding: 7px;

  border-radius: 100px;
  border: 1px solid var(--buttons-color);

  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--main-text);
`;

export const StyledPrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: calc((100% - 20px) / 2);
  padding: 7px;

  border-radius: 100px;
  border: 1px solid var(--buttons-color);

  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--main-text);
`;

/* export const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  right: 20px;
  transform: translate(0%, 25%);
`; */
