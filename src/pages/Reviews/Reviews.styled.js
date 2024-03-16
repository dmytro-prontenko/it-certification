import styled from "styled-components";

export const StylerReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 24px 20px 60px;
  margin: 0 auto;
`;

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledReviewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledReviewListItemText = styled.div`
  font-size: 14px;
  font-weight: 300;

  padding: 14px 10px;

  border-radius: 16px;
  border: 1px solid var(--buttons-color);
`;

export const StyledReviewsListItemUser = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledReviewUserIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const StyledReviewsUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledUserName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledUserRate = styled.div``;

export const StyledStarSVG = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--buttons-color);
  fill: var(--buttons-color);
`;
