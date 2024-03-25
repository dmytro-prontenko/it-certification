import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 48px;
  gap: 40px;
`;

export const HeaderMenu = styled.header`
  border-top: 1px solid var(--accent-green-300);
  border-bottom: 1px solid var(--accent-green-300);
`;

export const WrapperMenu = styled.div`
  display: flex;
  padding-bottom: 20px;
  padding-top: 20px;
  gap: 9.5px;
`;

export const NavWrapperMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 9.5px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top:28.5px;
  padding-bottom:28.5px;
  gap:12px;
`;

export const UserInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;`;

export const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--accent-green-300);
  padding: 0px 20.5px 8px 20.5px;
`;

export const UserName = styled.p`
font-weight:400px;
font-size:14px;
line-height:1.5em;
color: var(--basic-black);
text-align: center;
`;
