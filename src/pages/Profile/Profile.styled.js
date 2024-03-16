import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledProfileLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;

  max-width: 375px;
  padding: 50px 20px 50px;
  margin: 0 auto;
  min-height:70vh;
`;

export const StyledProfileNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color:var(--hover-color)
`;

export const StyledNavLinkBackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;