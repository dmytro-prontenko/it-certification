import { Link } from "react-router-dom";
import DropdownUserMenu from "../DropdownUserMenu/DropdownUserMenu";
import Icon from "../Icon/Icon";
import NavMenu from "../NavMenu/NavMenu";
import {
  HeaderLogo,
  HeaderMenu,
  HeaderWrapper,
  NavWrapperMenu,
  WrapperMenu,
  UserPanel,
  UserInfo, 
  UserAvatar, 
  UserName,
  UserSettingsButton
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderLogo className="container">
          <Icon iconId="header-left" height={32} width={200}  />
          <Icon iconId="emblem" height={80} width={64} />
          <Icon iconId="header-right" height={32} width={200} />
        </HeaderLogo>
      <HeaderMenu>
        <WrapperMenu className="container">
          <NavWrapperMenu>
              <Link to="/">
                <Icon iconId="emblem" height={72} width={49} gap={4} />
                <Icon iconId="headline" height={14} width={49} />
              </Link>
            <NavMenu />
          </NavWrapperMenu>
          <UserPanel>
            <UserInfo>
            <UserAvatar/>
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
