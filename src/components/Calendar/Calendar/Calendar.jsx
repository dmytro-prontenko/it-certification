import CalendarEvents from "../CalendarEvents/CalendarEvents";
import CalendarMonths from "../CalendarMonths/CalendarMonths";
import CalendarNotifications from "../CalendarNotifications/CalendarNotifications";
import {
  CalendarContainer,
  CalendarSection,
  NotificationsAndEventsContainer,
} from "./Calendar.styled";

const Calendar = () => {
  return (
    <CalendarSection>
      <CalendarContainer>
        <CalendarMonths />
        <NotificationsAndEventsContainer>
          <CalendarNotifications />
          <CalendarEvents />
        </NotificationsAndEventsContainer>
      </CalendarContainer>
    </CalendarSection>
  );
};

export default Calendar;
