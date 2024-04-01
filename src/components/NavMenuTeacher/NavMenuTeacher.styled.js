import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ListPage = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  border: 1px solid black;
  transition: width 0.3s;

  &:hover,
  &:focus,
  &.active {
    background-color: #fff1c6;
    /* border-radius: 8px;
    width: 220px; */
  }
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const PageLink = styled(NavLink)`
  display: flex;
  justify-content: center;

  padding: 14px 24px;
  width: 200px;
  font-size: 20px;
  font-weight: 400px;
  line-height: 1.5;
  color: var(--basic-black);
  border-radius: 0;
`;
