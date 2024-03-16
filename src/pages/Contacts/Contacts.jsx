import {
  StyledCommonTitle,
  StyledCommonTitleH2,
} from "../../commonStyles/commonStyles";
import {
  StyledConactSVG,
  StyledContactLink,
  StyledContactsLinksWrapper,
  StyledContactsList,
  StyledContactsListItem,
  StyledContactsListItemContact,
  StyledContactsListSubItem,
  StyledContactsListWrapper,
  StyledContactsSubwrapper,
  StyledFrame,
  StylerContactsWrapper
} from "./Contacts.styled";

import sprite from "../../assets/sprite.svg";

const Contacts = () => {
  return (
    <StylerContactsWrapper>
      <StyledCommonTitle>Контакти</StyledCommonTitle>

      <StyledCommonTitleH2>Якщо у Вас виникли питання:</StyledCommonTitleH2>
      <StyledContactsSubwrapper>
        <StyledContactsListWrapper>
          <StyledCommonTitleH2>Наші салони:</StyledCommonTitleH2>
          <StyledContactsList>
            <StyledContactsListItem>
              <StyledContactsLinksWrapper>
                <StyledContactsListItemContact>
                  <StyledContactsListSubItem>
                    <StyledConactSVG>
                      <use href={`${sprite}#icon-location`}></use>
                    </StyledConactSVG>
                    <StyledContactLink href="https://maps.app.goo.gl/RegYS6nm5kAtSa677">
                      м. Івано-Франківськ <br />
                      вул. Галицька, 64
                    </StyledContactLink>
                  </StyledContactsListSubItem>
                </StyledContactsListItemContact>
                <StyledContactsListItemContact>
                  <StyledConactSVG>
                    <use href={`${sprite}#icon-phone`}></use>
                  </StyledConactSVG>
                  <StyledContactLink href="tel:+38 (066) 949-26-76">
                    +38 (066) 949-26-76
                  </StyledContactLink>
                </StyledContactsListItemContact>
              </StyledContactsLinksWrapper>
              <StyledFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.982943030542!2d24.70414637684975!3d48.93476669532814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c10895f80967%3A0xe282a5ad1921231e!2z0YPQuy4g0JPQsNC70LjRhtC60LDRjywgNjQsINCY0LLQsNC90L4t0KTRgNCw0L3QutC-0LLRgdC6LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCA3NjAwMA!5e0!3m2!1sru!2s!4v1709466013517!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
              />
            </StyledContactsListItem>

            <StyledContactsListItem>
              <StyledContactsLinksWrapper>
                <StyledContactsListItemContact>
                  <StyledContactsListSubItem>
                    <StyledConactSVG>
                      <use href={`${sprite}#icon-location`}></use>
                    </StyledConactSVG>
                    <StyledContactLink href="https://maps.app.goo.gl/mfWGs5oM4KHVqb1X8">
                      м. Словʼянськ <br />
                      вул. Центральна 43
                    </StyledContactLink>
                  </StyledContactsListSubItem>
                </StyledContactsListItemContact>
                <StyledContactsListItemContact>
                  <StyledConactSVG>
                    <use href={`${sprite}#icon-phone`}></use>
                  </StyledConactSVG>
                  <StyledContactLink href="tel:+38 (050) 608-75-29">
                    +38 (050) 608-75-29
                  </StyledContactLink>
                </StyledContactsListItemContact>
              </StyledContactsLinksWrapper>
              <StyledFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.538209933208!2d37.59382107684609!3d48.84794650144092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df9ad8bd0a5a07%3A0x4a1cc28c3db1c2fb!2z0LLRg9C70LjRhtGPINCm0LXQvdGC0YDQsNC70YzQvdCwLCA0Mywg0KHQu9C-0LIn0Y_QvdGB0YzQuiwg0JTQvtC90LXRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDg0MTIy!5e0!3m2!1sru!2s!4v1709465447593!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
              ></StyledFrame>
            </StyledContactsListItem>

            <StyledContactsListItem>
              <StyledContactsLinksWrapper>
                <StyledContactsListItemContact>
                  <StyledContactsListSubItem>
                    <StyledConactSVG>
                      <use href={`${sprite}#icon-location`}></use>
                    </StyledConactSVG>
                    <StyledContactLink href="https://maps.app.goo.gl/fEWbgfrER2mr1m1T6">
                      м. Слов’янськ <br />
                      вул. Г. Батюка 24а
                    </StyledContactLink>
                  </StyledContactsListSubItem>
                </StyledContactsListItemContact>
                <StyledContactsListItemContact>
                  <StyledConactSVG>
                    <use href={`${sprite}#icon-phone`}></use>
                  </StyledConactSVG>
                  <StyledContactLink href="tel:+38 (099) 319-31-03">
                    +38 (099) 319-31-03
                  </StyledContactLink>
                </StyledContactsListItemContact>
              </StyledContactsLinksWrapper>
              <StyledFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.071623087721!2d37.56918667684649!3d48.856844600814895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df9b392555dc49%3A0xb1c32491c8d7f3dc!2z0YPQuy4g0JPQtdC90LXRgNCw0LvQsCDQkdCw0YLRjtC60LAsIDI00JAsINCh0LvQsNCy0Y_QvdGB0LosINCU0L7QvdC10YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCA4NDEwMA!5e0!3m2!1sru!2s!4v1709466073065!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
              ></StyledFrame>
            </StyledContactsListItem>

            <StyledContactsListItem>
              <StyledContactsLinksWrapper>
                <StyledContactsListItemContact>
                  <StyledContactsListSubItem>
                    <StyledConactSVG>
                      <use href={`${sprite}#icon-location`}></use>
                    </StyledConactSVG>
                    <StyledContactLink href="https://maps.app.goo.gl/LtjEQPwN8ERmW6Jg6">
                      м. Івано-Франківськ <br />
                      вул. Галицька, 64
                    </StyledContactLink>
                  </StyledContactsListSubItem>
                </StyledContactsListItemContact>
                <StyledContactsListItemContact>
                  <StyledConactSVG>
                    <use href={`${sprite}#icon-phone`}></use>
                  </StyledConactSVG>
                  <StyledContactLink href="tel:+38 (099) 961-29-56">
                    +38 (099) 961-29-56
                  </StyledContactLink>
                </StyledContactsListItemContact>
              </StyledContactsLinksWrapper>
              <StyledFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2478399773436!2d37.55772427684547!3d48.83441110239314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df9b06de5d1715%3A0x6431f5face22cccc!2z0LLRg9C70LjRhtGPINCa0L7QvNGP0YXQvtCy0LAsIDY3LCDQodC70L7QsifRj9C90YHRjNC6LCDQlNC-0L3QtdGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgODQxMjI!5e0!3m2!1sru!2s!4v1709466149863!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
              ></StyledFrame>
            </StyledContactsListItem>
          </StyledContactsList>
        </StyledContactsListWrapper>
        {/*
        │ =========================
        │       Socials icons
        │ =========================
        */}
        {/* <StyledSocial>
          <StyledCommonTitleH2>Звʼяжіться з нами:</StyledCommonTitleH2>
          <StyledSocialList>
            <StyledSocialListItem>
              <a href="#">
                <img src={tg} alt="Telegram link" />
              </a>
            </StyledSocialListItem>
            <StyledSocialListItem>
              <a href="#">
                <img src={tg} alt="Telegram link" />
              </a>
            </StyledSocialListItem>
            <StyledSocialListItem>
              <a href="#">
                <img src={viber} alt="Viber link" />
              </a>
            </StyledSocialListItem>
          </StyledSocialList>
        </StyledSocial> */}
      </StyledContactsSubwrapper>
    </StylerContactsWrapper>
  );
};

export default Contacts;
