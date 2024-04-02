import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CommonButtonAdminLink from "../Buttons/CommonButtonAdminLink/CommonButtonAdminLink";
import { ButtonWrapper } from "./NavMenu.styled";
import { setTableData } from "../../redux/slice/mainInfoSlice";

const NavMenu = () => {
  const dispatch = useDispatch();

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
        >
          Головна
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/teachers"
          onClick={handleClick}
        >
          Викладачі
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/universities"
          onClick={handleClick}
        >
          ЗВО
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/specialties"
          onClick={handleClick}
        >
          Спеціальність
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/education-levels"
          onClick={handleClick}
        >
          Рівень освіти
        </CommonButtonAdminLink>

        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/education-programs"
          onClick={handleClick}
        >
          Освітні програми
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/department"
          onClick={handleClick}
        >
          Кафедри
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/discipline-blocks"
          onClick={handleClick}
        >
          Блок дисциплін
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/disciplines"
          onClick={handleClick}
        >
          Дисципліна
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/discipline-groups"
          onClick={handleClick}
        >
          Група дисциплін
        </CommonButtonAdminLink>
      </ButtonWrapper>
    </>
  );
};

export default NavMenu;
