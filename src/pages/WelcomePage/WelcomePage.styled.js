import styled from "styled-components";

export const WrapperInfo = styled.div`
  margin-bottom: 80px;
`;

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const InfoTitle = styled.p`
  color: var(--accent-green-300);
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: var(--basic-black);
  max-width: 624px;
  margin-bottom: 40px;
  line-height: 1.5;
`;

export const List = styled.ul`
  margin-left: 25px;
`;

export const LIstItem = styled.li`
  line-height: 1.2;
  letter-spacing: 1px;
  font-size: 20px;
  margin-bottom: 12px;

  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: -4%;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-green-300);
  }
`;

export const ImgText = styled.img`
  /* max-width: 516px;
  max-height: 670px; */
  max-width: 100%;
  height: auto;
`;
export const ImgPhoto = styled.img`
  /* max-width: 516px;
  max-height: 670px; */
  max-width: 100%;
  height: auto;
`;
