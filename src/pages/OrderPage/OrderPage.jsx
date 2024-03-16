// import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import ArticleInOrder from "../../components/Article/ArticleInOrder/ArticleInOrder";
import { StyledOrderPageTitle, StyledOrderPageWrapper } from "./OrderPage.styled";
import { useState } from "react";
import StepToOrder from "../../components/StepToOrder/StepToOrder";

const OrderPage = () => {
  const [stepToOder, SetStepToOder] = useState(false);
  const [buttonStatus,SetButtonStatus] = useState(false)
  
  const handleStepToOder = () => {
    SetStepToOder(true);
    SetButtonStatus(true)
  }

  
  return (
    <StyledOrderPageWrapper>
      <StyledOrderPageTitle>Оформлення замовлення</StyledOrderPageTitle>
      <ArticleInOrder />
      <Button
        variant="contained"
        color="primary"
        onClick={handleStepToOder}
        disabled={buttonStatus}
      >
        Продовжити
      </Button>

      {stepToOder && <StepToOrder />}
    </StyledOrderPageWrapper>
  );
};

export default OrderPage;
