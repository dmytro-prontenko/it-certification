import { useSelector } from "react-redux";
import { ModalWrapper } from "../../commonStyles/commonStyles";
import { selectModalContent } from "../../redux/selectors/serviceSelectors";

const AddEditModal = () => {
  const data = useSelector(selectModalContent);

  return (
    <ModalWrapper>
      {data.action}
    </ModalWrapper>
  );
};

export default AddEditModal;
