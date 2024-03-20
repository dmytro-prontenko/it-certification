import styled from "styled-components";
import { Link } from "react-router-dom";

const getColor = (props) => {
  switch (props.$meta) {
    case "instagram":
      return "rgba(216, 51, 121, 1)";
    case "facebook":
      return "rgba(24, 119, 242, 1)";
    case "phone":
      return "rgba(119, 50, 169, 1)";
    case "telegram":
      return "rgba(37, 163, 226, 1)";
    default:
      return "red";
  }
};

export const StyledFooter = styled.footer``;

export const FooterContainer = styled.div`
  border-top: 1px solid var(--accent-green-300);
`;

export const FooterLogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 48px;
`;

export const IconContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const FooterinfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const SocialItem = styled.li``;

export const FooterLink = styled.a`
  line-height: 27px;
  color: var(--basic-black);
`;

export const SocialIcon = styled.svg`
  &:hover {
    fill: ${getColor};
    color: red;
  }
`;

export const FooterlText = styled.p`
  font-size: 18px;
  line-height: 27px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 351px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 411px;
  margin-top: auto;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 510px;
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
