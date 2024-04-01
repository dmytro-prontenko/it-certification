import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 40px;
  gap: 32px;
`;

export const HeaderMenu = styled.div`
  border-top: 1px solid var(--accent-green-300);
  border-bottom: 1px solid var(--accent-green-300);
`;

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 20px;
  align-items: center;
`;

export const LinkWrrap = styled(Link)`
  display: flex;
  flex-direction: column;
`;

// export const NavWrapperMenu = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 160px;
// `;

export const UserPanel = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const UserSettingsButton = styled.div`
  padding-top: 42px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent-green-300);
`;

export const UserName = styled.p`
  font-weight: 500px;
  font-size: 12px;
  line-height: 1.5em;
  color: var(--basic-black);
  white-space: nowrap;
`;
