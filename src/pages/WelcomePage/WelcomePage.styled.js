import styled from "styled-components";

export const WrapperTextTop = styled.div`
  margin-bottom: 80px;
`;

export const WrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const InfoTitle = styled.p`
  color: var(--accent-green-300);
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: var(--basic-black);
  max-width: 624px;
  margin-bottom: 40px;
  line-height: 1.5;
`;

export const List = styled.ul`
  margin-left: 25px;
`;

export const LIstItem = styled.li`
  line-height: 1.5;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 400;
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
///////////////////////////////////////IMG
export const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImgBottom = styled.img`
  max-width: 360px;
  /* display: flex; */
`;
export const ImgText = styled.img`
  max-width: 100%;
`;
export const ImgPhoto = styled.img`
  max-width: 100%;
`;
