import styled from "styled-components";

export const NotificationContainer = styled.div``;

export const IconAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const NotificationAndEventsTitle = styled.h2`
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 42px */
`;

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  gap: 20px;
  margin-bottom: 12px;
`;

export const NotificationText = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-left: ${({ $withPadding }) => ($withPadding ? "44px" : "0")};
`;

export const NotificationsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Notification = styled.li`
  :nth-last-child() {
    margin-left: 44px;
  }
`;
