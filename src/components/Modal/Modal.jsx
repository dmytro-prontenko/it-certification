import { useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { StyledBackdrop, StyledModalContent } from "./Modal.styled";

const modalRootElement = document.querySelector("#modal");

const Modal = ({ open, onClose, children }) => {
  const element = useMemo(() => document.createElement("div"), []);
  element.setAttribute("id", "modal-content");

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
          <StyledModalContent>{children}</StyledModalContent>
        </StyledBackdrop>
      )}
    </>,
    element
  );
};

export default Modal;
