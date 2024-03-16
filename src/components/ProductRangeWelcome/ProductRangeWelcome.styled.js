import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledRangeWelcomeList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  gap: 32px;
  padding-bottom:32px;  
`;

export const StyledRangeWelcomeToCatalogLink = styled(NavLink)`
  width: 260px;

  text-align: center;
  padding: 16px;
  margin: 0 auto;
  border-radius: 100px;
  border: 1px solid var(--hover-color);
`;


export const StyledRangeItem = styled.li`
  /* width:90% */
`;


export const StyledSpan = styled.span`
  color:var(--buttons-color)
`;

