import styled from "styled-components";
import { styled as styledMUI } from "@mui/system";

import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";

import { buttonClasses } from "@mui/base/Button";

export const StyledTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 24px 20px 60px;
  margin: 0 auto;
`;

export const tabSx = {
  "& .MuiTabs-indicator": {
    backgroundColor: "red",
  },
  "& .MuiButtonBase-root.MuiTab-root": {
    color: "black",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: "green)",
    },
    "&.Mui-selected": {
      color: "red",
    },
  },
};

export const Tab = styledMUI(BaseTab)`
  font-family: "Montserrat", sans-serif;
  color: var(--secondary-text);
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: transparent;
  display: flex;
  gap:48px;


  margin: 6px;
  border: none;

  &:first-of-type {
    text-align:right;
  }
  &:last-of-type {
    text-align:left;
  }

  &:hover {
    color: var(--buttons-color);
  }

  &:focus {
    color: #fff;

  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: var(--hover-color);
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanel = styledMUI(BaseTabPanel)`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;

`;

export const TabsList = styledMUI(BaseTabsList)(
  `
  display: flex;
  align-items: center;
  justify-content:center;
  gap:48px;
  margin-bottom:24px;
  `
);
