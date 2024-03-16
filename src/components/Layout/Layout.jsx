import { Suspense } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import SpeedDialSocial from "../SpeedDial/SpeedDial";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <SpeedDialSocial />
      <Footer />
    </Suspense>
  );
};

export default Layout;
