import { Button } from "@mui/material";
import PersonalData from "../../pages/Profile/PersonalDataPage/PersonalDataPage";
import SignInForm from "../Forms/SignInFrom/SignInForm";
import { StyledButtonsWrapper } from "./StepToOrder.styled";
import { useState } from "react";

const StepToOrder = () => {
  const [newClient, SetNewClient] = useState("outlined");
  const [existingClient, SetExistingClient] = useState("contained");

  const token = false;

  const handleButtonClick = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "new": {
        if (newClient === "outlined") {
          SetNewClient("contained");
          SetExistingClient("outlined");
        }
        break;
      }
      case "exist": {
        if (newClient === "contained") {
          SetNewClient("outlined");
          SetExistingClient("contained");
        }
        break;
      }

      default:
        return;
    }
  };

  return (
    <>
      <StyledButtonsWrapper>
        <Button
          variant={newClient}
          color="primary"
          name="new"
          onClick={(e) => handleButtonClick(e)}
        >
          Я новий покупець
        </Button>
        <Button
          variant={existingClient}
          color="primary"
          name="exist"
          onClick={(e) => handleButtonClick(e)}
        >
          Я постійний клієнт
        </Button>
      </StyledButtonsWrapper>
      {token ? <PersonalData /> : <SignInForm />}
    </>
  );
};

export default StepToOrder;
