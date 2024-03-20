import Icon from "../Icon/Icon";
import {
  AddressContainer,
  AddressWrapper,
  FooterContainer,
  IconContainer,
  InfoContainer,
  LinksContainer,
  LinksWrapper,
  SocialItem,
  SocialLink,
  SocialList,
  StyledFooter,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter className="container">
      <IconContainer>
        <Icon width={48} height={72} iconId={"emblem"} />
        <p>Ed UA</p>
      </IconContainer>
      <FooterContainer>
        <SocialList>
          <SocialItem>
            <SocialLink href="#">
              <Icon width={24} height={24} iconId={"instagram"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <Icon width={24} height={24} iconId={"facebook"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <Icon width={24} height={24} iconId={"phone"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="#">
              <Icon width={24} height={24} iconId={"telegram"} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <InfoContainer>
          <LinksContainer>
            <LinksWrapper>
              <p>Офіційний веб-сайт</p>
              <a href="#">Education UA</a>
            </LinksWrapper>
            <LinksWrapper>
              <p>Права на всі матеріали належать</p>
              <a href="#">Education UA</a>
            </LinksWrapper>
            <LinksWrapper>
              <Icon width={20} height={20} iconId={"copyright"} />
              <a href="">Education UA</a>
              <p>2024 Всі права захищені</p>
            </LinksWrapper>
          </LinksContainer>
          <AddressContainer>
            <AddressWrapper>
              <p>Гаряча лінія</p>
              <a href="">0 (800) 000 000</a>
            </AddressWrapper>
            <AddressWrapper>
              <p>Email</p>
              <a href="">example@gmail.com</a>
            </AddressWrapper>
            <AddressWrapper>
              <p>Телефон для дзвінків із-за кордону</p>
              <a href="">044 000 00 00</a>
            </AddressWrapper>
            <AddressWrapper>
              <p>Співпраця</p>
              <a href="">example@gmail.com</a>
            </AddressWrapper>
          </AddressContainer>
        </InfoContainer>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
