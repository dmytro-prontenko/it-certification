import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageLink = styled(NavLink)`
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #fcfbfb;

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
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 28px;
  column-gap: 28px;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
`;

export const Wrraper = styled.div`
  margin-bottom: 80px;
`;
