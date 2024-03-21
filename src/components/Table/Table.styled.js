import { Pagination } from "@mui/material";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 80%;
  margin: 80px auto;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableLink = styled.a`
  display: inline-block;
  text-decoration: underline;
  color: var(--accent-green-300);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  padding-right: calc((100% - var(--pagination-width) - 40px) / 2);

  width: 100%;
`;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
`;


export const PageSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
