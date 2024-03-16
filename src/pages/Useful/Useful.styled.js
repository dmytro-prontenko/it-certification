import styled from "styled-components";

export const StyledUsefulWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 24px 20px 60px;
  margin: 0 auto;
`;

export const StyledUsefulArticlesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 24px;
`;

export const StyledUsefulArticleListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledArticleSublist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
`;

export const StyledArticleSublistItem = styled.li`
  list-style: disc;
  margin-left: 27px;
`;

export const StyledUsefulArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledArticleDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 300;
  line-height: 131%;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledAdvisesTitle = styled.div`
  margin-bottom: 8px;
`;

export const StyledArticleAdvisesList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledArticleAdvisesListItem = styled.li`
  list-style-type: decimal;
  margin-left: 15px;
`;
