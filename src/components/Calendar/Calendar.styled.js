import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 516px;
  height: 498px;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--accent-wight);
`;

export const MonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin: 0 20px;

  h2 {
    color: var(--basic-black);
    font-size: 28px;
    font-weight: 400;
    line-height: 150%; /* 42px */
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;

  button {
    background-color: transparent;
    border: none;
  }
`;

export const TableDays = styled.tr`
  display: flex;
  gap: 28px;

  th {
    display: flex;
    width: 36px;
    height: 36px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-style: normal;
    line-height: 150%; /* 30px */
  }
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DateOfTheWeek = styled.tr`
  display: flex;
  align-items: flex-end;
  gap: 28px;

  td {
    display: flex;
    width: 36px;
    height: 36px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
`;

// export const TableData = styled.td`
//   width: 36px;
//   height: 36px;
//   padding: 16px;
//   text-align: center;
//   background-color: ${({ isCurrentDay }) =>
//     isCurrentDay ? "yellow" : "transparent"};
//   color: ${({ isEmpty }) => (isEmpty ? "lightgrey" : "inherit")};
//   border: 1px solid black;
// `;
