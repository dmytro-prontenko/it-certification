import { useLocation } from "react-router-dom";
import { ModalWrapper } from "../../commonStyles/commonStyles";
import SpecialtyAddEditForm from "../Forms/SpecialtyAddEditForm/SpecialtyAddEditForm";
import TeachersAddEditForm from "../Forms/TeachersAddEditForm/TeachersAddEditForm";

import EducationLevelAddEditForm from "../Forms/EducationLevelAddEditForm/EducationLevelAddEditForm";
import ProgramsAddEditForm from "../Forms/ProgramsAddEditForm/ProgramsAddEditForm";
import DepartmentAddEditForm from "../Forms/DepartmentAddEditForm/DepartmentAddEditForm";
import DisciplineBlockAddEditForm from "../Forms/DisciplineBlockAddEditForm/DisciplineBlockAddEditForm";
import DisciplineAddEditForm from "../Forms/DisciplineAddEditForm/DisciplineAddEditForm";
import DisciplineGroupAddEditForm from "../Forms/DisciplineGroupAddEditForm/DisciplineGroupAddEditForm";
import UniversityAddEditForm from "../Forms/UniversityAddEditForm/UniversityAddEditForm";

const AddEditModal = () => {
  const location = useLocation();

  let formToRender;

  switch (location.pathname) {
    case "/teachers": {
      formToRender = <TeachersAddEditForm />;
      break;
    }
    case "/universities": {
      formToRender = <UniversityAddEditForm />;
      break;
    }
    case "/specialties": {
      formToRender = <SpecialtyAddEditForm />;
      break;
    }
    case "/education-levels": {
      formToRender = <EducationLevelAddEditForm />;
      break;
    }
    case "/education-programs": {
      formToRender = <ProgramsAddEditForm />;
      break;
    }
    case "/department": {
      formToRender = <DepartmentAddEditForm />;
      break;
    }
    case "/discipline-blocks": {
      formToRender = <DisciplineBlockAddEditForm />;
      break;
    }
    case "/disciplines": {
      formToRender = <DisciplineAddEditForm />;
      break;
    }
    case "/discipline-groups": {
      formToRender = <DisciplineGroupAddEditForm />;
      break;
    }
  }

  return <ModalWrapper>{formToRender}</ModalWrapper>;
};

export default AddEditModal;
