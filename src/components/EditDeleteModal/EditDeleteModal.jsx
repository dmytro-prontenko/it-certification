import { useSelector } from "react-redux";
import { selectModalContent } from "../../redux/selectors/serviceSelectors";
import { ModalWrapper } from "../../commonStyles/commonStyles";


const EditDeleteModal = () => {
  const data = useSelector(selectModalContent);
console.log(data)

  return (
    <ModalWrapper>
      EditDelete {data.recordData.id}
    </ModalWrapper>
  )
}

export default EditDeleteModal
