// import { Container, Grid } from "@mui/material";
// import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { ListPage, PageLink } from "./NavMenu.styled";
const NavMenu = () => {
  return (
    <Container>
      <ListPage>
        <li>
          <PageLink to="/institution">ВНЗ</PageLink>
        </li>
        <li>
          <PageLink to="/specialty">Спеціальність</PageLink>
        </li>
        <li>
          <PageLink to="/educational">Рівень Освіти</PageLink>
        </li>
        <li>
          <PageLink to="/programs">Освітні програми</PageLink>
        </li>
        <li>
          <PageLink to="/teachers">Викладачі</PageLink>
        </li>
        <li>
          <PageLink to="/department">Кафедри</PageLink>
        </li>
        <li>
          <PageLink to="/blocdisciplines">Блок дисциплін</PageLink>
        </li>
        <li>
          <PageLink to="/discipline">Дисципліна</PageLink>
        </li>
        <li>
          <PageLink to="/groupdisciplines">Група дисциплін</PageLink>
        </li>
      </ListPage>
    </Container>
  );
};

export default NavMenu;

// <div>
//   <Container maxWidth="lg" sx={{ mt: "120px" }}>
//     <Grid container rowSpacing={1} columnSpacing={5}>
//       <Grid item xs={2}>
//         <PageLink to="institution">ВНЗ</PageLink>
//       </Grid>
//       <Grid item xs={2}>
//         <PageLink to="specialty">Спеціальність</PageLink>
//       </Grid>
//       <Grid item xs={2}>
//         <PageLink to="educational">Рівень Освіти</PageLink>
//       </Grid>
//       <Grid item xs={3}>
//         <PageLink to="programs">Освітні програми</PageLink>
//       </Grid>
//       <Grid item xs={2}>
//         <PageLink to="teachers">Викладачі</PageLink>
//       </Grid>
//     </Grid>
//   </Container>
//   <div>
//     <Container maxWidth="md" sx={{ mt: "50px" }}>
//       <Grid container rowSpacing={1} columnSpacing={4}>
//         <Grid item xs={3}>
//           <PageLink to="department">Кафедри</PageLink>
//         </Grid>
//         <Grid item xs={3}>
//           <PageLink to="blocdisciplines">Блок дисциплін</PageLink>
//         </Grid>
//         <Grid item xs={3}>
//           <PageLink to="discipline">Дисципліна</PageLink>
//         </Grid>
//         <Grid item xs={3}>
//           <PageLink to="groupdisciplines">Група дисциплін</PageLink>
//         </Grid>
//       </Grid>
//     </Container>
//   </div>
// </div>
