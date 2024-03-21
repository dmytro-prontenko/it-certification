import styled from "styled-components";
import Vector from "/Vectors/Vector.png";
import Building from "/Vectors/Building.png";

export const Title = styled.h1`
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 48px;
  line-height: 1.5;
  color: var(--accent-green-300);

  width: 635px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const LeftImage = styled.p`
  background-image: url(${Building});
  width: 305px;
  height: 185px;
  background-repeat: no-repeat;

  position: absolute;
  top: 70%;
  left: 15%;
  transform: translate(-60%, -50%);
`;

export const RightImage = styled.p`
  background-image: url(${Vector});
  width: 345px;
  height: 280px;
  background-repeat: no-repeat;

  position: absolute;
  top: 47%;
  left: 79%;
  transform: translate(-21%, -50%);
`;
