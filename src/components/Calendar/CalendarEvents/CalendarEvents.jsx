import Icon from "../../Icon/Icon";
import { NotificationAndEventsTitle } from "../CalendarNotifications/CalendarNotifications.styled";
import {
  CalendarEventContainer,
  CalendarEventsList,
  Event,
  EventsText,
  IconAndEventsWrapper,
} from "./CalendarEvents.styled";

const CalendarEvents = () => {
  return (
    <CalendarEventContainer>
      <IconAndEventsWrapper>
        <Icon
          styles={{
            fill: "var( --link-yellow-500)",
          }}
          width={24}
          height={24}
          iconId={"bell"}
        />
        <NotificationAndEventsTitle>
          Події на поточний тиждень
        </NotificationAndEventsTitle>
      </IconAndEventsWrapper>
      <CalendarEventsList>
        <Event>
          <Icon
            styles={{
              fill: "var( --accent-green-300)",
            }}
            width={12}
            height={12}
            iconId={"point"}
          />
          <EventsText>06.04.2024</EventsText>
          <EventsText>Назва лекції</EventsText>
        </Event>
        <Event>
          <Icon
            styles={{
              fill: "var( --accent-green-300)",
            }}
            width={12}
            height={12}
            iconId={"point"}
          />
          <EventsText>09.04.2024</EventsText>
          <EventsText>Назва лекції</EventsText>
        </Event>
        <Event>
          <Icon
            styles={{
              fill: "var( --accent-green-300)",
            }}
            width={12}
            height={12}
            iconId={"point"}
          />
          <EventsText>12.04.2024</EventsText>
          <EventsText>Назва лекції</EventsText>
        </Event>
      </CalendarEventsList>
    </CalendarEventContainer>
  );
};

export default CalendarEvents;
