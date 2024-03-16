import { useDispatch } from "react-redux";
import {
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";
import {
  StyledLinksLikeButtonsWrapper,
  StyledModalMenuHeaderWrapper,
  StyledModalMenuSubwrapper,
  StyledModalMenuWrapper,
  StyledModalNav,
  StyledModalNavList,
  StyledModalNavListItem,
  StyledPrimaryNavLink
} from "./ModalMenu.styled";

import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/icons/nav-logo.png";
import sprite from "../../assets/sprite.svg";

const ModalMenu = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  // const handleFavoritesModal = () => {
  //   dispatch(setModalContent("Favorites"));
  // };
  // const handleCabinetModal = () => {
  //   dispatch(setModalContent("Cabinet"));
  // };

  return (
    <StyledModalMenuWrapper>
      <StyledModalMenuSubwrapper>
        <StyledModalMenuHeaderWrapper>
          <NavLink to="/">
            <img src={logoIcon} alt="Main logo" width={120} height={38} />
          </NavLink>
          <div>
            <svg width="24px" height="24px" onClick={handleCloseModal}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </div>
        </StyledModalMenuHeaderWrapper>

        <StyledModalNav>
          <StyledModalNavList>
            <StyledModalNavListItem to="/" onClick={handleCloseModal}>
              Головна
            </StyledModalNavListItem>
            <StyledModalNavListItem to="/about" onClick={handleCloseModal}>
              Про нас
            </StyledModalNavListItem>
            <StyledModalNavListItem to="/services" onClick={handleCloseModal}>
              послуги
            </StyledModalNavListItem>
            <StyledModalNavListItem to="/useful" onClick={handleCloseModal}>
              корисне
            </StyledModalNavListItem>
            <StyledModalNavListItem to="/catalog" onClick={handleCloseModal}>
              Каталог
            </StyledModalNavListItem>
            <StyledModalNavListItem to="reviews" onClick={handleCloseModal}>
              Відгуки
            </StyledModalNavListItem>
            <StyledModalNavListItem to="/contacts" onClick={handleCloseModal}>
              Контакти
            </StyledModalNavListItem>
          </StyledModalNavList>
        </StyledModalNav>
        <StyledLinksLikeButtonsWrapper>
          {/* <StyledPrimaryButton onClick={handleFavoritesModal}>
            Обране
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-favorite`}></use>
            </svg>
          </StyledPrimaryButton>
          <StyledPrimaryButton onClick={handleCabinetModal}>
            Кабінет
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-account`}></use>
            </svg>
          </StyledPrimaryButton> */}
          <StyledPrimaryNavLink to="/favorites" onClick={handleCloseModal}>
            Обране
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-favorite`}></use>
            </svg>
          </StyledPrimaryNavLink>
          <StyledPrimaryNavLink to="/profile" onClick={handleCloseModal}>
            Кабінет
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-account`}></use>
            </svg>
          </StyledPrimaryNavLink>
        </StyledLinksLikeButtonsWrapper>
      </StyledModalMenuSubwrapper>
    </StyledModalMenuWrapper>
  );
};

export default ModalMenu;
