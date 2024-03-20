import Icon from "../Icon/Icon";
import {
  AddressContainer,
  AddressWrapper,
  FooterContainer,
  FooterLink,
  FooterlText,
  IconContainer,
  InfoContainer,
  LinksContainer,
  LinksWrapper,
  SocialIcon,
  SocialItem,
  SocialList,
  StyledFooter,
} from "./Footer.styled";
import sprite from "../../assets/it-sertification.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <IconContainer>
        <Icon width={48} height={72} iconId={"emblem"} />
        <p>Ed UA</p>
      </IconContainer>
      <FooterContainer>
        <SocialList>
          <SocialItem>
            <FooterLink href="#">
              <SocialIcon $meta={"instagram"} width={24} height={24}>
                <use href={`${sprite}#${"instagram"}`}></use>
              </SocialIcon>
            </FooterLink>
          </SocialItem>
          <SocialItem>
            <FooterLink href="#">
              <SocialIcon $meta={"facebook"} width={24} height={24}>
                <use href={`${sprite}#${"facebook"}`}></use>
              </SocialIcon>
            </FooterLink>
          </SocialItem>
          <SocialItem>
            <FooterLink href="#">
              <SocialIcon $meta={"phone"} width={24} height={24}>
                <use href={`${sprite}#${"phone"}`}></use>
              </SocialIcon>
            </FooterLink>
          </SocialItem>
          <SocialItem>
            <FooterLink href="#">
              <SocialIcon $meta={"telegram"} width={24} height={24}>
                <use href={`${sprite}#${"telegram"}`}></use>
              </SocialIcon>
            </FooterLink>
          </SocialItem>
        </SocialList>
        <InfoContainer>
          <LinksContainer>
            <LinksWrapper>
              <FooterlText>Офіційний веб-сайт</FooterlText>
              <FooterLink href="#">Education UA</FooterLink>
            </LinksWrapper>
            <LinksWrapper>
              <FooterlText>Права на всі матеріали належать</FooterlText>
              <FooterLink href="#">Education UA</FooterLink>
            </LinksWrapper>
            <LinksWrapper>
              <Icon width={20} height={20} iconId={"copyright"} />
              <FooterLink href="">Education UA</FooterLink>
              <FooterlText>2024</FooterlText>
              <FooterlText> Всі права захищені</FooterlText>
            </LinksWrapper>
          </LinksContainer>
          <AddressContainer>
            <AddressWrapper>
              <FooterlText>Гаряча лінія</FooterlText>
              <FooterLink href="tel:0 (800) 000 000">
                0 (800) 000 000
              </FooterLink>
            </AddressWrapper>
            <AddressWrapper>
              <FooterlText>Email</FooterlText>
              <FooterLink href="malito:example@gmail.com">
                example@gmail.com
              </FooterLink>
            </AddressWrapper>
            <AddressWrapper>
              <FooterlText>Телефон для дзвінків із-за кордону</FooterlText>
              <FooterLink href="tel:044 000 00 00">044 000 00 00</FooterLink>
            </AddressWrapper>
            <AddressWrapper>
              <FooterlText>Співпраця</FooterlText>
              <FooterLink href="malito:example@gmail.com">
                example@gmail.com
              </FooterLink>
            </AddressWrapper>
          </AddressContainer>
        </InfoContainer>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
