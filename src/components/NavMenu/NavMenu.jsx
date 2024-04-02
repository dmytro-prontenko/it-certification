import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CommonButtonAdminLink from "../Buttons/CommonButtonAdminLink/CommonButtonAdminLink";
import { ButtonWrapper } from "./NavMenu.styled";
import { setTableData } from "../../redux/slice/mainInfoSlice";

const NavMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  

  const handleClick = () => {
    dispatch(setTableData({}));
  };

  return (
    <>
      <ButtonWrapper>
        <CommonButtonAdminLink
          color="success"
          component={Link}
          variant="outlined"
          to="/"
          onClick={handleClick}
          disabled={location.pathname === "/"}
        >
          Головна
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/teachers"
          onClick={handleClick}
          disabled={location.pathname === "/teachers"}
        >
          Викладачі
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/universities"
          onClick={handleClick}
          disabled={location.pathname === "/universities"}
        >
          ЗВО
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/specialties"
          onClick={handleClick}
          disabled={location.pathname === "/specialties"}
        >
          Спеціальність
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/education-levels"
          onClick={handleClick}
          disabled={location.pathname === "/education-levels"}
        >
          Рівень освіти
        </CommonButtonAdminLink>

        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/education-programs"
          onClick={handleClick}
          disabled={location.pathname === "/education-programs"}
        >
          Освітні програми
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/department"
          onClick={handleClick}
          disabled={location.pathname === "/department"}
        >
          Кафедри
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/discipline-blocks"
          onClick={handleClick}
          disabled={location.pathname === "/discipline-blocks"}
        >
          Блок дисциплін
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/disciplines"
          onClick={handleClick}
          disabled={location.pathname === "/disciplines"}
        >
          Дисципліна
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/discipline-groups"
          onClick={handleClick}
          disabled={location.pathname === "/discipline-groups"}
        >
          Група дисциплін
        </CommonButtonAdminLink>
      </ButtonWrapper>
    </>
  );
};

export default NavMenu;
