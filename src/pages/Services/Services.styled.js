import styled from "styled-components";

export const StylerServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 24px 20px 60px;
  margin: 0 auto;
`;

export const StylerServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledServiceCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 16px;

  border-radius: 24px;
  border: 1px solid var(--buttons-color);
`;

export const StyledServiceImage = styled.img`
  width: 100%;

  border-radius: 8px;
  box-shadow: 4px 4px 16.4px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledServiceDescr = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
