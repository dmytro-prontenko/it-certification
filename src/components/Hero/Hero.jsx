import { ContainerWelcom, Imgwrraper, TitleWelcom } from "./Hero.styled";

const Hero = () => {
  return (
    <ContainerWelcom className="container">
      <Imgwrraper></Imgwrraper>
      <TitleWelcom>
        12 галузь
        <br />
        Інформаційні технології
      </TitleWelcom>
    </ContainerWelcom>
  );
};

export default Hero;
