import { NavLink } from "react-router-dom";
import {
  StyledContactsLink,
  StyledFooterDownPart,
  StyledFooterDownPartLinks,
  StyledFooterLogo,
  StyledFooterNavLink,
  StyledFooterNavList,
  StyledFooterSubwrapper,
  StyledFooterTitle,
  StyledFooterUpPart,
  StyledFooterWrapper,
  StyledPrivacyPolitics,
  StyledSalonInfo,
  StyledSalons,
} from "./Footer.styled";

import logoIcon from "../../assets/icons/main-logo.png";
import sprite from "../../assets/sprite.svg";

const Footer = () => {

  const hadleNavLinkClick = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
      <StyledFooterWrapper>
        <StyledFooterSubwrapper>
          <StyledFooterUpPart>
            <StyledFooterTitle>
              кваліфіковані послуги та висока якість заради вашого ідеального
              зору
            </StyledFooterTitle>
            <StyledSalons>
              <div>Наші салони:</div>
              <StyledSalonInfo>
                <StyledContactsLink href="tel:+38 (066) 949-26-76">
                  +38 (066) 949-26-76
                </StyledContactsLink>
                {/* TODO чи додавати посилання на карту?*/}
                <div>м. Івано-Франківськ вул. Галицька, 64</div>
              </StyledSalonInfo>
              <StyledSalonInfo>
                <StyledContactsLink href="tel:+38 (050) 608-75-29">
                  +38 (050) 608-75-29
                </StyledContactsLink>
                {/* TODO чи додавати посилання на карту?*/}
                <div>
                  м. Словʼянськ <br /> вул. Центральна 43
                </div>
              </StyledSalonInfo>
            </StyledSalons>
            <StyledFooterNavList>
              <StyledFooterNavLink to="/" onClick={hadleNavLinkClick}>Головна</StyledFooterNavLink>
              <StyledFooterNavLink to="/about" onClick={hadleNavLinkClick}>Про нас</StyledFooterNavLink>
              <StyledFooterNavLink to="/useful" onClick={hadleNavLinkClick}>Корисне</StyledFooterNavLink>
              <StyledFooterNavLink to="/catalog" onClick={hadleNavLinkClick}>Каталог</StyledFooterNavLink>
              <StyledFooterNavLink to="/reviews" onClick={hadleNavLinkClick}>Відгуки</StyledFooterNavLink>
              <StyledFooterNavLink to="/contacts" onClick={hadleNavLinkClick}>Контакти</StyledFooterNavLink>
            </StyledFooterNavList>
          </StyledFooterUpPart>
          <NavLink to="/">
            <StyledFooterLogo
              src={logoIcon}
              alt="Main logo"
              width={260}
              height={83.5}
            />
          </NavLink>
          <StyledFooterDownPart>
            <StyledFooterDownPartLinks>
              <li>
                <NavLink>
                  <svg width="28px" height="28px" fill="#fafefd">
                    <use href={`${sprite}#icon-instagram-black`}></use>
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <svg width="28px" height="28px" fill="#fafefd">
                    <use href={`${sprite}#icon-viber-black`}></use>
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <svg width="28px" height="28px" fill="#fafefd">
                    <use href={`${sprite}#icon-telegram-black`}></use>
                  </svg>
                </NavLink>
              </li>
            </StyledFooterDownPartLinks>
            <StyledPrivacyPolitics>
              All Rights Reserved, Privacy Policy & Terms of Use
            </StyledPrivacyPolitics>
          </StyledFooterDownPart>
        </StyledFooterSubwrapper>
      </StyledFooterWrapper>
    </>
  );
};

export default Footer;
