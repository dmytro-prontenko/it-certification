import styled from "styled-components";

export const StylerContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 24px 20px 60px;
  margin: 0 auto;

  
`;

export const StyledContactsSubwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 24px;
`;

export const StyledContactsListWrapper = styled.div``;

export const StyledFrame = styled.iframe`
  border-radius: 8px;
  border: none;

  width: 100%;
`;

export const StyledContactsList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledContactsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: var(--blue-3);
  padding: 20px;
  border-radius: 16px;

  box-shadow: 4px 4px 16.4px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledContactsListSubItem = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledContactsListItemContact = styled.div`
  display: flex;
  gap: 16px;
  /* justify-content: center; */
  align-items: center;
`;

export const StyledContactsLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const StyledContactLink = styled.a`
  display: inline-block;
  font-size: 14px;
  padding: 7px;
  padding-left: 0;
  font-weight: 300;
  text-decoration: none;
  color: var(--main-text);
`;

export const StyledConactSVG = styled.svg`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;

export const StyledSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledSocialList = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const StyledSocialListItem = styled.li``;
