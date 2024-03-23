import { useSelector } from "react-redux";

import { selectModalContent } from "../../redux/selectors/serviceSelectors";
import AddEditModal from "../EditDeleteModal/AddEditModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);
  // console.log(modalContent.action);

  switch (modalContent.action) {
    case "Add":
      return <AddEditModal />;
    case "Edit":
      return <AddEditModal />;
    case "EditConfirm":
      return <ConfirmationModal />;
    case "Delete":
      return <>Delete</>;

    default:
      return null;
  }
};

export default ModalContent;
