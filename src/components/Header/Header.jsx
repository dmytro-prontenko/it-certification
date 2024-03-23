import { Container } from "@mui/material";
import NavMenu from "../NavMenu/NavMenu";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import {
  HeaderWrapper,
  BrandSection,
  HeaderLogo,
  HeaderMenu,
  IconContainer,
  UserPanel,
  Button
} from "./Header.styled";

const Header = () => {
  return (
    <Container maxWidth="md">
      <HeaderWrapper>
        <BrandSection>
        <HeaderLogo>
          <Icon iconId="header-left" height={40} width={254} gap={40}/>
          <Icon iconId="emblem" height={92} width={72} gap={40}/>
          <Icon iconId="header-right" height={40} width={254} gap={40}/>
          </HeaderLogo>
        </BrandSection>
        <HeaderMenu>
  <IconContainer>
    <Link to="/">
      <Icon iconId="emblem" height={90} width={60}/>
      <p>Ed UA</p>
    </Link>
  </IconContainer>
    <NavMenu />
  <UserPanel>
    <div>Ім&lsquo;я / Прізвище:</div>
    <Button>
      <Icon iconId="arrow-down" height={24} width={24}/>
    </Button>
  </UserPanel>
</HeaderMenu>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
