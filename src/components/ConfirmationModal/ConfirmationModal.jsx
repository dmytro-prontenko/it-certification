import { useDispatch, useSelector } from "react-redux";
import { selectModalContent } from "../../redux/selectors/serviceSelectors";

import { setModalContent } from "../../redux/slice/serviceSlice";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import ProceedButton from "../Buttons/ProceedButton/ProccedButton";
import {
  ButtonsWrapper,
  ConfirmationTitle,
  ConfirmationWrapper,
} from "./ConfirmationModal.styled";

const ConfirmationModal = () => {
  const action = useSelector(selectModalContent);
  const dispatch = useDispatch();

  let title;
  let actionToDispatch;

  switch (action.action) {
    case "EditConfirm": {
      title = "Зберегти редагування?";
      actionToDispatch = "Edit";
      break;
    }
    case "DeleteConfirm": {
      title = "Видалити інформацію?";
      break;
      // actionToDispatch = "Delete";
    }
  }


  return (
    <ConfirmationWrapper>
      <ConfirmationTitle>{title}</ConfirmationTitle>
      <ButtonsWrapper>
        <CancelButton
          onClick={() =>
            dispatch(setModalContent({ action:actionToDispatch, recordData:action.recordData }))
          }
        />
        <ProceedButton onClick={() => console.log("proceed")} />
      </ButtonsWrapper>
    </ConfirmationWrapper>
  );
};

export default ConfirmationModal;
