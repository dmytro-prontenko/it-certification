import { Link, NavLink, useLocation } from "react-router-dom";
import DropdownUserMenu from "../DropdownUserMenu/DropdownUserMenu";
import Icon from "../Icon/Icon";
import NavMenu from "../NavMenu/NavMenu";
import {
  HeaderLogo,
  HeaderMenu,
  HeaderWrapper,
  WrapperMenu,
  UserPanel,
  UserInfo,
  UserAvatar,
  UserName,
  UserSettingsButton,
  LinkWrrap,
} from "./Header.styled";
import NavMenuTeacher from "../NavMenuTeacher/NavMenuTeacher";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <HeaderWrapper>
      <HeaderLogo className="container">
        <Icon iconId="header-left" height={32} width={200} />
        <Icon iconId="emblem" height={80} width={64} />
        <Icon iconId="header-right" height={32} width={200} />
      </HeaderLogo>
      <HeaderMenu>
        <WrapperMenu className="container">
          <LinkWrrap to="/">
            <Icon iconId="emblem" height={72} width={49} gap={4} />
            <Icon iconId="headline" height={14} width={49} />
          </LinkWrrap>

          {pathname.includes("/teachers-cabinet") ? (
            <NavMenuTeacher />
          ) : (
            <NavMenu />
          )}

          <UserPanel>
            <UserInfo>
              <UserAvatar />
              <UserName>Ім&lsquo;я/Прізвище</UserName>
            </UserInfo>

            <UserSettingsButton>
              <DropdownUserMenu />
            </UserSettingsButton>
          </UserPanel>
        </WrapperMenu>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;
