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
  margin: 0 auto;
`;

export const StyledCabinetTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin: 24px 0;
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

  padding:16px;
  color: var(--secondary-text);
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: transparent;
  display: flex;
  gap:48px;

  border-radius: 100px;
  border: 1px solid var(--buttons-color);


  margin: 6px;
  border: none;


  &:hover {
    color: var(--buttons-color);
  }

  &:focus {
    color: #fff;

  }

  &.${tabClasses.selected} {
    width:120px;
    background: var(--buttons-color);
    color: var(--basic-white);
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 600;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    background: red;
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
  // gap:48px;
  margin-bottom:24px;
  overflow-x:auto;
  &::-webkit-scrollbar {
    display: none;
  }
  `
);
