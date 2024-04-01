import Icon from "../../Icon/Icon";
import {
  IconAndTitleWrapper,
  Notification,
  NotificationAndEventsTitle,
  NotificationText,
  NotificationWrapper,
  NotificationsList,
} from "./CalendarNotifications.styled";

const CalendarNotifications = () => {
  return (
    <div>
      <IconAndTitleWrapper>
        <Icon
          styles={{
            fill: "var( --link-yellow-500)",
          }}
          width={24}
          height={24}
          iconId={"bell"}
        />
        <NotificationAndEventsTitle>Нагадування</NotificationAndEventsTitle>
      </IconAndTitleWrapper>
      <NotificationsList>
        <Notification>
          <NotificationWrapper>
            <Icon
              styles={{
                fill: "var( --delete-red)",
              }}
              width={24}
              height={24}
              iconId={"exclamation"}
            />
            <NotificationText>
              До наступного заходу залишилося 3 дні
            </NotificationText>
          </NotificationWrapper>
          <NotificationText $withPadding>Назва лекції</NotificationText>
        </Notification>
        <li>
          <NotificationWrapper>
            <Icon
              styles={{
                fill: "var( --delete-red)",
              }}
              width={24}
              height={24}
              iconId={"exclamation"}
            />
            <NotificationText>Захід сьогодні</NotificationText>
          </NotificationWrapper>
          <NotificationText $withPadding>Назва лекції</NotificationText>
        </li>
      </NotificationsList>
    </div>
  );
};

export default CalendarNotifications;
