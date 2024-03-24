import NavMenu from "../NavMenu/NavMenu";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import {
  HeaderWrapper,
  BrandSection,
  NavWrapperMenu,
  HeaderLogo,
  HeaderMenu,
  IconContainer,
  UserPanel,
  Button,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <BrandSection>
        <HeaderLogo>
          <Icon iconId="header-left" height={40} width={254} gap={40} />
          <Icon iconId="emblem" height={92} width={72} gap={40} />
          <Icon iconId="header-right" height={40} width={254} gap={40} />
        </HeaderLogo>
      </BrandSection>
      <HeaderMenu>
        <NavWrapperMenu>
          <IconContainer>
            <Link to="/">
              <Icon iconId="emblem" height={72} width={48} gap={4}/>
              <Icon iconId="headline" height={14} width={48} />
            </Link>
          </IconContainer>
          <NavMenu />
        </NavWrapperMenu>
        <UserPanel>
          <div>Ім&lsquo;я / Прізвище:</div>
          <Button>
            <Icon iconId="arrow-down" height={24} width={24} />
          </Button>
        </UserPanel>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;
