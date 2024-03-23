import styled from "styled-components";
import Build from "/Vectors/Build.png";

export const TitleWelcom = styled.h1`
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

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-35%);
    width: 360px;
    height: 212px;
    background-color: transparent;
    background-image: url(${Build});
  }
`;
