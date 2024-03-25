import styled from "styled-components";
import Build from "/Vectors/Build.png";

export const Imgwrraper = styled.div`
  background-image: url(${Build});
  background-repeat: no-repeat;

  min-width: 300px;
`;

export const ContainerWelcom = styled.div`
  display: flex;
  justify-content: start;
`;

export const TitleWelcom = styled.h1`
  font-size: 60px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--accent-green-300);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 690px;

  /* &::before {
    content: "";
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-35%);
    width: 360px;
    height: 212px;
    background-color: transparent;
    background-image: url(${Build});
  } */
`;
