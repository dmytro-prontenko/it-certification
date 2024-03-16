import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/ModalContent/ModalContent";
import { selectOpenModal } from "./redux/selectors";
import { setModalContent, setModalStatus } from "./redux/slice/serviceSlice";
import { lazy } from "react";


const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Services = lazy(() => import("./pages/Services/Services"));
const Useful = lazy(() => import("./pages/Useful/Useful"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const ArticleExtendedPage = lazy(() =>
  import("./pages/ArticleExtendedPage/ArticleExtendedPage")
);
const Basket = lazy(() => import("./pages/Basket/Basket"));
const Search = lazy(() => import("./pages/Search/Search"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const PersonalData = lazy(() =>
  import("./pages/Profile/PersonalDataPage/PersonalDataPage")
);
const BonusPage = lazy(() => import("./pages/Profile/BonusPage/BonusPage"));
const OrdersPage = lazy(() => import("./pages/Profile/OrdersPage/OrdersPage"));
const OrderPage = lazy(() => import("./pages/OrderPage/OrderPage"));
const FavoritesPage = lazy(() =>
  import("./pages/Profile/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));



function App() {
  const modalStatus = useSelector(selectOpenModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/useful" element={<Useful />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/glasses/1" element={<ArticleExtendedPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-personal-data" element={<PersonalData />} />
          <Route path="/profile-bonuses" element={<BonusPage />} />
          <Route path="/profile-orders" element={<OrdersPage />} />
          <Route path="/make-order" element={<OrderPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

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
