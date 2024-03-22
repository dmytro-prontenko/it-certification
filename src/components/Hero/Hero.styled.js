import styled from "styled-components";
import Vector from "/Vectors/Vector.png";
import Building from "/Vectors/Building.png";

export const TitleHero = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 1.5;
  color: var(--accent-green-300);
  margin-top: 80px;
  flex-direction: column;
  max-width: 750px;
  text-align: center;
  display: flex;

  justify-content: center;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
////////////// leftImg
export const LeftImage = styled.p`
  background-image: url(${Building});
  width: 296px;
  height: 185px;
  background-repeat: no-repeat;

  position: absolute;
  top: 44%;
  left: 20%;
  transform: translate(-65%, -50%);
`;
///////////////////rightImg
export const RightImage = styled.p`
  background-image: url(${Vector});
  width: 345px;
  height: 280px;
  background-repeat: no-repeat;

  position: absolute;
  top: 35%;
  left: 77%;
  transform: translate(-20%, -50%);
`;

/////////////////////////////////////////////////page
export const Title = styled.h3`
  font-weight: 400;
  line-height: 1.2;
  font-size: 32px;

  color: var(--edit-green);
  margin-top: 20px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: var(--basic-black);
  margin-top: 40px;
  max-width: 740px;
  line-height: 1.2;
  text-align: center;
`;
