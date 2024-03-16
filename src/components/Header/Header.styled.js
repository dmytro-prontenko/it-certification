import { NavLink } from "react-router-dom";
import styled from "styled-components";




export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 375px;
  padding: 28px 20px 0;
  margin: 0 auto;
`;

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledNavList = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items:center;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMenuButton = styled.button`
  border:none;
  display: flex;
  justify-content: center;
  background:none;
`;

export const StyledNavListItem = styled.li`
  display: flex;
`;