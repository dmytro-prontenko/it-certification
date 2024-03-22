import {
  HeroContainer,
  LeftImage,
  RightImage,
  Subtitle,
  Title,
  TitleHero,
} from "./Hero.styled";

const Hero = ({ subtitle, subtext }) => {
  return (
    <HeroContainer className="container">
      <LeftImage />
      <div>
        <TitleHero>
          12 галузь<span> “Інформаційні технології”</span>
        </TitleHero>
      </div>
      <div>
        <Title>{subtitle}</Title>
      </div>
      <div>
        <Subtitle>{subtext}</Subtitle>
      </div>
      <RightImage />
    </HeroContainer>
  );
};

export default Hero;
