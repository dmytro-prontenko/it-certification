import { useSelector } from "react-redux";

import { selectModalContent } from "../../redux/selectors/serviceSelectors";
import AddEditModal from "../EditDeleteModal/AddEditModal";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);
  console.log(modalContent.action);

  switch (modalContent.action) {
    case "Add":
      return <AddEditModal />;
    case "Edit":
      return <AddEditModal />;
    case "Delete":
      return <>Delete</>;

    default:
      return null;
  }
};

export default ModalContent;
