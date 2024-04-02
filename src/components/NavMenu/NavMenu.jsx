import { Button, ButtonGroup, Grid, Stack } from "@mui/material";
import { ListPage, PageLink } from "./NavMenu.styled";
import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Stack direction={"row"} spacing={2}>
          <Button color="success" component={Link} variant="outlined" to="/">
            Головна
          </Button>
          <Button component={Link} variant="outlined" to="/teachers">
            Викладачі
          </Button>
          <Button component={Link} variant="outlined" to="/universities">
            ЗВО
          </Button>
          <Button component={Link} variant="outlined" to="/specialties">
            Спеціальність
          </Button>
          <Button component={Link} variant="outlined" to="/education-levels">
            Рівень освіти
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction={"row"} spacing={2}>
          <Button component={Link} variant="outlined" to="/education-programs">
            Освітні програми
          </Button>
          <Button component={Link} variant="outlined" to="/department">
            Кафедри
          </Button>
          <Button component={Link} variant="outlined" to="/discipline-blocks">
            Блок дисциплін
          </Button>
          <Button component={Link} variant="outlined" to="/disciplines">
            Дисципліна
          </Button>
          <Button component={Link} variant="outlined" to="/discipline-groups">
            Група дисциплін
          </Button>
        </Stack>
      </Grid>
    </Grid>
    // <ListPage>
    //   <li>
    //     <PageLink to="/">Головна</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/teachers">Викладачі</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/universities">ЗВО</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/specialties">Спеціальність</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/education-levels">Рівень освіти</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/education-programs">Освітні програми</PageLink>
    //   </li>

    //   <li>
    //     <PageLink to="/department">Кафедри</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/discipline-blocks">Блок дисциплін</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/disciplines">Дисципліна</PageLink>
    //   </li>
    //   <li>
    //     <PageLink to="/discipline-groups">Група дисциплін</PageLink>
    //   </li>
    // </ListPage>
  );
};

export default NavMenu;
