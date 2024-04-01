import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const TeacherCabinetPage = () => {
  return (
    <>
      <div className="container">
        <h1>Teacher cabinet</h1>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default TeacherCabinetPage;
