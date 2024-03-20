import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageLink = styled(NavLink)`
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #fcfbfb;
  text-shadow: 2px 6px 2px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus,
  &.active {
    transform: scale(0.95);
    background-color: #fff1c6;
  }
`;

export const ListPage = styled.ul`
  margin-top: 12px;
  display: flex;
  justify-content: space-evenly;
  max-width: 815px;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 20px;
`;
