import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledOrderPageWrapper = styled.div`
  max-width: 375px;
  height: 100%;
  margin: 0 auto;
  padding: 32px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const StyledOrderPageTitle = styled.h2`
  font-size:24px;
  font-weight:600;
  text-align: center;
`;

export const StyledOrderNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;
  border-radius: 100px;

  background-color: var(--buttons-color);
  color: var(--basic-white);
`;