import { useLocation } from "react-router-dom";
import { ModalWrapper } from "../../commonStyles/commonStyles";
import SpecialtyAddEditForm from "../Forms/SpecialtyAddEditForm/SpecialtyAddEditForm";
import TeachersAddEditForm from "../Forms/TeachersAddEditForm/TeachersAddEditForm";
import InstitutionAddEditForm from "../Forms/InstitutionAddEditForm/InstitutionAddEditForm";
import EducationLevelAddEditForm from "../Forms/EducationLevelAddEditForm/EducationLevelAddEditForm";
import ProgramsAddEditForm from "../Forms/ProgramsAddEditForm/ProgramsAddEditForm";
import DepartmentAddEditForm from "../Forms/DepartmentAddEditForm/DepartmentAddEditForm";
import DisciplineBlockAddEditForm from "../Forms/DisciplineBlockAddEditForm/DisciplineBlockAddEditForm";

const AddEditModal = () => {
  const location = useLocation();

  let formToRender;

  switch (location.pathname) {
    case "/teachers": {
      formToRender = <TeachersAddEditForm />;
      break;
    }
    case "/institution": {
      formToRender = <InstitutionAddEditForm />;
      break;
    }
    case "/specialty": {
      formToRender = <SpecialtyAddEditForm />;
      break;
    }
    case "/education-level": {
      formToRender = <EducationLevelAddEditForm />;
      break;
    }
    case "/programs": {
      formToRender = <ProgramsAddEditForm />;
      break;
    }
    case "/department": {
      formToRender = <DepartmentAddEditForm />;
      break;
    }
    case "/disciplines-block": {
      formToRender = <DisciplineBlockAddEditForm />;
      break;
    }
  }

  return <ModalWrapper>{formToRender}</ModalWrapper>;
};

export default AddEditModal;
