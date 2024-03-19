import { Container } from "@mui/material";
import NavMenu from "../NavMenu/NavMenu";
import { HeroContainer } from "./Hero.styled";

const Hero = () => {
  return (
    <Container maxWidth="md">
      <NavMenu />
      <HeroContainer>
        <h2>12 галузьgi</h2>
        <h1>інформаційні технології</h1>
      </HeroContainer>
    </Container>
  );
};

export default Hero;
