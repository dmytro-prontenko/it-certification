import { Suspense } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

import Loader from "../Loader/Loader";
import Hero from "../Hero/Hero";

const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </Suspense>
  );
};

export default Layout;
