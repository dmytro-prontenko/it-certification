import { StyledSection } from "../../commonStyles/commonStyles";
import Hero from "../../components/Hero/Hero";
import ProductRangeWelcome from "../../components/ProductRangeWelcome/ProductRangeWelcome";
import PromotionalOffers from "../../components/PromotionalOffers/PromotionalOffers";

const WelcomePage = () => {
  return (
    <>
      <StyledSection>
        <Hero />
      </StyledSection>
      <StyledSection>
        <PromotionalOffers />
      </StyledSection>
      <StyledSection>
        <ProductRangeWelcome />
      </StyledSection>
    </>
  );
};

export default WelcomePage;
