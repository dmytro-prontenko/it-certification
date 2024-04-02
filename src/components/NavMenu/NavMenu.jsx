import { Link } from "react-router-dom";
import CommonButtonAdminLink from "../Buttons/CommonButtonAdminLink/CommonButtonAdminLink";
import { ButtonWrapper } from "./NavMenu.styled";

const NavMenu = () => {
  return (
    <>
      <ButtonWrapper>
        <CommonButtonAdminLink
          color="success"
          component={Link}
          variant="outlined"
          to="/"
        >
          Головна
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/teachers"
        >
          Викладачі
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/universities"
        >
          ЗВО
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/specialties"
        >
          Спеціальність
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/education-levels"
        >
          Рівень освіти
        </CommonButtonAdminLink>

        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/education-programs"
        >
          Освітні програми
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/department"
        >
          Кафедри
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/discipline-blocks"
        >
          Блок дисциплін
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/disciplines"
        >
          Дисципліна
        </CommonButtonAdminLink>
        <CommonButtonAdminLink
          component={Link}
          variant="outlined"
          to="/discipline-groups"
        >
          Група дисциплін
        </CommonButtonAdminLink>
      </ButtonWrapper>
    </>
  );
};

export default NavMenu;
