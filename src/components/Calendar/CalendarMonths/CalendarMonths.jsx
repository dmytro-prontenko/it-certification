import { useState } from "react";
import Icon from "../../Icon/Icon";
import {
  ButtonWrapper,
  CalendarContainer,
  DateOfTheWeek,
  MonthTitle,
  MonthWrapper,
  SundaySpan,
  TableDays,
  TableElem,
  TableHeaderElem,
  Tbody,
} from "./CalendarMonths.styled";
import { IconButton } from "@mui/material";

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const CalendarMonths = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  console.log(firstDayOfMonth);
  let startingDay = firstDayOfMonth.getDay();
  startingDay = startingDay === 0 ? 6 : startingDay - 1;

  const numDaysInMonth = new Date(year, month + 1, 0).getDate();
  const numWeeks = Math.ceil((numDaysInMonth + startingDay) / 7);

  const calendar = [];

  let day = 1;
  const prevMonthNumDays = new Date(year, month, 0).getDate();
  for (let i = 0; i < numWeeks; i += 1) {
    const week = [];
    for (let j = 0; j < 7; j += 1) {
      if (i === 0 && j < startingDay) {
        const prevMonthDay = prevMonthNumDays - (startingDay - j - 1);
        week.push({ day: prevMonthDay, isCurrentMonth: false });
      } else if (day <= numDaysInMonth) {
        week.push({ day, isCurrentMonth: true });
        day += 1;
      } else {
        week.push({ day: day - numDaysInMonth, isCurrentMonth: false });
        day += 1;
      }
    }
    calendar.push(week);
  }

  const isCurrentDay = (day, monthIndex, year) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      months[monthIndex] === months[today.getMonth()] &&
      year === today.getFullYear()
    );
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <CalendarContainer>
      <MonthWrapper>
        <MonthTitle>{months[month]}</MonthTitle>
        <ButtonWrapper>
          <IconButton onClick={goToPreviousMonth}>
            {" "}
            <Icon
              styles={{
                fill: "var( --accent-green-300)",
                transform: "rotate(90deg)",
              }}
              width={15}
              height={15}
              iconId={"arrow-down"}
            />
          </IconButton>
          <IconButton onClick={goToNextMonth}>
            <Icon
              styles={{
                fill: "var( --accent-green-300)",
                transform: "rotate(-90deg)",
              }}
              width={15}
              height={15}
              iconId={"arrow-down"}
            />
          </IconButton>
        </ButtonWrapper>
      </MonthWrapper>
      <table>
        <thead>
          <TableDays>
            {days.map((day) => (
              <TableHeaderElem key={day}>
                {day === "Нд" ? <SundaySpan>{day}</SundaySpan> : day}
              </TableHeaderElem>
            ))}
          </TableDays>
        </thead>
        <Tbody>
          {calendar.map((week, index) => (
            <DateOfTheWeek key={index}>
              {week.map((data, index) => {
                return (
                  <TableElem
                    key={index}
                    style={{
                      color: isCurrentDay(data.day)
                        ? undefined
                        : data.isCurrentMonth
                        ? "#111010"
                        : "#8C9098",
                      border: isCurrentDay(data.day, month, year)
                        ? "1px solid #E9A116"
                        : "none",
                      backgroundColor: isCurrentDay(data.day, month, year)
                        ? "#FFF1C6"
                        : "inherit",
                    }}
                  >
                    {data.day}
                  </TableElem>
                );
              })}
            </DateOfTheWeek>
          ))}
        </Tbody>
      </table>
    </CalendarContainer>
  );
};

export default CalendarMonths;
