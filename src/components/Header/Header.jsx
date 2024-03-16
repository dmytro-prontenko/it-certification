import { NavLink } from "react-router-dom";
import {
  StyledHeader,
  StyledMenuButton,
  StyledNav,
  StyledNavLink,
  StyledNavList,
  StyledNavListItem,
} from "./Header.styled";

import { useDispatch, useSelector } from "react-redux";
import logoIcon from "../../assets/icons/nav-logo.png";
import sprite from "../../assets/sprite.svg";
import { selectOpenModal } from "../../redux/selectors";
import {
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";

const Header = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  const handleModal = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("Modal Menu"));
  };

  const handleCloseUserModal = () => {
    dispatch(setModalContent(null));
    dispatch(setModalStatus(false));
  };

  return (
    <StyledHeader>
      <NavLink to="/">
        <img src={logoIcon} alt="Main logo" width={120} height={38} />
      </NavLink>

      <StyledNav>
        <StyledNavList>
          <StyledNavListItem>
            <StyledNavLink to="/basket">
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-basket`}></use>
              </svg>
            </StyledNavLink>
          </StyledNavListItem>

          <StyledNavListItem>
            <StyledNavLink to="/search">
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-search`}></use>
              </svg>
            </StyledNavLink>
          </StyledNavListItem>

          <StyledNavListItem>
            {!modalStatus ? (
              <StyledMenuButton onClick={handleModal}>
                <svg width="24px" height="24px">
                  <use href={`${sprite}#icon-menu`}></use>
                </svg>
              </StyledMenuButton>
            ) : (
              <StyledMenuButton onClick={handleCloseUserModal}>
                <svg width="24px" height="24px">
                  <use href={`${sprite}#icon-close`}></use>
                </svg>
              </StyledMenuButton>
            )}
          </StyledNavListItem>
        </StyledNavList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
