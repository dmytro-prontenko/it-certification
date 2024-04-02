import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CommonButtonLink from "../Buttons/CommonButtonLink/CommonButtonLink";

const NavMenuTeacher = () => {
  return (
    <>
      <ButtonGroup>
        <CommonButtonLink component={Link} to="/teachers-cabinet/calendar">
          Розклад
        </CommonButtonLink>
        <CommonButtonLink component={Link} to="/teachers-cabinet/silabus">
          Силабуси
        </CommonButtonLink>
        <CommonButtonLink component={Link} to="/teachers-cabinet/reviews">
          Події
        </CommonButtonLink>
        <CommonButtonLink component={Link} to="/teachers-cabinet/lecture">
          Відгуки
        </CommonButtonLink>
      </ButtonGroup>
    </>
  );
};
export default NavMenuTeacher;
