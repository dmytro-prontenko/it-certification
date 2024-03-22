import { useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { CloseModalButton, StyledBackdrop, StyledModalContent } from "./Modal.styled";
import Icon from "../Icon/Icon";
import { useDispatch } from "react-redux";
import {
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";


const modalRootElement = document.querySelector("#modal");

const Modal = ({ open, onClose, children }) => {
  const element = useMemo(() => document.createElement("div"), []);
  element.setAttribute("id", "modal-content");
  const dispatch = useDispatch();

  const handleCloseUserModal = () => {
    dispatch(setModalContent({ action: null, recordData: null }));
    dispatch(setModalStatus(false));
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    },
    [open, onClose]
  );

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    modalRootElement.appendChild(element);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      modalRootElement.removeChild(element);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, handleKeyDown, open]);

  return createPortal(
    <>
      {open && (
        <StyledBackdrop onClick={handleBackdropClick}>
          <StyledModalContent>
            <CloseModalButton onClick={handleCloseUserModal}>
              <Icon width={24} height={24} iconId={"close"} />
            </CloseModalButton>
            {children}
          </StyledModalContent>
        </StyledBackdrop>
      )}
    </>,
    element
  );
};

export default Modal;
