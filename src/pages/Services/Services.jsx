import { StyledCommonTitle } from "../../commonStyles/commonStyles";
import {
  StyledServiceCard,
  StyledServiceDescr,
  StyledServiceImage,
  StylerServiceList,
  StylerServiceWrapper,
} from "./Services.styled";

import service_1 from "../../assets/images/service/service_photo1.webp";
import service_2 from "../../assets/images/service/service_photo2.webp";
import service_3 from "../../assets/images/service/service_photo3.webp";
import service_4 from "../../assets/images/service/service_photo4.webp";

const Services = () => {
  return (
    <StylerServiceWrapper>
      <StyledCommonTitle>Послуги</StyledCommonTitle>
      <StylerServiceList>
        <StyledServiceCard>
          <StyledServiceImage src={service_1} alt="Service photo" />
          <StyledServiceDescr>Апаратне лікування зору.</StyledServiceDescr>
        </StyledServiceCard>
        <StyledServiceCard>
          <StyledServiceImage src={service_2} alt="Service photo" />
          <StyledServiceDescr>
            Нічні контактні лінзи - підбір, продаж та супровід.
          </StyledServiceDescr>
        </StyledServiceCard>
        <StyledServiceCard>
          <StyledServiceImage src={service_3} alt="Service photo" />
          <StyledServiceDescr>
            Підбір та продаж контактних лінз та засобів догляду за лінзами.
          </StyledServiceDescr>
        </StyledServiceCard>
        <StyledServiceCard>
          <StyledServiceImage src={service_4} alt="Service photo" />
          <StyledServiceDescr>
            Діагностика зору та призначення лікування.
          </StyledServiceDescr>
        </StyledServiceCard>
      </StylerServiceList>
    </StylerServiceWrapper>
  );
};

export default Services;
