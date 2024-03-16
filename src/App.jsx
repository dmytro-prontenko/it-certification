import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";

// import ModalContent from "./components/ModalContent/ModalContent";
// import { selectOpenModal } from "./redux/selectors";
// import { setModalContent, setModalStatus } from "./redux/slice/serviceSlice";
import { lazy } from "react";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  // const modalStatus = useSelector(selectOpenModal);
  // const dispatch = useDispatch();

  // const handleCloseModal = () => {
  //   dispatch(setModalStatus(false));
  //   dispatch(setModalContent(null));
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/* <Modal open={modalStatus} onClose={handleCloseModal}>
        {<ModalContent />}
      </Modal> */}
    </>
  );
}

export default App;
