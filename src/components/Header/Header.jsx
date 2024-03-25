import { Link } from "react-router-dom";
import DropdownUserMenu from "../DropdownUserMenu/DropdownUserMenu";
import Icon from "../Icon/Icon";
import NavMenu from "../NavMenu/NavMenu";
import {
  HeaderLogo,
  HeaderMenu,
  HeaderWrapper,
  IconContainer,
  NavWrapperMenu,
  WrapperMenu,
  UserPanel,
  UserInfo, 
  UserAvatar, 
  UserName,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderLogo className="container">
          <Icon iconId="header-left" height={40} width={254} gap={40} />
          <Icon iconId="emblem" height={92} width={72} gap={40} />
          <Icon iconId="header-right" height={40} width={254} gap={40} />
        </HeaderLogo>
      <HeaderMenu>
        <WrapperMenu className="container">
          <NavWrapperMenu>
            <IconContainer>
              <Link to="/">
                <Icon iconId="emblem" height={72} width={48} gap={4} />
                <Icon iconId="headline" height={14} width={48} />
              </Link>
            </IconContainer>
            <NavMenu />
          </NavWrapperMenu>
          <UserPanel>
            <UserInfo>
            <UserAvatar/>
            <UserName>Ім&lsquo;я/Прізвище</UserName>
            </UserInfo>
            <DropdownUserMenu />
          </UserPanel>
        </WrapperMenu>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;
