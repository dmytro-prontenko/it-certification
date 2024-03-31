import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectModalContent,
} from "../../redux/selectors/serviceSelectors";

import { useLocation } from "react-router-dom";
import {
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";
import {
  addTableDataThunk,
  deleteTableDataThunk,
  editTableDataThunk,
} from "../../redux/thunk/mainInfoThunks";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import ProceedButton from "../Buttons/ProceedButton/ProceedButton";
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
  const currentPage = useSelector(selectCurrentPage);

  let title;
  let actionToDispatch;

  const handleCancel = () => {
    actionToDispatch === "Edit"
      ? dispatch(
          setModalContent({
            action: actionToDispatch,
            recordDataEdit: { ...action.recordDataEdit, ...action.editedData },
          })
        )
      : dispatch(
          setModalContent({
            action: actionToDispatch,
            recordDataEdit: { ...action.recordDataEdit },
          })
        );
  };

  const handleProceed = (actionToDispatch) => {
    dispatch(
      setModalContent({
        action: null,
        recordDataEdit: null,
        recordDataAdd: null,
      })
    );
    switch (actionToDispatch) {
      case "Add": {
        dispatch(
          addTableDataThunk({
            endPoint: `${location.pathname}`,
            postData: action.editedData,
            postParams: { page: currentPage, size: SIZE },
          })
        );
        break;
      }
      case "Edit": {
        dispatch(
          editTableDataThunk({
            endPoint: `${location.pathname}/${action.recordDataEdit.id}`,

            putData: action.editedData,
            editParams: { page: currentPage, size: SIZE },
          })
        );
        break;
      }
      case "Delete": {
        dispatch(
          deleteTableDataThunk({
            endPoint: `${location.pathname}/${action.recordDataEdit.id}`,

            deleteParams: { page: currentPage, size: SIZE },
          })
        );
        break;
      }
    }
    dispatch(setModalStatus(false));
  };

  switch (action.action) {
    case "AddConfirm": {
      title = "Додати новий запис?";
      actionToDispatch = "Add";
      break;
    }
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
