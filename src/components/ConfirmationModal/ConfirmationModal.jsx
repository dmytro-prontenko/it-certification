import { useSelector } from "react-redux";
import { selectModalContent } from "../../redux/selectors/serviceSelectors";

const ConfirmationModal = () => {
  const action = useSelector(selectModalContent);

  let title;
  switch (action.action) {
    case "EditConfirm": {
      title = "Зберегти редагування?";
      break;
    }
    case "DeleteConfirm": {
      title = "Зберегти редагування?";
      break;
    }
  }

  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export default ConfirmationModal;
