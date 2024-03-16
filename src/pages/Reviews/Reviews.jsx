import { StyledCommonTitle } from "../../commonStyles/commonStyles";
import {
  StyledReviewListItemText,
  StyledReviewUserIcon,
  StyledReviewsList,
  StyledReviewsListItem,
  StyledReviewsListItemUser,
  StyledReviewsUserWrapper,
  StyledStarSVG,
  StyledUserName,
  StyledUserRate,
  StylerReviewsWrapper,
} from "./Reviews.styled";

import person_1 from "../../assets/images/reviews/person1.webp";
import person_2 from "../../assets/images/reviews/person2.webp";
import person_3 from "../../assets/images/reviews/person3.webp";

import sprite from "../../assets/sprite.svg";

const Reviews = () => {
  return (
    <StylerReviewsWrapper>
      <StyledCommonTitle>Відгуки</StyledCommonTitle>
      <StyledReviewsList>
        <StyledReviewsListItem>
          <StyledReviewListItemText>
            Нещодавно придбав нові окуляри з антибліковим покриттям, і різниця в
            зручності та якості зору була просто вражаючою. Окуляри дуже легкі
            та стильні, а антиблікове покриття дозволяє мені комфортно
            використовувати їх при роботі на комп’ютері або за кермом автомобіля
            в нічний час. Я бачу світ ясно та чітко, і це справді полегшує моє
            щоденне життя!
          </StyledReviewListItemText>
          <StyledReviewsListItemUser>
            <StyledReviewUserIcon
              src={person_1}
              alt="User icon"
            ></StyledReviewUserIcon>
            <StyledReviewsUserWrapper>
              <StyledUserName>Nazarko Lesiv</StyledUserName>
              <StyledUserRate>
                {/* TODO зробити окремий компонент для рендеру рейтингу */}
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
              </StyledUserRate>
            </StyledReviewsUserWrapper>
          </StyledReviewsListItemUser>
        </StyledReviewsListItem>

        <StyledReviewsListItem>
          <StyledReviewListItemText>
            Я дуже задоволена відвідуванням цього магазину. У них великий вибір
            окулярів для всіх смаків і потреб. Персонал був дуже ввічливим і
            професійним, допомігши мені знайти пару ідеальних окулярів, які
            підходять моєму обличчю. Мої окуляри були готові дуже швидко. Ціни
            були розумними та мали відмінну якість за свої гроші. Я б із
            задоволенням рекомендувала цей магазин усім, хто шукає нові окуляри
            чи контактні лінзи.
          </StyledReviewListItemText>
          <StyledReviewsListItemUser>
            <StyledReviewUserIcon
              src={person_2}
              alt="User icon"
            ></StyledReviewUserIcon>
            <StyledReviewsUserWrapper>
              <StyledUserName>Валя Пікуляк</StyledUserName>
              <StyledUserRate>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
              </StyledUserRate>
            </StyledReviewsUserWrapper>
          </StyledReviewsListItemUser>
        </StyledReviewsListItem>

        <StyledReviewsListItem>
          <StyledReviewListItemText>
            Через наслідки роботи почав просідати зір. Колеги порадили цю оптику
            ,аргументуючи професійністю персоналу. І це дійсно правда. Прийшовши
            я отримав весь спектр перевірки зору. Рекомендую однозначно.
            Привітний,знаючий свою справу персонал. Також окуляри ціна-якість,я
            задоволений.
          </StyledReviewListItemText>
          <StyledReviewsListItemUser>
            <StyledReviewUserIcon
              src={person_3}
              alt="User icon"
            ></StyledReviewUserIcon>
            <StyledReviewsUserWrapper>
              <StyledUserName>Сергій Дмитрів</StyledUserName>
              <StyledUserRate>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
                <StyledStarSVG>
                  <use href={`${sprite}#icon-star`}></use>
                </StyledStarSVG>
              </StyledUserRate>
            </StyledReviewsUserWrapper>
          </StyledReviewsListItemUser>
        </StyledReviewsListItem>
      </StyledReviewsList>
    </StylerReviewsWrapper>
  );
};

export default Reviews;
