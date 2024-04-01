import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";

import { lazy } from "react";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/ModalContent/ModalContent";
import { selectOpenModal } from "./redux/selectors/serviceSelectors";
import { setModalContent, setModalStatus } from "./redux/slice/serviceSlice";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const InstitutionPage = lazy(() =>
  import("./pages/InstitutionPage/InstitutionPage")
);
const SpecialtyPage = lazy(() => import("./pages/SpecialtyPage/SpecialtyPage"));
const EducationLevelPage = lazy(() =>
  import("./pages/EducationLevelPage/EducationLevelPage")
);
const ProgramsPage = lazy(() => import("./pages/ProgramsPage/ProgramsPage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const DepartmentPage = lazy(() =>
  import("./pages/DepartmentPage/DepartmentPage")
);
const BlockDisciplinesPage = lazy(() =>
  import("./pages/BlockDisciplinesPage/BlockDisciplinesPage")
);
const DisciplinePage = lazy(() =>
  import("./pages/DisciplinePage/DisciplinePage")
);
const GroupDisPage = lazy(() => import("./pages/GroupDisPage/GroupDisPage"));
const TeacherCabinetPage = lazy(() =>
  import("./pages/TeacherCabinetPage/TeacherCabinetPage")
);
const CalendarPage = lazy(() => import("./components/Test/CalendarPage"));
const SilabusPage = lazy(() => import("./components/Test/SilabusPage"));
const ReviewsPage = lazy(() => import("./components/Test/ReviewsPage"));
const LecturesPage = lazy(() => import("./components/Test/LecturesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const modalStatus = useSelector(selectOpenModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent({ action: null, recordData: null }));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="institution" element={<InstitutionPage />} />
          <Route path="specialty" element={<SpecialtyPage />} />
          <Route path="education-level" element={<EducationLevelPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="department" element={<DepartmentPage />} />
          <Route path="discipline" element={<DisciplinePage />} />
          <Route path="disciplines-block" element={<BlockDisciplinesPage />} />
          <Route path="disciplines-group" element={<GroupDisPage />} />
          <Route path="teachers-cabinet" element={<TeacherCabinetPage />}>
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="silabus" element={<SilabusPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="lecture" element={<LecturesPage />} />
          </Route>
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
