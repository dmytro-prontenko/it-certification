import {
  StyledBoldSpan,
  StyledCommonText,
  StyledCommonTitle,
} from "../../commonStyles/commonStyles";
import {
  StyledAboutImage,
  StyledAboutList,
  StyledAboutListItem,
  StyledAboutUsArticle,
  StyledAboutUsSubwrapper,
  StyledAboutUsWrapper,
  StyledTextWrapper,
} from "./AboutUs.styled";

import glasses_1 from "../../assets/images/about-us/about-us-header-img.webp";
import glasses_2 from "../../assets/images/about-us/about-us-header-img-2.webp";

const AboutUs = () => {
  return (
    <StyledAboutUsWrapper>
      <StyledCommonTitle>Про нас</StyledCommonTitle>
      <StyledAboutUsSubwrapper>
        <StyledAboutUsArticle>
          <StyledAboutImage src={glasses_1} alt="Glasses" />
          <StyledCommonText>
            <StyledBoldSpan>«Мережа оптик «ОКУЛІСТ»</StyledBoldSpan> - це оптика
            з кваліфікованим лікарем, та власною лабораторією для виготовлення
            окулярів. <br />В основу роботи покладена сучасна європейська
            діагностика порушень зору, яка включає в себе оцінку по 9 тестах.
          </StyledCommonText>
        </StyledAboutUsArticle>
        <StyledAboutUsArticle>
          <StyledAboutImage src={glasses_2} alt="Glasses another view" />
          <StyledTextWrapper>
            <StyledCommonText>
              <StyledBoldSpan>
                Окуляри - в цьому ми теж не звичайні.
                <br />
                <br />
              </StyledBoldSpan>
              <StyledAboutList>
                <StyledAboutListItem>
                  ✅ Перед оформленням проводиться дворівневий контроль
                  відповідності оправи для певного замовлення та відповідності з
                  технічними характеристиками обраних окулярних лінз.
                </StyledAboutListItem>
                <StyledAboutListItem>
                  ✅ Контактні лінзи для забезпечення всіх сучасних запитів
                  людей.
                </StyledAboutListItem>
                <StyledAboutListItem>
                  ✅ Сферичні, астигматичні, мультифокальні, кольорові та нічні
                  лінзи для контролю короткозорості.
                </StyledAboutListItem>
              </StyledAboutList>
            </StyledCommonText>
          </StyledTextWrapper>
        </StyledAboutUsArticle>
      </StyledAboutUsSubwrapper>
    </StyledAboutUsWrapper>
  );
};

export default AboutUs;
