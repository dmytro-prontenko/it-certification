import {
  StyledCommonText
} from "../../commonStyles/commonStyles";
import {
  StyledPromoBoldDesc,
  StyledPromoSubWrapper,
  StyledPromoWrapper,
  StyledPromotionalOffersImg,
  StyledPromotionalOffersTitle,
} from "./PromotionalOffers.styled";

import glasses_promo_2 from "../../assets/images/action-image-continue.webp";
import glasses_promo_1 from "../../assets/images/action-image.webp";

const PromotionalOffers = () => {
  return (
    <>
      <StyledPromotionalOffersTitle>
        Акційні пропозиції
      </StyledPromotionalOffersTitle>
      <StyledPromoWrapper>
        <StyledPromoSubWrapper>
          <StyledPromotionalOffersImg src={glasses_promo_1} alt="Glasses" />
          <StyledPromotionalOffersImg src={glasses_promo_2} alt="Glasses" />
        </StyledPromoSubWrapper>
        <StyledPromoSubWrapper>
          <StyledPromoBoldDesc>
            3+1 на лінзи родини ТОТАЛ30 та 30+5 на лінзи лінійки Пресіжн
          </StyledPromoBoldDesc>
          <StyledCommonText>
            компанія Алкон в цей важкий час прийняла рішення продовжити
            підтримку кінцевих користувачів завдяки акційній пропозиції 3+1 на
            лінзи родини ТОТАЛ30 та 30+5 на лінзи лінійки Пресіжн. Акція для
            кінцевого споживача триватиме до кінця року: 3+1 для ТОТАЛ 30 (Сфера
            + Торика),30+5 Precision 1 (Сфера + Торика).
          </StyledCommonText>
        </StyledPromoSubWrapper>
      </StyledPromoWrapper>
    </>
  );
};

export default PromotionalOffers;
