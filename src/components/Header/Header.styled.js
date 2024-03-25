import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 326px;
`;

export const BrandSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavWrapperMenu = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  gap: 9.5px;
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 84px;
  margin-right: 20px;
  & > a {
    margin: 0;
  }
`;

export const UserPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 84px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  outline: none;
`;
