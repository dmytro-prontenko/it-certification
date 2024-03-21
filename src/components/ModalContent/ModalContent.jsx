import { useSelector } from "react-redux";

import { selectModalContent } from "../../redux/selectors/serviceSelectors";
import EditDeleteModal from "../EditDeleteModal/EditDeleteModal";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent.action) {
    case "Add":
      return <div>Edit</div>;
    case "Edit":
      return <EditDeleteModal />;
    case "Delete":
      return <EditDeleteModal />;

    default:
      return null;
  }
};

export default ModalContent;
