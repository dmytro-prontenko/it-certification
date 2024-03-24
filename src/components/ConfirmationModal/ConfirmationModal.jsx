import { useDispatch, useSelector } from "react-redux";
import { selectModalContent } from "../../redux/selectors/serviceSelectors";

import {
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";
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

  const handleCancel = () => {
    dispatch(
      setModalContent({
        action: actionToDispatch,
        recordData: action.recordData,
      })
    );
  };

  const handleProceed = () => {
    dispatch(
      setModalContent({
        action: null,
        recordData: null,
      })
    );
    dispatch(setModalStatus(false));
  };

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
        <ProceedButton onClick={handleProceed} />
        <CancelButton onClick={handleCancel} />
      </ButtonsWrapper>
    </ConfirmationWrapper>
  );
};

export default ConfirmationModal;
