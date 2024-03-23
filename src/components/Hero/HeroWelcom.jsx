import { HeroContainer } from "./Hero.styled";
import { TitleWelcom } from "./HeroWelcom.styled";

const HeroWelcom = () => {
  return (
    <HeroContainer className="container">
      <div>
        <TitleWelcom>
          12 галузь<span> &#8220;Інформаційні технології &#8222;</span>
        </TitleWelcom>
      </div>
    </HeroContainer>
  );
};

export default HeroWelcom;
