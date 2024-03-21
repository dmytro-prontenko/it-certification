import HeroWelcom from "../../components/Hero/HeroWelcom";
import {
  ImgPhoto,
  ImgText,
  InfoText,
  InfoTitle,
  InfoTop,
  LIstItem,
  Text,
  WrapperInfo,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <>
      <HeroWelcom />
      <div className="container">
        <WrapperInfo>
          <InfoTop>
            <InfoText>
              <div>
                <InfoTitle>Тренди сьогодення</InfoTitle>
                <Text>
                  Віртуальний світ, комп’ютерні розробки, веб- та мобільні
                  додатки, комп’ютерні ігри та комп’ютерна графіка,
                  інтелектуальні, роботототехнічні системи - це невід’ємна
                  складова суспільства, яка активно і радикально змінює спосіб
                  життя сучасної людини.
                </Text>
              </div>
              <div>
                <InfoTitle>
                  12 галузь освіти “Інформаційні технології”
                </InfoTitle>
                <Text>
                  Галузь знань, яка динамічно розвивається. Вона охоплює
                  комп’ютерні науки, інформаційні системи та технології,
                  комп’ютерну інженерію, інженерію програмного забезпечення,
                  системний аналіз, кібербезпеку.
                </Text>
              </div>
            </InfoText>
            <div>
              <ImgText src="/WelcomPage/Text.png" alt="text" />
            </div>
          </InfoTop>
        </WrapperInfo>
        <div>
          <InfoTop>
            <InfoText>
              <div>
                <InfoTitle>Про платформу</InfoTitle>
                <Text>
                  Вашій увазі представлена інформаційна система, яка дозволяє
                  керувати процесом сертифікації ІТ-дисциплін в ЗВО за рахунок
                  обліку поточного стану сібусів освітніх курсів, а також
                  можливості оцінювати, узагальнювати існуючі матеріали та
                  спрямовано залучати викладачів до процесу сертифікації
                  дисциплін та подальшого їх покращення.
                </Text>
                <Text>
                  Облікова система, яка надає змогу знайти й ознайомитися з
                  усією необхідною інформацією стосовно 12 галузі освіти
                  “Інформаційні технології”. А саме з інформацією про
                </Text>
              </div>
              <div>
                <ul>
                  <LIstItem>Викладачів</LIstItem>
                  <LIstItem>ЗВО</LIstItem>
                  <LIstItem>Рівень освіти</LIstItem>
                  <LIstItem>Освітні програми</LIstItem>
                  <LIstItem>Кафедри</LIstItem>
                  <LIstItem>Дисципліни</LIstItem>
                  <LIstItem>Блоки дисциплін</LIstItem>
                  <LIstItem>Групи дисциплін</LIstItem>
                </ul>
              </div>
            </InfoText>
            <div>
              <ImgPhoto src="/WelcomPage/Photo.png" alt="photo" />
            </div>
          </InfoTop>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
