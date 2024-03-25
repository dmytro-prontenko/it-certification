import { useLocation } from "react-router-dom";
import { ModalWrapper } from "../../commonStyles/commonStyles";
import SpecialtyAddEditForm from "../Forms/SpecialtyAddEditForm/SpecialtyAddEditForm";
import TeachersAddEditForm from "../Forms/TeachersAddEditForm/TeachersAddEditForm";

const AddEditModal = () => {
  const location = useLocation();

  let formToRender;

  switch (location.pathname) {
    case "/specialty": {
      formToRender = <SpecialtyAddEditForm />;
      break;
    }
    case "/teachers": {
      formToRender = <TeachersAddEditForm />;
      break;
    }
  }

  return <ModalWrapper>{formToRender}</ModalWrapper>;
};

export default AddEditModal;
