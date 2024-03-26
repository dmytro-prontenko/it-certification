import { useLocation } from "react-router-dom";
import { ModalWrapper } from "../../commonStyles/commonStyles";
import SpecialtyAddEditForm from "../Forms/SpecialtyAddEditForm/SpecialtyAddEditForm";
import TeachersAddEditForm from "../Forms/TeachersAddEditForm/TeachersAddEditForm";
import InstitutionAddEditForm from "../Forms/InstitutionAddEditForm/InstitutionAddEditForm";
import EducationLevelAddEditForm from "../Forms/EducationLevelAddEditForm/EducationLevelAddEditForm";
import ProgramsAddEditForm from "../Forms/ProgramsAddEditForm/ProgramsAddEditForm";
import DepartmentAddEditForm from "../Forms/DepartmentAddEditForm/DepartmentAddEditForm";
import DisciplineBlockAddEditForm from "../Forms/DisciplineBlockAddEditForm/DisciplineBlockAddEditForm";
import DisciplineAddEditForm from "../Forms/DisciplineAddEditForm/DisciplineAddEditForm";
import DisciplineGroupAddEditForm from "../Forms/DisciplineGroupAddEditForm/DisciplineGroupAddEditForm";

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
    case "/discipline": {
      formToRender = <DisciplineAddEditForm />;
      break;
    }
    case "/disciplines-group": {
      formToRender = <DisciplineGroupAddEditForm />;
      break;
    }
  }

  return <ModalWrapper>{formToRender}</ModalWrapper>;
};

export default AddEditModal;
