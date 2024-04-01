import styled from "styled-components";

export const CalendarEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CalendarEventsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Event = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-left: 44px;
`;

export const IconAndEventsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const EventsText = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;
