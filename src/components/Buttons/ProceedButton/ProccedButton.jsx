import Icon from "../../Icon/Icon";
import { StyledProceedButton } from "./ProceedButton.styled";

const ProceedButton = ({onClick}) => {
  return (
    <StyledProceedButton onClick={onClick}>
      Продовжити
      <Icon
        styles={{ fill: "var( --accent-green-300)" }}
        width={24}
        height={24}
        iconId={"check-min"}
      />
    </StyledProceedButton>
  );
};

export default ProceedButton;
