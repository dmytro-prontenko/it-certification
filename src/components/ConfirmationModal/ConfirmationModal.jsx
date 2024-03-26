import { useDispatch, useSelector } from "react-redux";
import { selectModalContent } from "../../redux/selectors/serviceSelectors";

import { useLocation } from "react-router-dom";
import {
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";
import {
  deleteTableDataThunk,
  editTableDataThunk,
} from "../../redux/thunk/mainInfoThunks";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import ProceedButton from "../Buttons/ProceedButton/ProccedButton";
import {
  ButtonsWrapper,
  ConfirmationTitle,
  ConfirmationWrapper,
} from "./ConfirmationModal.styled";
import { SIZE } from "../../service/constant";

const ConfirmationModal = () => {
  const location = useLocation();
  const action = useSelector(selectModalContent);
  const dispatch = useDispatch();
  console.log(location);

  const handleCancel = () => {
    dispatch(
      setModalContent({
        action: actionToDispatch,
        recordData: action.recordData,
      })
    );
  };

  const handleProceed = (actionToDispatch) => {
    dispatch(
      setModalContent({
        action: null,
        recordData: null,
      })
    );
    switch (actionToDispatch) {
      case "Edit": {
        dispatch(
          editTableDataThunk({
            endPoint: `${location.pathname}/${action.recordData.id}`,
            putData: action.editedData,
            editParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      case "Delete": {
        console.log(action.recordData.id);
        dispatch(
          deleteTableDataThunk({
            endPoint: `${location.pathname}/${action.recordData.id}`,
            deleteParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
    }
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
    case "Delete": {
      title = "Видалити запис?";
      actionToDispatch = "Delete";
      break;
    }
  }

  return (
    <ConfirmationWrapper>
      <ConfirmationTitle>{title}</ConfirmationTitle>
      <ButtonsWrapper>
        <ProceedButton onClick={() => handleProceed(actionToDispatch)} />
        <CancelButton onClick={handleCancel} />
      </ButtonsWrapper>
    </ConfirmationWrapper>
  );
};

export default ConfirmationModal;
