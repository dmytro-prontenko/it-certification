import styled from "styled-components";
import Vector from "../../../public/Vectors/Vector.png";
import Building from "../../../public/Vectors/Building.png";

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 48px;
  line-height: 1.5;
  letter-spacing: 1px;
  color: #00544d;
  position: relative;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const LeftImage = styled.p`
  background-image: url(${Building});
  width: 305px;
  height: 185px;
  background-repeat: no-repeat;

  position: absolute;
  top: 55%;
  left: 16%;
  transform: translate(-60%, -50%);
`;

export const RightImage = styled.p`
  background-image: url(${Vector});
  width: 350px;
  height: 280px;
  background-repeat: no-repeat;

  position: absolute;
  top: 47%;
  left: 80%;
  transform: translate(-22%, -50%);
`;

