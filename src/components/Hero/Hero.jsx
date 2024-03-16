import { StyledCommonText } from "../../commonStyles/commonStyles";
import {
  StyledBoldTextHero,
  StyledHeroDesc,
  StyledHeroTitle,
  StyledHeroWrapper,
} from "./Hero.styled";

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroTitle>Окуліст</StyledHeroTitle>
      <StyledCommonText>мережа оптик</StyledCommonText>
      <StyledHeroDesc>
        <StyledBoldTextHero>Увага!</StyledBoldTextHero>Надаємо безкоштовні
        окулярні лінзи військовослужбовцям, а також проводимо огляди для
        переселенців зі знижкою 50%!
      </StyledHeroDesc>
    </StyledHeroWrapper>
  );
};

export default Hero;
