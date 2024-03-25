import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageLink = styled(NavLink)`
  display: box;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px 16px;

  text-decoration: none;
  transition: transform 0.3s, background-color 0.3s;

  font-weight: 400px;
  font-size: 16px;
  line-height: 1.5em;
  color: var(--basic-black);

  &:hover,
  &:focus,
  &.active {
    transform: scale(0.95);
    background-color: #fff1c6;
  }
`;

export const ListPage = styled.ul`
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  list-style-type: none;
`;

export const Wrapper = styled.div`
  padding-right: 84px;
  padding-left: 84px;
`;
