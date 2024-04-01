import { ListItem, ListPage, PageLink } from "./NavMenuTeacher.styled";
import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavMenuTeacher = () => {
  return (
    <>
      <ButtonGroup size="large" color="warning" aria-label="Large button group">
        <Button component={Link} to="/teachers-cabinet/calendar">
          Розклад
        </Button>
        <Button component={Link} to="/teachers-cabinet/silabus">
          Силабуси
        </Button>
        <Button
          sx={{ width: 100 }}
          component={Link}
          to="/teachers-cabinet/reviews"
        >
          Події
        </Button>
        <Button component={Link} to="/teachers-cabinet/lecture">
          Відгуки
        </Button>
      </ButtonGroup>
      {/* <ListPage>
        <ListItem>
          <PageLink to="/teachers-cabinet/calendar">Розклад</PageLink>
        </ListItem>
        <ListItem>
          <PageLink to="/teachers-cabinet/silabus">Силабуси</PageLink>
        </ListItem>
        <ListItem>
          <PageLink to="/teachers-cabinet/reviews">Події</PageLink>
        </ListItem>
        <ListItem>
          <PageLink to="/teachers-cabinet/lecture">Відгуки</PageLink>
        </ListItem>
      </ListPage> */}
    </>
  );
};
export default NavMenuTeacher;
