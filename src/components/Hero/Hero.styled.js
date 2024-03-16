import styled from "styled-components";

export const StyledHeroWrapper = styled.div`
  padding: 123px 0 175px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 335px;

  &::before {
    content: "";
    background-image: url("/header-background-image.webp");
    background-size: cover;
    background-position: center top;
    filter: blur(4px);
    width: 100vw;
    height: 568px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const StyledHeroTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const StyledHeroDesc = styled.div`
  max-width:280px;
  color: var(--buttons-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 32px;
`;

export const StyledBoldTextHero = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-top: 32px;
`;
