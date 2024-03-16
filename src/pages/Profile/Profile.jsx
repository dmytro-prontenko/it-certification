import { useLocation } from "react-router-dom";
import {
  StyledProfileLinksWrapper,
  StyledProfileNavLink,
} from "./Profile.styled";

const Profile = () => {
  const location = useLocation();
  return (
    <StyledProfileLinksWrapper>
      <StyledProfileNavLink
        to="/profile-personal-data"
        state={{ from: location }}
      >
        Мої дані
      </StyledProfileNavLink>
      <StyledProfileNavLink
        to="/profile-orders"
        state={{ from: location }}
      >
        Мої замовлення
      </StyledProfileNavLink>
      <StyledProfileNavLink
        to="/profile-bonuses"
        state={{ from: location }}
      >
        Мої бонуси
      </StyledProfileNavLink>
      <StyledProfileNavLink
        to="/favorites"
        state={{ from: location }}
      >
        Обране
      </StyledProfileNavLink>
    </StyledProfileLinksWrapper>
  );
};

export default Profile;
