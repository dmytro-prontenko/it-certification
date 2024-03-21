import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";



import { lazy } from "react";
import ModalContent from "./components/ModalContent/ModalContent";
import { setModalContent, setModalStatus } from "./redux/slice/serviceSlice";
import { selectModalContent, selectOpenModal } from "./redux/selectors/serviceSelectors";
import Modal from "./components/Modal/Modal";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const InstitutionPage = lazy(() =>
  import("./pages/InstitutionPage/InstitutionPage")
);
const SpecialtyPage = lazy(() => import("./pages/SpecialtyPage/SpecialtyPage"));
const EducationalPage = lazy(() =>
  import("./pages/EducationalPage/EducationalPage")
);
const ProgramsPage = lazy(() => import("./pages/ProgramsPage/ProgramsPage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const DepartmentPage = lazy(() =>
  import("./pages/DepartmentPage/DepartmentPage")
);
const BlocDisciplinesPage = lazy(() =>
  import("./pages/BlocDisciplinesPage/BlocDisciplinesPage")
);
const DisciplinePage = lazy(() =>
  import("./pages/DisciplinePage/DisciplinePage")
);
const GroupDisPage = lazy(() => import("./pages/GroupDisPage/GroupDisPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const modalStatus = useSelector(selectOpenModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent({action: null, recordData:null}));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/institution" element={<InstitutionPage />} />
          <Route path="/specialty" element={<SpecialtyPage />} />
          <Route path="/educational" element={<EducationalPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/blocdisciplines" element={<BlocDisciplinesPage />} />
          <Route path="/discipline" element={<DisciplinePage />} />
          <Route path="/groupdisciplines" element={<GroupDisPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent />}
      </Modal>
    </>
  );
}

export default App;
