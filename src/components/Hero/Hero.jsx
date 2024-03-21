import { HeroContainer, LeftImage, RightImage, Title } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroContainer className="container">
      <LeftImage />
      <Title>
        12 галузь<span>Інформаційні технології</span>
      </Title>
      <RightImage />
    </HeroContainer>
  );
};

export default Hero;
